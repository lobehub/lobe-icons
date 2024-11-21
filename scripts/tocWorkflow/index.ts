import matter from 'gray-matter';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import * as Icons from '../../src/icons';
import { customKebabCase } from './utils';

const rootDir = resolve(__dirname, '../..');

const run = () => {
  const list = Object.entries(Icons).map(([key, Icon]: [string, any]) => {
    const md = readFileSync(resolve(rootDir, 'src', key, 'index.md'), 'utf8');
    const { data } = matter(md);
    return {
      color: Icon.colorPrimary,
      colorGradient: Icon?.colorGradient,
      desc: data?.description,
      docsUrl: customKebabCase(key),
      fullTitle: data?.title,
      group: String(data?.group?.title || data?.group).toLowerCase(),
      id: key,
      param: {
        hasAvatar: !!Icon?.Avatar,
        hasBrand: !!Icon?.Brand,
        hasBrandColor: !!Icon?.BrandColor,
        hasColor: !!Icon?.Color,
        hasCombine: !!Icon?.Combine,
        hasText: !!Icon?.Text,
        hasTextCn: !!Icon?.TextCn,
      },
      title: Icon.title,
    };
  });

  const content = `export interface IconToc {
  color: string;
  colorGradient?: string;
  desc: string;
  docsUrl: string;
  fullTitle: string;
  group: 'model' | 'provider' | 'application';
  id: string;
    param: {
    hasAvatar: boolean;
    hasBrand: boolean;
    hasBrandColor: boolean;
    hasColor: boolean;
    hasCombine: boolean;
    hasText: boolean;
    hasTextCn: boolean;
  };
  title: string;
}

const toc: IconToc[] = ${JSON.stringify(list, null, 2)}

export default toc;`;

  writeFileSync(resolve(rootDir, 'src/toc.ts'), content);
};

run();
