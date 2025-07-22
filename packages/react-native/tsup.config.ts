import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  legacyOutput: true,
  minify: false,
  outDir: 'dist',
  sourcemap: true,
  splitting: false,
  treeshake: true,
  tsconfig: './tsconfig.json',
});
