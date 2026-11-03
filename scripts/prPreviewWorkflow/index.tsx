/**
 * PR icon preview, untrusted half (`.github/workflows/pr-icon-preview.yml`).
 *
 * Finds the brands touched by a diff, renders them with the `build:static` exporter
 * (scripts/svgWorkflow) into a scratch folder, turns the results into light / dark preview
 * tiles, runs the icon ESLint rules plus a few structure checks and writes
 * `<out>/summary.json`, `<out>/images/**` and `<out>/comment.md`.
 *
 * Usage: bun scripts/prPreviewWorkflow/index.tsx [--base HEAD^1] [--head <ref>] [--out tmp/pr-preview]
 *        [--brands Id,Id] (skip git detection)
 * Env:   PR_NUMBER, HEAD_SHA (metadata only)
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative, resolve } from 'node:path';

import { consola } from 'consola';
import { type ComponentType, createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import sharp from 'sharp';

import { getIconIds, rootDir, srcDir, SvgWorkflow } from '../svgWorkflow/workflow';
import {
  type PreviewBrand,
  type PreviewIssue,
  type PreviewSummary,
  type PreviewVariant,
  renderComment,
  SHA,
} from './comment';

const MAX_BRANDS = 20;
/** Tiles are rendered at 2x and shown at 80px high (48px icon + 2 * 16px padding). */
const ICON_HEIGHT = 96;
const PADDING = 32;
const MAX_TILE_WIDTH = 1600;
const BACKGROUND = { dark: '#0D1117', light: '#FFFFFF' } as const;
const FOREGROUND = { dark: '#FFFFFF', light: '#000000' } as const;
type Theme = keyof typeof BACKGROUND;
const THEMES: Theme[] = ['light', 'dark'];

/** Exported by `SvgWorkflow.runSvg`: compound key -> file suffix. */
const SVG_VARIANTS = [
  ['Mono', '', undefined],
  ['Color', '-color', 'Color'],
  ['Text', '-text', 'Text'],
  ['TextColor', '-text-color', 'TextColor'],
  ['TextCn', '-text-cn', 'TextCn'],
  ['Brand', '-brand', 'Brand'],
  ['BrandColor', '-brand-color', 'BrandColor'],
] as const;

const REQUIRED_FILES = ['index.ts', 'style.ts', 'index.mdx', 'components/Mono.tsx'];
const EXPECTED_COMPONENTS = ['Text', 'Combine', 'Avatar'];

// ---------------------------------------------------------------- args

const args = process.argv.slice(2);
const arg = (name: string) => {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? undefined : args[index + 1];
};
const base = arg('base') ?? 'HEAD^1';
const head = arg('head');
const outDir = resolve(rootDir, arg('out') ?? 'tmp/pr-preview');
const brandsArg = arg('brands');

const git = (...gitArgs: string[]) => {
  const result = spawnSync('git', gitArgs, { cwd: rootDir, encoding: 'utf8' });
  return { ok: result.status === 0, stdout: result.stdout?.trim() ?? '' };
};
const existsAtBase = (path: string) => git('cat-file', '-e', `${base}:${path}`).ok;

// ---------------------------------------------------------------- detect

interface Changes {
  /** Changed (non-deleted) component files, relative to the repo root. */
  files: string[];
  present: string[];
  removed: string[];
}

const isBrandDir = (id: string) => existsSync(resolve(srcDir, id, 'components'));

const detectChanges = (): Changes => {
  if (brandsArg) {
    const present = brandsArg.split(',').filter((id) => isBrandDir(id));
    const files = present.flatMap((id) =>
      git('ls-files', `src/${id}/components`).stdout.split('\n').filter(Boolean),
    );
    return { files, present, removed: [] };
  }

  const diff = git('diff', '--name-status', '-M', base, ...(head ? [head] : []), '--', 'src');
  if (!diff.ok) throw new Error(`git diff against ${base} failed`);

  const touched = new Set<string>();
  const files = new Set<string>();
  for (const line of diff.stdout.split('\n').filter(Boolean)) {
    const [status, ...paths] = line.split('\t');
    paths.forEach((path, index) => {
      const match = path.match(/^src\/([\dA-Za-z]+)\/(.+)$/);
      if (!match) return;
      touched.add(match[1]);
      const isDeleted = status === 'D' || (status.startsWith('R') && index === 0);
      if (!isDeleted && /^components\/[^/]+\.tsx$/.test(match[2])) files.add(path);
    });
  }

  const present: string[] = [];
  const removed: string[] = [];
  for (const id of [...touched].sort()) {
    if (isBrandDir(id)) present.push(id);
    else if (!existsSync(resolve(srcDir, id)) && existsAtBase(`src/${id}/components`))
      removed.push(id);
  }
  return {
    files: [...files].filter((file) => existsSync(resolve(rootDir, file))),
    present,
    removed,
  };
};

