import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, writeFileSync } from 'fs';

export default defineConfig({
  base: '/kinklist2026/',
  plugins: [
    react(),
    {
      name: 'copy-files',
      closeBundle() {
        copyFileSync('404.html', 'dist/404.html');
        writeFileSync('dist/.nojekyll', '');
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
