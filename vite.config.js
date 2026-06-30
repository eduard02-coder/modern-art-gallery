import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // This ensures Vite hooks up the right paths for GitHub Pages
  base: '/modern-art-gallery/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),

        // Change 'second.html' to your actual file name
        second: resolve(__dirname, './src/html/our-location.html'),
      },
    },
  },
});
