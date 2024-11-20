import consola from 'consola';
import { markdownTable } from 'markdown-table';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import toc, { IconToc } from '../../src/toc';

const ROOT_PATH = resolve(__dirname, '../..');

const BASE_URL = 'https://icons.lobehub.com/components/';

const updateReadme = (split: string, md: string, content: string): string => {
  const mds = md.split(split);
  mds[1] = [' ', content, ' '].join('\n\n');
  return mds.join(split);
};

const genMd = (data: IconToc): string =>
  [
    [
      `<picture>`,
      `<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/${data.id.toLowerCase()}.png" />`,
      `<img height="56" src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/${data.id.toLowerCase()}.png" />`,
      `</picture>`,
    ].join(''),
    `[${data.title}](${BASE_URL}${data.docsUrl})`,
  ].join('<br/>');

const run = () => {
  const model = toc
    .filter((item) => item.group === 'model')
    .sort((a, b) => a.fullTitle.localeCompare(b.fullTitle));
  const provider = toc
    .filter((item) => item.group === 'provider')
    .sort((a, b) => a.fullTitle.localeCompare(b.fullTitle));
  const application = toc
    .filter((item) => item.group === 'application')
    .sort((a, b) => a.fullTitle.localeCompare(b.fullTitle));

  const max = Math.max(model.length, provider.length, application.length);

  const table = [
    ['Model', 'Provider', 'Application'],
    ...Array.from({ length: max }).map((_, index) => [
      model[index] ? genMd(model[index]) : '',
      provider[index] ? genMd(provider[index]) : '',
      application[index] ? genMd(application[index]) : '',
    ]),
  ];

  const contents = markdownTable(table);

  const readmePath = resolve(ROOT_PATH, 'README.md');

  const readme = readFileSync(readmePath, 'utf8');

  const newReadme = updateReadme('<!-- ICON LIST -->', readme, contents);

  writeFileSync(readmePath, newReadme, 'utf8');

  consola.success(`Add ${toc.length} icons to README`);
};

run();
