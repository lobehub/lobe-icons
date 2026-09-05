import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

import { name } from './package.json';

export default defineConfig({
  test: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      [name]: fileURLToPath(new URL('src', import.meta.url)),
    },
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
