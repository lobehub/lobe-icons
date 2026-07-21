import { defineDocsConfig } from '@lobehub/docs-kit/src/config';
import type { DocumentationInventory } from '@lobehub/docs-kit/src/types';

import compatibility from './compatibility.json';

const legacyRedirects = compatibility as DocumentationInventory;

export default defineDocsConfig({
  alias: {
    '@': 'src',
    '@lobehub/icons': 'src',
  },
  atomDirs: [{ dir: 'src', subType: 'components', type: 'component' }],
  description: 'Popular AI / LLM Model Brand SVG Logo and Icon Collection',
  favicons: {
    icon: 'https://lobehub.com/favicon.ico',
  },
  homePage: './docs/index.tsx',
  legacyRedirects,
  navSections: {},
  publicDocs: [
    'docs/editor/index.mdx',
    'docs/features/model-tag.mdx',
    'docs/features/icon-combine.mdx',
    'docs/features/cdn-utils.mdx',
    'docs/features/provder-icon.mdx',
    'docs/features/model-icon.mdx',
    'docs/features/provider-combine.mdx',
    'docs/features/agent-icon.mdx',
    'docs/features/icon-avatar.mdx',
  ],
  siteUrl: 'https://icons.lobehub.com',
  themeConfig: {
    analytics: {
      plausible: {
        domain: 'icons.lobehub.com',
        source: 'https://plausible.lobehub-inc.cn/js/script.js',
      },
    },
    apiHeader: {
      docUrl: '{github}/edit/master/{atomId}',
      github: 'https://github.com/lobehub/lobe-icons',
      match: ['/components/'],
      packageName: '@lobehub/icons',
      sourceUrl: '{github}/tree/master/{atomId}',
    },
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
    navItems: [
      { external: true, href: 'https://ui.lobehub.com', label: 'UI' },
      { external: true, href: 'https://charts.lobehub.com', label: 'Charts' },
      { href: '/changelog', label: 'Changelog' },
    ],
    prefersColor: 'dark',
    socialLinks: [
      {
        href: 'https://github.com/lobehub/lobe-icons',
        icon: 'github',
        label: 'GitHub',
      },
      { href: 'https://discord.gg/AYFPHvv2jT', icon: 'discord', label: 'Discord' },
      {
        href: 'https://www.npmjs.com/package/@lobehub/icons',
        icon: 'npm',
        label: 'NPM',
      },
    ],
  },
  title: 'Lobe Icons',
});
