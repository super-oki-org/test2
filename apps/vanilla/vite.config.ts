import { resolve } from 'path';

import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src/pages');
const outDir = resolve(__dirname, '../../dist/apps/vanilla');
const base = process.env['NODE_ENV'] === 'production' ? process.env['BASE_HREF'] : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  root,
  plugins: [],
  resolve: {
    alias: {
      '@js-camp': resolve(__dirname, '../../libs'),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: [
        resolve(root, 'index.html'),
        resolve(root, 'example', 'index.html'),
        resolve(root, 'example', 'nested', 'index.html'),
      ],
    },
  },
});
