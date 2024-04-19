import { globSync } from 'glob';
import matter from 'gray-matter';
import { kebabCase } from 'lodash-es';
import { markdownTable } from 'markdown-table';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT_PATH = resolve(__dirname, '..');

const BASE_URL = 'https://icons.lobehub.com/components/';

const updateReadme = (split: string, md: string, content: string): string => {
  const mds = md.split(split);
  mds[1] = [' ', content, ' '].join('\n\n');
  return mds.join(split);
};

const genMd = (
  data: {
    group: string;
    path: string;
    title: string;
  }[],
  filter: 'model' | 'provider' | 'application',
): string =>
  data
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter((meta) => meta.group === filter)
    .map((meta) => `✅ [${meta.title}](${BASE_URL}${kebabCase(meta.path)})`)
    .join('<br/>');

const run = () => {
  const mds = globSync(resolve(ROOT_PATH, './src/**/index.md').replace('\\', '/'));
  const metas: any = mds
    .map((md) => {
      const { data } = matter(readFileSync(md, 'utf8'));
      const paths = md.split('/');
      const group = String(data.group).toLowerCase();
      if (!['model', 'provider', 'application'].includes(group)) return false;
      return {
        ...data,
        group,
        path: paths.at(-2),
      };
    })
    .filter(Boolean);

  const contents = markdownTable([
    ['Model', 'Provider', 'Application'],
    [genMd(metas, 'model'), genMd(metas, 'provider'), genMd(metas, 'application')],
  ]);

  const readmePath = resolve(ROOT_PATH, 'README.md');

  const readme = readFileSync(readmePath, 'utf8');

  const newReadme = updateReadme('<!-- ICON LIST -->', readme, contents);

  writeFileSync(readmePath, newReadme, 'utf8');

  console.log(`Add ${contents.length} icons to README`);
};

run();