// ---------------------------------------------------------------- checks

const issue = (rule: string, message: string, extra: Partial<PreviewIssue> = {}): PreviewIssue => ({
  message,
  rule,
  severity: 'warning',
  ...extra,
});

interface EslintMessage {
  column?: number;
  fatal?: boolean;
  line?: number;
  message: string;
  ruleId: string | null;
  severity: number;
}

/** Run the repo's ESLint config (scripts/eslint-plugin-icons rules) on changed component files. */
const lintFiles = (files: string[]): Map<string, PreviewIssue[]> => {
  const result = new Map<string, PreviewIssue[]>();
  if (files.length === 0) return result;

  const eslint = spawnSync(
    resolve(rootDir, 'node_modules/.bin/eslint'),
    ['--format', 'json', '--no-warn-ignored', ...files],
    { cwd: rootDir, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  let reports: { filePath: string; messages: EslintMessage[] }[];
  try {
    reports = JSON.parse(eslint.stdout);
  } catch {
    throw new Error(`eslint did not return JSON:\n${eslint.stderr || eslint.stdout}`);
  }

  for (const report of reports) {
    const file = relative(rootDir, report.filePath).replaceAll('\\', '/');
    const id = file.split('/')[1];
    for (const message of report.messages) {
      if (!message.fatal && !message.ruleId?.startsWith('icons/')) continue;
      const list = result.get(id) ?? [];
      list.push(
        issue(message.ruleId ?? 'eslint/parse-error', message.message, {
          column: message.column,
          file,
          line: message.line,
          severity: message.severity === 2 ? 'error' : 'warning',
        }),
      );
      result.set(id, list);
    }
  }
  return result;
};

const checkStructure = (id: string): PreviewIssue[] => {
  const issues: PreviewIssue[] = [];
  for (const file of REQUIRED_FILES) {
    if (!existsSync(resolve(srcDir, id, file)))
      issues.push(issue('structure/missing-file', `Missing src/${id}/${file}`));
  }
  for (const name of EXPECTED_COMPONENTS) {
    if (!existsSync(resolve(srcDir, id, 'components', `${name}.tsx`)))
      issues.push(
        issue(
          `structure/missing-${name.toLowerCase()}`,
          `Brand has no ${name} variant (components/${name}.tsx)`,
        ),
      );
  }
  return issues;
};

/** Same idea as scripts/check-svg-ids.tsx: two instances must not share ids, refs must resolve. */
const checkRenderedIds = (id: string, name: string, Component: ComponentType): PreviewIssue[] => {
  const file = `src/${id}/components/${name}.tsx`;
  const markup = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      createElement(Component, { key: 1 } as any),
      createElement(Component, { key: 2 } as any),
    ),
  );
  const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const issues: PreviewIssue[] = [];
  const duplicated = [...new Set(ids.filter((value, index) => ids.indexOf(value) !== index))];
  if (duplicated.length > 0)
    issues.push(
      issue(
        'render/duplicate-svg-id',
        `Two rendered instances share id(s) ${duplicated.join(', ')}; generate them with useFillId / useFillIds`,
        { file, severity: 'error' },
      ),
    );
  for (const svg of markup.split(/(?=<svg\b)/).filter((chunk) => chunk.startsWith('<svg'))) {
    for (const [, ref] of svg.matchAll(/url\(#([^)]+)\)/g)) {
      if (!svg.includes(`id="${ref}"`)) {
        issues.push(
          issue('render/dangling-svg-ref', `url(#${ref}) does not resolve inside the icon`, {
            file,
            severity: 'error',
          }),
        );
        break;
      }
    }
  }
  return issues;
};

// ---------------------------------------------------------------- render

const tile = async (
  input: string | Buffer,
  output: string,
  theme: Theme,
  height: number = ICON_HEIGHT,
) => {
  await sharp(input)
    .resize({ fit: 'inside', height, width: MAX_TILE_WIDTH - PADDING * 2 })
    .extend({
      background: BACKGROUND[theme],
      bottom: PADDING,
      left: PADDING,
      right: PADDING,
      top: PADDING,
    })
    .flatten({ background: BACKGROUND[theme] })
    .png({ compressionLevel: 9 })
    .toFile(output);
};

/** Combine is HTML (Flexbox + svg), so screenshot it in the exporter's Puppeteer browser. */
const screenshotCombine = async (
  workflow: SvgWorkflow,
  Combine: ComponentType,
  output: string,
  theme: Theme,
) => {
  const markup = renderToStaticMarkup(
    createElement(Combine, {
      size: ICON_HEIGHT / 2,
      style: { alignItems: 'center', display: 'flex' },
    } as any),
  );
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8" /><style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: ${BACKGROUND[theme]}; color: ${FOREGROUND[theme]}; }
#root { display: inline-flex; padding: ${PADDING / 2}px; }
</style></head><body><div id="root">${markup}</div></body></html>`;
  const browser = await workflow.getBrowser();
  const page = await browser.newPage();
  try {
    await page.setViewport({ deviceScaleFactor: 2, height: 400, width: MAX_TILE_WIDTH / 2 });
    await page.setContent(html, { waitUntil: 'load' });
    const root = await page.$('#root');
    if (!root) throw new Error('Combine root not found');
    await root.screenshot({ path: output as `${string}.png`, type: 'png' });
  } finally {
    await page.close();
  }
};

const renderBrands = async (ids: string[], imagesDir: string) => {
  const staticDir = mkdtempSync(join(tmpdir(), 'lobe-icons-preview-'));
  const workflow = new SvgWorkflow({
    only: ids,
    outputDirs: {
      avatar: join(staticDir, 'avatar'),
      png: join(staticDir, 'png'),
      svg: join(staticDir, 'svg'),
      webp: join(staticDir, 'webp'),
    },
  });

  const results = new Map<
    string,
    { issues: PreviewIssue[]; title?: string; variants: PreviewVariant[] }
  >();
  try {
    await workflow.loadIcons();
    workflow.ensureOutputDirs();
    await workflow.runSvg();
    await workflow.runPng();

    for (const [id, Icon] of Object.entries(workflow.icons)) {
      const key = id.toLowerCase();
      const brandDir = join(imagesDir, key);
      mkdirSync(brandDir, { recursive: true });
      const variants: PreviewVariant[] = [];
      const issues: PreviewIssue[] = [];
      const compound = Icon as unknown as Record<string, ComponentType | undefined>;

      const add = async (name: string, render: (theme: Theme, output: string) => Promise<void>) => {
        const variant: PreviewVariant = { name };
        for (const theme of THEMES) {
          const fileName = `${name.toLowerCase()}-${theme}.png`;
          try {
            await render(theme, join(brandDir, fileName));
            variant[theme] = `${key}/${fileName}`;
          } catch (error) {
            issues.push(
              issue('render/failed', `${name} (${theme}) failed to render: ${String(error)}`, {
                severity: 'error',
              }),
            );
          }
        }
        variants.push(variant);
      };

      for (const [name, suffix, prop] of SVG_VARIANTS) {
        const Component = prop ? compound[prop] : (Icon as ComponentType);
        if (!Component) continue;
        await add(name, async (theme, output) => {
          const png = join(workflow.outputDirs.png, theme, `${key}${suffix}.png`);
          if (!existsSync(png)) throw new Error('not exported by scripts/svgWorkflow');
          await tile(png, output, theme);
        });
        try {
          issues.push(...checkRenderedIds(id, prop ?? 'Mono', Component));
        } catch {
          // render errors are already reported by `add`
        }
      }

      const Combine = compound.Combine;
      if (Combine)
        await add('Combine', (theme, output) =>
          screenshotCombine(workflow, Combine, output, theme),
        );

      results.set(id, {
        issues,
        title: typeof (Icon as any).title === 'string' ? (Icon as any).title : undefined,
        variants,
      });
    }

    // Avatar last: runAvatar closes the shared browser when it is done.
    await workflow.runAvatar();
    for (const [id, Icon] of Object.entries(workflow.icons)) {
      if (!(Icon as any).Avatar) continue;
      const key = id.toLowerCase();
      const webp = join(workflow.outputDirs.avatar, `${key}.webp`);
      const result = results.get(id)!;
      const variant: PreviewVariant = { name: 'Avatar' };
      for (const theme of THEMES) {
        if (!existsSync(webp)) continue;
        const fileName = `avatar-${theme}.png`;
        await tile(webp, join(imagesDir, key, fileName), theme);
        variant[theme] = `${key}/${fileName}`;
      }
      if (!variant.light)
        result.issues.push(
          issue('render/failed', 'Avatar failed to render', { severity: 'error' }),
        );
      result.variants.push(variant);
    }
  } finally {
    await workflow.closeBrowser();
    rmSync(staticDir, { force: true, recursive: true });
  }
  return results;
};

// ---------------------------------------------------------------- annotations

const escapeData = (value: string) =>
  value.replaceAll('%', '%25').replaceAll('\r', '%0D').replaceAll('\n', '%0A');
const escapeProperty = (value: string) =>
  escapeData(value).replaceAll(':', '%3A').replaceAll(',', '%2C');

const annotate = (brands: PreviewBrand[]) => {
  if (!process.env.GITHUB_ACTIONS) return;
  for (const brand of brands) {
    for (const item of brand.issues) {
      const props = [
        `file=${escapeProperty(item.file ?? `src/${brand.id}/index.ts`)}`,
        item.line && `line=${item.line}`,
        item.column && `col=${item.column}`,
        `title=${escapeProperty(item.rule)}`,
      ].filter(Boolean);
      console.log(`::${item.severity} ${props.join(',')}::${escapeData(item.message)}`);
    }
  }
};

// ---------------------------------------------------------------- main

const main = async () => {
  rmSync(outDir, { force: true, recursive: true });
  const imagesDir = join(outDir, 'images');
  mkdirSync(imagesDir, { recursive: true });

  const changes = detectChanges();
  const registered = new Set(getIconIds());
  const candidates = changes.present.slice(0, MAX_BRANDS);
  const skipped = changes.present.slice(MAX_BRANDS);
  consola.info(
    `Changed brands: ${candidates.join(', ') || '(none)'}; removed: ${changes.removed.join(', ') || '(none)'}`,
  );

  const lint = lintFiles(changes.files.filter((file) => candidates.includes(file.split('/')[1])));
  const renderable = candidates.filter((id) => registered.has(id));
  const rendered = renderable.length > 0 ? await renderBrands(renderable, imagesDir) : new Map();

  const brands: PreviewBrand[] = candidates.map((id) => {
    const result = rendered.get(id);
    const issues = [
      ...(registered.has(id)
        ? []
        : [
            issue('structure/not-registered', `${id} is not exported from src/icons.ts`, {
              file: 'src/icons.ts',
              severity: 'error',
            }),
          ]),
      ...checkStructure(id),
      ...(lint.get(id) ?? []),
      ...(result?.issues ?? []),
    ];
    return {
      id,
      issues,
      status: existsAtBase(`src/${id}/index.ts`) ? 'modified' : 'added',
      title: result?.title,
      variants: result?.variants ?? [],
    };
  });

  const prNumber = Number(process.env.PR_NUMBER);
  const headSha = process.env.HEAD_SHA ?? git('rev-parse', head ?? 'HEAD').stdout;
  const baseSha = git('rev-parse', base).stdout;
  const summary: PreviewSummary = {
    baseSha: SHA.test(baseSha) ? baseSha : undefined,
    brands,
    headSha: SHA.test(headSha) ? headSha : undefined,
    pr: Number.isSafeInteger(prNumber) && prNumber > 0 ? prNumber : undefined,
    removed: changes.removed,
    skipped,
    version: 1,
  };

  writeFileSync(join(outDir, 'summary.json'), JSON.stringify(summary, null, 2) + '\n');
  writeFileSync(join(outDir, 'comment.md'), renderComment(summary, { imageBase: 'images' }));
  annotate(brands);

  const issueCount = brands.reduce((count, brand) => count + brand.issues.length, 0);
  consola.success(
    `Preview written to ${relative(rootDir, outDir) || outDir}: ${brands.length} brand(s), ${issueCount} issue(s)`,
  );
};

main().catch((error) => {
  consola.error(error);
  process.exit(1);
});
