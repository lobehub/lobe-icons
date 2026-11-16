// @vitest-environment node
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { afterEach, describe, expect, it } from 'vitest';

const { dirname, join, resolve } = path;
const require = createRequire(import.meta.url);
const root = resolve(import.meta.dirname, '../../..');
const multiReleaseDir = dirname(require.resolve('@qiwi/multi-semantic-release/package.json'));
const { default: getConfig } = await import(
  pathToFileURL(join(multiReleaseDir, 'lib/getConfigSemantic.js')).href
);
const { default: createInlinePluginCreator } = await import(
  pathToFileURL(join(multiReleaseDir, 'lib/createInlinePluginCreator.js')).href
);
const directories: string[] = [];
const git = (cwd: string, ...args: string[]) =>
  execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
const write = (cwd: string, file: string, text: string) => {
  const destination = join(cwd, file);
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, text);
};

afterEach(() => {
  directories.splice(0).forEach((directory) => {
    const target = resolve(directory);
    if (dirname(target) !== resolve(root, 'tmp')) throw new Error(`Unsafe fixture path: ${target}`);
    rmSync(target, { force: true, recursive: true });
  });
});

async function fixture() {
  const parent = join(root, 'tmp');
  mkdirSync(parent, { recursive: true });
  const directory = mkdtempSync(join(parent, 'vue-release-'));
  directories.push(directory);
  git(directory, 'init', '--initial-branch=master');
  git(directory, 'config', 'user.name', 'Vue release test');
  git(directory, 'config', 'user.email', 'vue-release@example.com');
  git(directory, 'config', 'core.autocrlf', 'false');
  write(directory, 'src/index.ts', "export * from './icons';\n");
  write(directory, 'src/icons.ts', "export { default as OpenAI } from './OpenAI';\n");
  write(directory, 'src/OpenAI/components/Mono.tsx', 'export default 1;\n');
  write(directory, 'src/features/modelConfig.ts', 'export const modelMappings = [];\n');
  write(
    directory,
    'packages/vue/package.json',
    JSON.stringify({
      name: '@lobehub/icons-vue',
      version: '1.0.0',
      repository: 'https://github.com/lobehub/lobe-icons.git',
    }),
  );
  write(
    directory,
    'packages/vue/.releaserc.cjs',
    `module.exports = require(${JSON.stringify(join(root, 'packages/vue/.releaserc.cjs'))});\n`,
  );
  const commit = (file: string, content: string, message: string) => {
    write(directory, file, content);
    git(directory, 'add', '.');
    git(directory, 'commit', '--no-gpg-sign', '-m', message);
    return git(directory, 'rev-parse', 'HEAD');
  };
  const baseline = commit('README.md', 'Fixture\n', '✨ feat: initial icon catalog');
  const packageDir = join(directory, 'packages/vue');
  // Load the real Vue config through semantic-release, then wrap it exactly as
  // multi-semantic-release does. No verify, prepare, publish, or remote operation runs.
  const { plugins, options } = await getConfig(
    {
      cwd: packageDir,
      env: process.env,
      stdout: process.stdout,
      stderr: process.stderr,
    },
    {},
  );
  const pkg = {
    dir: packageDir,
    name: '@lobehub/icons-vue',
    plugins,
    options,
    fakeLogger: {},
    localDeps: [],
  };
  const inline = createInlinePluginCreator([pkg], { cwd: directory }, { deps: {} })(pkg);
  const context = (lastHead: string | undefined = baseline) => ({
    cwd: packageDir,
    env: process.env,
    options,
    branch: { name: 'master' },
    commits: [],
    lastRelease: lastHead ? { gitHead: lastHead, version: '1.0.0' } : {},
    nextRelease: { version: '1.1.0', gitTag: '@lobehub/icons-vue@1.1.0' },
  });
  return { commit, context, directory, inline, baseline };
}

