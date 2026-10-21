import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

import { name } from './package.json';

export default defineConfig({
  test: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('src', import.meta.url)) },
      // Exact match only: @lobehub/ui deep-imports `@lobehub/icons/es/...`, which must keep resolving to the installed package.
      {
        find: new RegExp(`^${name}$`),
        replacement: fileURLToPath(new URL('src', import.meta.url)),
      },
    ],
    environment: 'jsdom',
    globals: true,
    server: {
      deps: {
        /** Transform LobeHub packages that use directory imports in their ESM output. */
        inline: [/@lobehub\//],
      },
    },
  },
});
