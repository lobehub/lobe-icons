import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  // every module is an entry so deep imports like `@lobehub/icons/es/features/ModelIcon/index.js` keep resolving
  entry: [
    'src/**/*.{ts,tsx}',
    '!src/components/**',
    '!src/**/*.d.ts',
    '!src/**/demos/**',
    '!src/**/fixtures/**',
    '!src/**/__{test,tests,snapshots}__/**',
    '!src/**/*.{test,e2e,spec}.{ts,tsx}',
  ],
  fixedExtension: true,
  format: ['esm'],
  outDir: 'es',
  // platform 'node' leaks `import "node:module"` into the shared runtime chunk: https://github.com/rolldown/rolldown/issues/11182
  platform: 'neutral',
  sourcemap: true,
  // a bundled build drops per-file 'use client' directives
  unbundle: true,
});
