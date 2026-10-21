import { defineConfig } from '@lobehub/lint';
import { restrictedImports } from '@lobehub/ui/eslint';

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
);
