import { defineConfig } from 'dumi';
import { SiteThemeConfig } from 'dumi-theme-lobehub';
import { INavItem } from 'dumi/dist/client/theme-api/types';

import { description, homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const nav: INavItem[] = [
  { link: '/components/lobe-hub', title: 'Icons' },
  { link: '/features/model-icon', title: 'Components' },
  { link: '/editor', title: 'SVG Editor' },
  { link: 'https://ui.lobehub.com', mode: 'override', title: 'UI' },
  { link: 'https://charts.lobehub.com', mode: 'override', title: 'Charts' },
  { link: '/changelog', title: 'Changelog' },
];

const themeConfig: SiteThemeConfig = {
  actions: [
    {
      github: true,
      link: homepage,
      openExternal: true,
      text: 'GitHub',
    },
    {
      link: '/components/lobe-hub',
      text: 'View all icons',
      type: 'primary',
    },
  ],
  analytics: {
    plausible: {
      domain: 'icons.lobehub.com',
      scriptBaseUrl: 'https://plausible.lobehub-inc.cn',
    },
  },
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components', '/features'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.ts`,
  },
  description,
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOLLYRIs4Cin-i',
    repo: 'lobehub/lobe-icons',
    repoId: 'R_kgDOLLYRIg',
  },
  metadata: {
    openGraph: {
      image:
        'https://repository-images.githubusercontent.com/750129442/59a8d16a-7ba1-4eda-b611-697d35cd04ab',
    },
  },
  name: 'Icons',
  nav,
  prefersColor: {
    default: 'dark',
    switch: false,
  },
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
  title: 'Lobe Icons',
};

export default defineConfig({
  apiParser: isProduction ? {} : false,
  base: '/',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://lobehub.com/favicon.ico'],
  jsMinifier: 'swc',
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? false : {},
  npmClient: 'pnpm',
  publicPath: '/',
  resolve: isProduction
    ? {
        entryFile: './src/index.ts',
      }
    : undefined,
  sitemap: {
    hostname: 'https://icons.lobehub.com',
  },
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Lobe Icons',
});
