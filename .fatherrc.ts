import { defineConfig } from 'father';

export default defineConfig({
  esm: { output: 'es', ignores: ['./src/components/**/*', './src/Editor/**/*'] },
});
