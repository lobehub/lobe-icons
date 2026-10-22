/**
 * Shared by both halves of the PR icon preview:
 * - `index.tsx` (runs PR code, no secrets) writes a `summary.json` in this shape;
 * - `publish.ts` (trusted, has write token) re-validates that file with `validateSummary`
 *   and builds the comment with `renderComment`. Only node built-ins may be imported here,
 *   because the publish job runs it without installing dependencies.
 */

export const MARKER = '<!-- lobe-icons-pr-preview -->';

export const LIMITS = {
  brands: 30,
  issuesPerBrand: 50,
  messageLength: 300,
  removed: 50,
  variantsPerBrand: 12,
} as const;

export type BrandStatus = 'added' | 'modified';

export interface PreviewVariant {
  dark?: string;
  light?: string;
  name: string;
}

export interface PreviewIssue {
  column?: number;
  file?: string;
  line?: number;
  message: string;
  rule: string;
  severity: 'error' | 'warning';
}

export interface PreviewBrand {
  id: string;
  issues: PreviewIssue[];
  status: BrandStatus;
  title?: string;
  variants: PreviewVariant[];
}

export interface PreviewSummary {
  baseSha?: string;
  brands: PreviewBrand[];
  headSha?: string;
  pr?: number;
  removed: string[];
  skipped: string[];
  version: 1;
}

const BRAND_ID = /^[\da-z]{1,64}$/i;
const IMAGE_PATH = /^[\da-z]{1,64}\/[\da-z-]{1,64}\.png$/;
const FILE_PATH = /^src\/[\dA-Za-z]{1,64}(?:\/(?!\.{1,2}(?:\/|$))[\w.-]{1,128}){1,4}$/;
const RULE = /^[\w/@-]{1,64}$/;
const VARIANT = /^[ a-z]{1,32}$/i;
export const SHA = /^[\da-f]{40}$/;

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const asArray = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);

const asPositiveInt = (value: unknown): number | undefined =>
  typeof value === 'number' && Number.isSafeInteger(value) && value > 0 ? value : undefined;

const match = (value: unknown, pattern: RegExp): string | undefined =>
  typeof value === 'string' && pattern.test(value) ? value : undefined;

