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
        hasTextColor: !!Icon?.hasTextColor,
      },
      title: Icon.title,
    };
  });

  // writeFileSync(resolve(rootDir, 'src/toc.json'), JSON.stringify(list, null, 2));
  writeFileSync(resolve(rootDir, 'src/toc.json'), JSON.stringify(list));
};

run();
