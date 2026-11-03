/**
 * PR icon preview, trusted half (`.github/workflows/pr-icon-preview-comment.yml`).
 *
 * Runs from the default branch with a write token, so it never imports or executes anything
 * from the PR: it only reads the artifact produced by `index.tsx` as data. The summary is
 * re-validated, only referenced `.png` files with safe names, sane sizes and a PNG signature
 * are copied, and the comment Markdown is rebuilt here from the validated data.
 *
 * Usage: bun scripts/prPreviewWorkflow/publish.ts --artifact <dir> --dest <pr-previews checkout>
 *          --repo owner/name --branch pr-previews --comment <output .md>
 *          [--head-sha <sha from the workflow_run event>]
 * `--head-sha` is required for pull_request runs. Manually dispatched runs build a commit that
 * is not the workflow_run head, so it is omitted and the workflow checks the artifact's head sha
 * (the `head_sha` output) against the PR's current head instead.
 * Writes `pr_number`, `head_sha`, `has_brands`, `has_images` to $GITHUB_OUTPUT.
 */
import {
  appendFileSync,
  closeSync,
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  openSync,
  readdirSync,
  readFileSync,
  readSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';

import { listImages, renderComment, SHA, validateSummary } from './comment';

const MAX_SUMMARY_BYTES = 1024 * 1024;
const MAX_IMAGE_BYTES = 1024 * 1024;
const MAX_TOTAL_BYTES = 20 * 1024 * 1024;
const MAX_IMAGES = 300;
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

const args = process.argv.slice(2);
const optional = (name: string) => {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? undefined : args[index + 1] || undefined;
};
const required = (name: string) => {
  const value = optional(name);
  if (!value) throw new Error(`Missing --${name}`);
  return value;
};

const artifactDir = resolve(required('artifact'));
const destDir = resolve(required('dest'));
const repo = required('repo');
const branch = required('branch');
const expectedHeadSha = optional('head-sha');
const commentPath = resolve(required('comment'));

if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) throw new Error(`Invalid repo: ${repo}`);
if (!/^[\w./-]+$/.test(branch)) throw new Error(`Invalid branch: ${branch}`);
if (expectedHeadSha !== undefined && !SHA.test(expectedHeadSha))
  throw new Error(`Invalid head sha: ${expectedHeadSha}`);

const output = (key: string, value: string) => {
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
  console.log(`${key}=${value}`);
};

const isPng = (file: string) => {
  const buffer = Buffer.alloc(PNG_SIGNATURE.length);
  const fd = openSync(file, 'r');
  try {
    readSync(fd, buffer, 0, buffer.length, 0);
  } finally {
    closeSync(fd);
  }
  return buffer.equals(PNG_SIGNATURE);
};

/** Resolve `relative` inside `root`, refusing anything that escapes it. */
const inside = (root: string, relative: string) => {
  const path = resolve(root, relative);
  if (!path.startsWith(root + sep)) throw new Error(`Path escapes ${root}: ${relative}`);
  return path;
};

const summaryFile = join(artifactDir, 'summary.json');
const summaryStat = existsSync(summaryFile) ? lstatSync(summaryFile) : undefined;
if (!summaryStat?.isFile() || summaryStat.size > MAX_SUMMARY_BYTES)
  throw new Error('summary.json is missing, not a regular file or too large');

const summary = validateSummary(JSON.parse(readFileSync(summaryFile, 'utf8')));
if (!summary.pr) throw new Error('summary.json has no valid PR number');
if (!summary.headSha) throw new Error('summary.json has no valid head sha');
if (expectedHeadSha && summary.headSha !== expectedHeadSha)
  throw new Error(
    `summary.json head sha ${summary.headSha} does not match workflow run ${expectedHeadSha}`,
  );
const headSha = summary.headSha;

// Copy referenced images, dropping anything suspicious from the summary.
const imagesRoot = join(artifactDir, 'images');
const imagesDir =
  existsSync(imagesRoot) && lstatSync(imagesRoot).isDirectory()
    ? realpathSync(imagesRoot)
    : undefined;
const prDir = join(destDir, `pr-${summary.pr}`);
const targetDir = join(prDir, headSha);
const accepted = new Set<string>();
let totalBytes = 0;

for (const path of imagesDir ? listImages(summary) : []) {
  if (accepted.size >= MAX_IMAGES) break;
  try {
    const source = inside(imagesDir!, path);
    const stat = lstatSync(source);
    // No symlinks anywhere on the way: the real path must still be inside the images folder.
    inside(imagesDir!, realpathSync(source).slice(imagesDir!.length + 1));
    if (!stat.isFile() || stat.size > MAX_IMAGE_BYTES || totalBytes + stat.size > MAX_TOTAL_BYTES)
      continue;
    if (!isPng(source)) continue;
    const target = inside(targetDir, path);
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(source, target);
    totalBytes += stat.size;
    accepted.add(path);
  } catch {
    // missing or unsafe file: rendered as "—"
  }
}

for (const brand of summary.brands) {
  for (const variant of brand.variants) {
    if (variant.light && !accepted.has(variant.light)) variant.light = undefined;
    if (variant.dark && !accepted.has(variant.dark)) variant.dark = undefined;
  }
}

// Keep only the latest render of this PR on the previews branch.
if (existsSync(prDir)) {
  for (const entry of readdirSync(prDir)) {
    if (entry !== headSha) rmSync(join(prDir, entry), { force: true, recursive: true });
  }
}

const imageBase = `https://raw.githubusercontent.com/${repo}/${branch}/pr-${summary.pr}/${headSha}`;
writeFileSync(commentPath, renderComment(summary, { imageBase }));

output('pr_number', String(summary.pr));
output('head_sha', headSha);
output('has_brands', String(summary.brands.length > 0 || summary.removed.length > 0));
output('has_images', String(accepted.size > 0));
console.log(`Accepted ${accepted.size} image(s), ${totalBytes} bytes`);