/** Escape untrusted text for inline Markdown / HTML: no tags, links, tables, mentions or code spans. */
export const escapeText = (value: unknown, maxLength: number = LIMITS.messageLength): string => {
  const text = String(value ?? '')
    // eslint-disable-next-line no-control-regex
    .replaceAll(/[\u0000-\u001F\u007F\u2028\u2029]+/g, ' ')
    .trim();
  const truncated = text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
  return truncated.replaceAll(/[!&*<>@[\\\]_`|~]/g, (char) => `&#${char.codePointAt(0)};`);
};

/**
 * Normalize an untrusted summary: unknown fields are dropped, strings that do not match the
 * expected shape are discarded and lists are capped. Never throws on bad entries, only on a
 * non-object root.
 */
export const validateSummary = (raw: unknown): PreviewSummary => {
  if (!isObject(raw)) throw new Error('summary.json must contain an object');

  const brands: PreviewBrand[] = [];
  for (const item of asArray(raw.brands).slice(0, LIMITS.brands)) {
    if (!isObject(item)) continue;
    const id = match(item.id, BRAND_ID);
    if (!id) continue;

    const variants: PreviewVariant[] = [];
    for (const variant of asArray(item.variants).slice(0, LIMITS.variantsPerBrand)) {
      if (!isObject(variant)) continue;
      const name = match(variant.name, VARIANT);
      if (!name) continue;
      variants.push({
        dark: match(variant.dark, IMAGE_PATH),
        light: match(variant.light, IMAGE_PATH),
        name,
      });
    }

    const issues: PreviewIssue[] = [];
    for (const issue of asArray(item.issues).slice(0, LIMITS.issuesPerBrand)) {
      if (!isObject(issue)) continue;
      issues.push({
        column: asPositiveInt(issue.column),
        file: match(issue.file, FILE_PATH),
        line: asPositiveInt(issue.line),
        message: typeof issue.message === 'string' ? issue.message : '',
        rule: match(issue.rule, RULE) ?? 'unknown',
        severity: issue.severity === 'error' ? 'error' : 'warning',
      });
    }

    brands.push({
      id,
      issues,
      status: item.status === 'added' ? 'added' : 'modified',
      title: typeof item.title === 'string' ? item.title : undefined,
      variants,
    });
  }

  const ids = (value: unknown) =>
    asArray(value)
      .map((id) => match(id, BRAND_ID))
      .filter((id): id is string => Boolean(id))
      .slice(0, LIMITS.removed);

  return {
    baseSha: match(raw.baseSha, SHA),
    brands,
    headSha: match(raw.headSha, SHA),
    pr: asPositiveInt(raw.pr),
    removed: ids(raw.removed),
    skipped: ids(raw.skipped),
    version: 1,
  };
};

/** Every image path the summary references, de-duplicated. */
export const listImages = (summary: PreviewSummary): string[] => [
  ...new Set(
    summary.brands.flatMap((brand) =>
      brand.variants.flatMap((variant) =>
        [variant.light, variant.dark].filter((path): path is string => Boolean(path)),
      ),
    ),
  ),
];

export interface RenderOptions {
  /** Base URL (no trailing slash) that image paths are resolved against. Must be trusted. */
  imageBase: string;
}

const image = (base: string, path: string | undefined, alt: string) =>
  path ? `<img src="${base}/${path}" height="80" alt="${escapeText(alt, 80)}" />` : '—';

const renderIssue = (issue: PreviewIssue) => {
  const location = issue.file
    ? `\`${issue.file}${issue.line ? `:${issue.line}` : ''}${issue.column ? `:${issue.column}` : ''}\``
    : '';
  const icon = issue.severity === 'error' ? '❌' : '⚠️';
  return `- ${icon} ${location ? `${location} ` : ''}**${issue.rule}** — ${escapeText(issue.message)}`;
};

export const renderComment = (summary: PreviewSummary, { imageBase }: RenderOptions): string => {
  const lines: string[] = [MARKER, '## 🎨 Icon Preview', ''];

  if (summary.brands.length === 0 && summary.removed.length === 0) {
    lines.push(
      summary.headSha
        ? `No brand icon changes detected in \`${summary.headSha.slice(0, 7)}\`.`
        : 'No brand icon changes detected.',
    );
    return lines.join('\n') + '\n';
  }

  const issueCount = summary.brands.reduce((count, brand) => count + brand.issues.length, 0);
  lines.push(
    [
      summary.headSha ? `Rendered from \`${summary.headSha.slice(0, 7)}\`` : 'Rendered locally',
      `${summary.brands.length} brand(s) changed`,
      issueCount > 0 ? `⚠️ ${issueCount} convention issue(s)` : '✅ no convention issues',
    ].join(' · '),
    '',
  );

  for (const brand of summary.brands) {
    const title = brand.title ? ` — ${escapeText(brand.title, 80)}` : '';
    lines.push(`### ${brand.id}${title} \`${brand.status}\``, '');

    if (brand.variants.length > 0) {
      lines.push('| Variant | Light | Dark |', '| :-- | :-: | :-: |');
      for (const variant of brand.variants) {
        lines.push(
          `| ${variant.name} | ${image(imageBase, variant.light, `${brand.id} ${variant.name} light`)} | ${image(imageBase, variant.dark, `${brand.id} ${variant.name} dark`)} |`,
        );
      }
      lines.push('');
    }

    if (brand.issues.length > 0) {
      lines.push(
        `<details open><summary>⚠️ ${brand.issues.length} issue(s)</summary>`,
        '',
        ...brand.issues.map(renderIssue),
        '',
        '</details>',
        '',
      );
    } else {
      lines.push('✅ No convention issues', '');
    }
  }

  if (summary.removed.length > 0) {
    lines.push('### 🗑️ Removed', '', ...summary.removed.map((id) => `- ${id}`), '');
  }

  if (summary.skipped.length > 0) {
    lines.push(
      `> [!NOTE]`,
      `> Preview limited to ${summary.brands.length} brands, not rendered: ${summary.skipped.join(', ')}`,
      '',
    );
  }

  lines.push(
    '<sub>Conventions: square icons use `viewBox="0 0 24 24"`, wordmarks (`Text*` / `Brand*`) use `0 0 W 24`, gradient / mask / clipPath / filter ids come from `useFillId` / `useFillIds`, and each brand ships `Text` and `Combine`.</sub>',
  );

  return lines.join('\n') + '\n';
};
