import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  external: ['react', 'react-native', 'react-native-svg', 'react-native-linear-gradient'],
  format: ['esm', 'cjs'],
  legacyOutput: true,
  minify: false,
  outDir: 'dist',
  sourcemap: true,
  splitting: false,
  treeshake: true,
  tsconfig: './tsconfig.json',
});
