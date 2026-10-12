import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, join, relative } from 'node:path';

const root = join(import.meta.dirname, '..');
const outDir = join(root, 'es');
const pkgPath = join(root, 'package.json');

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walk(path);
    return entry.name.endsWith('.mjs') ? [path] : [];
  });

const collectModules = () => {
  const modules = new Map();
  for (const file of walk(outDir).sort()) {
    // untyped chunks are rolldown internals (e.g. `toc2.mjs` holding an imported JSON), not source modules
    if (!existsSync(file.replace(/\.mjs$/, '.d.mts'))) continue;
    const target = `./${relative(root, file)}`;
    const isIndex = target.endsWith('/index.mjs');
    const key = isIndex ? target.slice(0, -'/index.mjs'.length) : target.slice(0, -'.mjs'.length);
    if (key === './es') continue;
    // file modules win over same-named directory indexes, matching TS and bundler resolution order
    if (isIndex && modules.has(key)) continue;
    modules.set(key, { isIndex, target });
  }
  return modules;
};

const isNested = (key) => key.split('/').length > 3;

// `./es/*` resolves directory indexes; every nested file module is covered by a `./es/*/<basename>` pattern,
// so only top-level files and directories shadowed by a basename pattern need exact keys.
// TS skips Node's length check when matching patterns, so `./es/*/utils` also captures top-level `./es/utils`.
const generateExports = () => {
  const modules = collectModules();

  const fileBasenames = new Set();
  for (const [key, { isIndex }] of modules) {
    if (!isIndex && isNested(key)) fileBasenames.add(basename(key));
  }

  const exact = {};
  for (const [key, { isIndex, target }] of modules) {
    if (isIndex ? fileBasenames.has(basename(key)) : !isNested(key)) exact[key] = target;
  }

  const patterns = Object.fromEntries(
    [...fileBasenames].sort().map((name) => [`./es/*/${name}`, `./es/*/${name}.mjs`]),
  );

  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  pkg.exports = {
    '.': pkg.exports['.'],
    ...exact,
    ...patterns,
    './es/*': './es/*/index.mjs',
    './es/*.js': pkg.exports['./es/*.js'],
    './package.json': './package.json',
  };
  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
};

// local builds must leave package.json untouched; only CI publishes need the full subpath map
if (process.env.CI) generateExports();
