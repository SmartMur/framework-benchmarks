import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact({ babel: {} })],
  base: './',
  optimizeDeps: {
    include: ['preact/hooks']
  },
  server: {
    port: 3000
  }
});
