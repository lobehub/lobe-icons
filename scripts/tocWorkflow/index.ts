import matter from 'gray-matter';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { customKebabCase } from './utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '../..');
const srcDir = resolve(rootDir, 'src');

const getIconIds = () => {
  const source = readFileSync(resolve(srcDir, 'icons.ts'), 'utf8');
  return Array.from(source.matchAll(/default as (\w+)/g), (match) => match[1]);
};

const getIconParams = (iconDir: string) => {
  const componentsDir = resolve(iconDir, 'components');
  const hasComponent = (name: string) => existsSync(resolve(componentsDir, `${name}.tsx`));

  return {
    hasAvatar: hasComponent('Avatar'),
    hasBrand: hasComponent('Brand'),
    hasBrandColor: hasComponent('BrandColor'),
    hasColor: hasComponent('Color'),
    hasCombine: hasComponent('Combine'),
    hasText: hasComponent('Text'),
    hasTextCn: hasComponent('TextCn'),
    hasTextColor: hasComponent('TextColor'),
  };
};

const run = async () => {
  const iconIds = getIconIds();
  const list = await Promise.all(
    iconIds.map(async (key) => {
      const iconDir = resolve(srcDir, key);
      const md = readFileSync(resolve(iconDir, 'index.mdx'), 'utf8');
      const stylePath = resolve(iconDir, 'style.ts');
      let styleModule: Record<string, string> = {};

      if (existsSync(stylePath)) {
        styleModule = (await import(pathToFileURL(stylePath).href)) as Record<string, string>;
      }

      const { data } = matter(md);

      return {
        color: styleModule.COLOR_PRIMARY,
        colorGradient: styleModule.COLOR_GRADIENT,
        desc: data?.description,
        docsUrl: customKebabCase(key),
        fullTitle: data?.title,
        group: String(data?.category || data?.group?.title || data?.group).toLowerCase(),
        id: key,
        param: getIconParams(iconDir),
        title: styleModule.TITLE,
      };
    }),
  );

  // writeFileSync(resolve(rootDir, 'src/toc.json'), JSON.stringify(list, null, 2));
  writeFileSync(resolve(rootDir, 'src/toc.json'), JSON.stringify(list));
};

run();
