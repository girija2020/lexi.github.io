import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: './piano-app',  // <- set the root to your folder
  plugins: [react()],
  build: {
    outDir: '../dist',   // <- output folder relative to vite root
    emptyOutDir: true,
  },
  server: {
    port: 3000
  }
});
