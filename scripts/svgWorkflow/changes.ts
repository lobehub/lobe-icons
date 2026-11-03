/**
 * Plan an incremental `build:static`: which icons changed since the last static export.
 *
 * Baseline: the newest commit on HEAD whose *subject* is the release workflow's
 * `✨ feat(auto): Auto build static icons`. That commit was made from the very tree it exported,
 * so its `src/` is what packages/static-* were rendered from. When an export changed nothing no
 * commit is made and the baseline stays older, which only widens the diff (safe).
 *
 * Anything that could change how every icon renders falls back to a full export.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { getIconIds, rootDir, srcDir } from './workflow';

export const AUTO_BUILD_SUBJECTS = [
  '✨ feat(auto): Auto build static icons',
  '🤖 feat: Auto build static icons',
];

/** Paths whose change forces a full export (prefix match). */
const FULL_EXPORT_PATHS = [
  'scripts/svgWorkflow/',
  'src/features/',
  'src/components/',
  'src/hooks/',
  'src/types/',
  'src/index.ts',
  'tsconfig.json',
  '.bunfig.toml',
  'bunfig.toml',
];

/** Generated or unrelated to rendering. */
const IGNORED_SRC_FILES = new Set(['src/toc.json', 'src/toc.ts']);

/** package.json fields / dev dependencies that can change rendered output. */
const DEPENDENCY_FIELDS = ['dependencies', 'peerDependencies', 'overrides', 'resolutions'];
const RENDER_PACKAGES = ['@lobehub/ui', 'puppeteer', 'react', 'react-dom', 'sharp'];
const RENDER_LOCK_LINE =
  /(?:^|[\s"'/])(?:@lobehub\/ui|@img\/sharp|@puppeteer\/|puppeteer|react|react-dom|sharp)@/;

export interface ExportPlan {
  baseline?: string;
  full: boolean;
  /** Icon ids to export (as registered in src/icons.ts). */
  only: string[];
  reasons: string[];
  /** Lower-cased ids whose files should be deleted from packages/static-*. */
  remove: string[];
}

const git = (...args: string[]) => {
  const result = spawnSync('git', args, {
    cwd: rootDir,
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
  });
  return { ok: result.status === 0, stdout: result.stdout ?? '' };
};

export const findBaseline = (): string | undefined => {
  const log = git('log', '--format=%H%x09%s', 'HEAD');
  if (!log.ok) return undefined;
  for (const line of log.stdout.split('\n')) {
    const [sha, subject] = line.split('\t');
    if (subject && AUTO_BUILD_SUBJECTS.includes(subject.trim())) return sha;
  }
  return undefined;
};

const parseIconIds = (source: string) =>
  Array.from(source.matchAll(/default as (\w+)/g), (match) => match[1]);

const showAt = (ref: string, path: string) => {
  const result = git('show', `${ref}:${path}`);
  return result.ok ? result.stdout : undefined;
};

const pick = (json: Record<string, any>) => ({
  ...Object.fromEntries(DEPENDENCY_FIELDS.map((field) => [field, json[field]])),
  devDependencies: Object.fromEntries(
    RENDER_PACKAGES.map((name) => [name, json.devDependencies?.[name]]),
  ),
});

/** Other brands a brand imports (`@/Other/...`, `../../Other/...`), e.g. a Combine reusing another Mono. */
const brandImports = (brand: string, brands: Set<string>): Set<string> => {
  const found = new Set<string>();
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = resolve(dir, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (/\.[jt]sx?$/.test(entry.name)) {
        const source = readFileSync(path, 'utf8');
        for (const [, target] of source.matchAll(
          /from\s+["'](?:@\/|(?:\.\.\/)+)([\dA-Za-z]+)(?:\/[^"']*)?["']/g,
        )) {
          if (target !== brand && brands.has(target)) found.add(target);
        }
      }
    }
  };
  walk(resolve(srcDir, brand));
  return found;
};

export const planExport = ({
  full = false,
  since = 'auto',
}: {
  full?: boolean;
  since?: string;
}): ExportPlan => {
  const fullPlan = (reason: string, baseline?: string): ExportPlan => ({
    baseline,
    full: true,
    only: [],
    reasons: [reason],
    remove: [],
  });

  if (full) return fullPlan('full export requested');

  const baseline =
    since === 'auto'
      ? findBaseline()
      : git('rev-parse', '--verify', `${since}^{commit}`).stdout.trim() || undefined;
  if (!baseline) return fullPlan(`no baseline found (${since}); is the clone shallow?`);

  const baseSource = showAt(baseline, 'src/icons.ts');
  if (baseSource === undefined) return fullPlan('src/icons.ts missing at baseline', baseline);

  const headIds = getIconIds();
  const baseIds = parseIconIds(baseSource);
  const headSet = new Set(headIds);
  const baseSet = new Set(baseIds);
  const headLower = new Set(headIds.map((id) => id.toLowerCase()));

  // Working tree vs baseline (includes the toc / version bumps made earlier in the release job).
  const diff = git('diff', '--name-only', '--no-renames', baseline);
  if (!diff.ok) return fullPlan('git diff against baseline failed', baseline);
  const untracked = git('ls-files', '--others', '--exclude-standard', 'src', 'scripts');
  const files = [...new Set([...diff.stdout.split('\n'), ...untracked.stdout.split('\n')])].filter(
    Boolean,
  );

  const reasons: string[] = [];
  const touched = new Set<string>();

  for (const file of files) {
    const shared = FULL_EXPORT_PATHS.find((path) => file === path || file.startsWith(path));
    if (shared) {
      reasons.push(`shared file changed: ${file}`);
      continue;
    }
    if (file === 'package.json') {
      const before = showAt(baseline, 'package.json');
      const after = readFileSync(resolve(rootDir, 'package.json'), 'utf8');
      if (
        !before ||
        JSON.stringify(pick(JSON.parse(before))) !== JSON.stringify(pick(JSON.parse(after)))
      )
        reasons.push('rendering dependencies changed in package.json');
      continue;
    }
    if (file === 'pnpm-lock.yaml') {
      const lockDiff = git('diff', '--unified=0', baseline, '--', 'pnpm-lock.yaml').stdout;
      if (
        lockDiff
          .split('\n')
          .some((line) => /^[+-](?![+-])/.test(line) && RENDER_LOCK_LINE.test(line))
      )
        reasons.push('rendering dependencies changed in pnpm-lock.yaml');
      continue;
    }
    if (!file.startsWith('src/') || IGNORED_SRC_FILES.has(file) || file === 'src/icons.ts')
      continue;

    const dir = file.match(/^src\/([^/]+)\/.+$/)?.[1];
    if (dir && (headSet.has(dir) || baseSet.has(dir))) {
      touched.add(dir);
    } else if (
      dir &&
      (existsSync(resolve(srcDir, dir, 'components')) ||
        git('cat-file', '-e', `${baseline}:src/${dir}/components`).ok)
    ) {
      // Brand folder that is not registered in src/icons.ts: the exporter ignores it.
    } else {
      reasons.push(`shared src file changed: ${file}`);
    }
  }

  if (reasons.length > 0) return { ...fullPlan(reasons[0], baseline), reasons };

  // Registration changes in src/icons.ts.
  for (const id of headIds) if (!baseSet.has(id)) touched.add(id);

  // Brands that import a touched brand render differently too.
  const dependents = new Map<string, Set<string>>();
  for (const id of headIds) {
    if (!existsSync(resolve(srcDir, id))) continue;
    for (const target of brandImports(id, headSet)) {
      const list = dependents.get(target) ?? new Set<string>();
      list.add(id);
      dependents.set(target, list);
    }
  }
  const queue = [...touched];
  while (queue.length > 0) {
    for (const dependent of dependents.get(queue.pop()!) ?? []) {
      if (!touched.has(dependent)) {
        touched.add(dependent);
        queue.push(dependent);
      }
    }
  }

  const only = headIds.filter((id) => touched.has(id));
  // Removed / renamed ids (keep files whose lower-cased name still belongs to an icon, e.g. case-only renames).
  const remove = [
    ...new Set([
      ...baseIds.filter((id) => !headSet.has(id)).map((id) => id.toLowerCase()),
      ...[...touched].filter((id) => !headSet.has(id)).map((id) => id.toLowerCase()),
    ]),
  ].filter((id) => !headLower.has(id));

  return { baseline, full: false, only, reasons: [], remove };
};
