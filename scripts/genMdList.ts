import fm from 'front-matter';
import { globSync } from 'glob';
import { kebabCase } from 'lodash-es';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT_PATH = resolve(__dirname, '..');

const BASE_URL = 'https://icons.lobehub.com/components/';

const updateReadme = (split: string, md: string, content: string): string => {
  const mds = md.split(split);
  mds[1] = [' ', content, ' '].join('\n\n');
  return mds.join(split);
};
const run = () => {
  const mds = globSync(resolve(ROOT_PATH, './src/**/index.md'));
  const metas = mds
    .map((md) => {
      const meta: any = fm(readFileSync(md, 'utf8')).attributes;
      const paths = md.split('/');
      if (meta.group !== 'Icons') return false;
      return {
        ...meta,
        path: paths.at(-2),
      };
    })
    .filter(Boolean);

  const contents = metas
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((meta) => `- [x] [${meta.title}](${BASE_URL}${kebabCase(meta.path)})`);

  const readmePath = resolve(ROOT_PATH, 'README.md');

  const readme = readFileSync(readmePath, 'utf8');

  const newReadme = updateReadme('<!-- ICON LIST -->', readme, contents.join('\n'));

  writeFileSync(readmePath, newReadme, 'utf8');

  console.log(`Add ${contents.length} icons to README`);
};

run();
