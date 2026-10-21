import { defineConfig } from '@lobehub/lint';
import { restrictedImports } from '@lobehub/ui/eslint';

import icons from './scripts/eslint-plugin-icons/index.mjs';

export default defineConfig(
  {
    ignores: [
      '**/node_modules',
      '**/coverage',
      '**/.coverage',
      '**/jest*',
      '**/_test_',
      '**/__test__',
      '**/dist',
      '**/es',
      '**/lib',
      '**/logs',
    ],
    react: true,
  },
  restrictedImports,
  {
    // This library default-exports one icon component per module and consumers deep-import them
    // (`import Ace from '@lobehub/icons/es/Ace'`); switching to named exports would be a breaking
    // change and the v2 default-export warning would otherwise report ~2,000 times.
    rules: {
      'no-restricted-syntax': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules: {
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
    },
  },
  {
    // Icon component conventions, see scripts/eslint-plugin-icons:
    // square marks use a 0 0 24 24 viewBox, wordmarks (Text*, Brand*) use 0 0 W 24 sized by height only,
    // and gradient / mask / clipPath / filter ids come from useFillId / useFillIds.
    files: ['src/*/components/**/*.{jsx,tsx}'],
    plugins: { icons },
    rules: {
      'icons/brand-viewbox': 'error',
      'icons/no-hardcoded-svg-id': 'error',
      'icons/text-viewbox': 'error',
    },
  },
);
