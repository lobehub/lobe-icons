import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/icons/**/index.ts', 'src/features/**/index.ts'],
  format: ['esm', 'cjs'],
  legacyOutput: true,
  outDir: 'dist',
  sourcemap: true,
  tsconfig: './tsconfig.json',
});