describe('Vue shared-source release', () => {
  it.each([
    [
      'src/OpenAI/components/Mono.tsx',
      'export default 2;\n',
      '🐛 fix: repair OpenAI mark',
      'patch',
    ],
    [
      'src/features/modelConfig.ts',
      'export const modelMappings = [1];\n',
      '✨ feat: map a new model',
      'minor',
    ],
    [
      'packages/vue/src/runtime.ts',
      'export const version = 2;\n',
      '🐛 fix(vue): update runtime',
      'patch',
    ],
    [
      'packages/vue/src/index.ts',
      "export * from './icons';\n",
      '✨ feat(vue): update Vue exports',
      'minor',
    ],
  ])(
    'releases changes to %s and includes them in release notes',
    async (file, content, message, type) => {
      const { commit, context, inline } = await fixture();
      const hash = commit(file, content, message);
      expect(await inline.analyzeCommits({}, context())).toBe(type);
      // The multi-package wrapper resets commits before generateNotes. Shared
      // changes must be read again rather than relying on analyzeCommits mutation.
      const notes = await inline.generateNotes({}, context());
      expect(notes.toLowerCase()).toContain(
        message.replace(/^\S+ (?:fix|feat)(?:\(vue\))?: /, '').toLowerCase(),
      );
      expect(notes).toContain(hash.slice(0, 7));
    },
  );

  it('excludes overwritten React entry-point changes from releases and notes', async () => {
    const { commit, context, inline } = await fixture();
    const reactHash = commit(
      'src/index.ts',
      "export * from './icons';\nexport * from './features/ReactOnlyHelper';\n",
      '✨ feat: export a React-only helper',
    );
    expect(await inline.analyzeCommits({}, context())).toBeUndefined();
    const notes = await inline.generateNotes({}, context());
    expect(notes.toLowerCase()).not.toContain('react-only helper');
    expect(notes).not.toContain(reactHash.slice(0, 7));

    const iconHash = commit(
      'src/OpenAI/components/Mono.tsx',
      'export default 2;\n',
      '🐛 fix: repair shared icon',
    );
    expect(await inline.analyzeCommits({}, context())).toBe('patch');
    const releaseNotes = await inline.generateNotes({}, context());
    expect(releaseNotes.toLowerCase()).toContain('repair shared icon');
    expect(releaseNotes).toContain(iconHash.slice(0, 7));
    expect(releaseNotes.toLowerCase()).not.toContain('react-only helper');
    expect(releaseNotes).not.toContain(reactHash.slice(0, 7));
  });

  it('ignores unrelated source, docs, and other packages', async () => {
    const { commit, context, inline } = await fixture();
    commit('src/OpenAI/index.mdx', 'Docs\n', '✨ feat: document OpenAI');
    commit('src/features/ModelIcon/demos/index.tsx', 'Demo\n', '✨ feat: add a React demo');
    commit('packages/react-native/README.md', 'RN\n', '✨ feat: add an RN example');
    expect(await inline.analyzeCommits({}, context())).toBeUndefined();
    const notes = await inline.generateNotes({}, context());
    expect(notes).not.toMatch(/document OpenAI|React demo|RN example/);
  });

  it('respects the previous release boundary and skip-release commits', async () => {
    const { commit, context, inline } = await fixture();
    const lastHead = commit(
      'src/OpenAI/components/Mono.tsx',
      'export default 2;\n',
      '✨ feat: previous icon',
    );
    commit(
      'src/OpenAI/components/Mono.tsx',
      'export default 3;\n',
      '🐛 fix: skipped icon [skip release]',
    );
    expect(await inline.analyzeCommits({}, context(lastHead))).toBeUndefined();
  });

  it('handles a first publication without a previous release', async () => {
    const { context, inline } = await fixture();
    const initial = { ...context(), lastRelease: {} };
    expect(await inline.analyzeCommits({}, initial)).toBe('minor');
    expect((await inline.generateNotes({}, { ...initial, commits: [] })).toLowerCase()).toContain(
      'initial icon catalog',
    );
  });

  it('handles registry changes with the complete icon catalog', async () => {
    const { commit, context, inline } = await fixture();
    commit(
      'src/icons.ts',
      readFileSync(join(root, 'src/icons.ts'), 'utf8'),
      '✨ feat: register icons',
    );
    expect(await inline.analyzeCommits({}, context())).toBe('minor');
    expect((await inline.generateNotes({}, context())).toLowerCase()).toContain('register icons');
  });
});
