/* eslint-disable @typescript-eslint/no-require-imports -- Required synchronously by the semantic-release CJS config. */
const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const { createRequire } = require('node:module');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const sharedSourceFiles = require('./source-files.json');

const { join } = path;

// semantic-release declares these plugins; resolve through their dependency
// owner rather than relying on a package manager to hoist transitive modules.
const releaseRequire = createRequire(require.resolve('semantic-release'));
const git = (cwd, args, input) =>
  execFileSync('git', args, { cwd, encoding: 'utf8', input, maxBuffer: 16 * 1024 ** 2 }).trim();

function sourceCommits({ cwd, lastRelease }) {
  const root = git(cwd, ['rev-parse', '--show-toplevel']);
  const icons = readFileSync(join(root, 'src/icons.ts'), 'utf8');
  const brands = [...icons.matchAll(/from '\.\/([^']+)'/g)].map((match) => match[1]);
  if (!brands.length) throw new Error('No brands found in src/icons.ts');
  const paths = [
    'packages/vue',
    'src/icons.ts',
    'src/toc.json',
    ...sharedSourceFiles.map((file) => `src/${file}`),
    ...brands.flatMap((brand) => [
      `src/${brand}/index.ts`,
      `src/${brand}/style.ts`,
      `:(glob)src/${brand}/components/**/*.ts`,
      `:(glob)src/${brand}/components/**/*.tsx`,
    ]),
  ];
  const range = lastRelease?.gitHead ? `${lastRelease.gitHead}..HEAD` : 'HEAD';
  // stdin keeps the catalog's path list below Windows' command-line limit.
  const records = git(
    root,
    ['log', '--format=%H%x00%B%x00', '--stdin'],
    `${range}\n--\n${paths.join('\n')}\n`,
  ).split('\0');
  const commits = [];
  for (let index = 0; index + 1 < records.length; index += 2) {
    commits.push({ hash: records[index].trim(), message: records[index + 1].trim() });
  }
  return commits;
}

function withSharedSourceCommits(config) {
  const stages = {
    '@semantic-release/commit-analyzer': 'analyzeCommits',
    '@semantic-release/release-notes-generator': 'generateNotes',
  };
  return {
    ...config,
    plugins: config.plugins.map((entry) => {
      const [name, options] = Array.isArray(entry) ? entry : [entry];
      const stage = stages[name];
      if (!stage) return entry;
      return [
        {
          [stage]: async (pluginOptions, context) => {
            const plugin = await import(pathToFileURL(releaseRequire.resolve(name)).href);
            const commits = sourceCommits(context);
            return plugin[stage](pluginOptions, {
              ...context,
              // semantic-release normally filters these before analyzeCommits;
              // the extra source commits must respect that contract as well.
              commits:
                stage === 'analyzeCommits'
                  ? commits.filter(
                      // eslint-disable-next-line unicorn/better-regex -- regexp/strict requires escaped closing brackets.
                      (commit) => !/\[skip\s+release\]|\[release\s+skip\]/i.test(commit.message),
                    )
                  : commits,
            });
          },
        },
        options,
      ];
    }),
  };
}

module.exports = { withSharedSourceCommits };
