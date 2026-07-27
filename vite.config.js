import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // relative base so the build works at a domain root or under /radianthearts/
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        programs: resolve(__dirname, 'programs.html'),
        admissions: resolve(__dirname, 'admissions.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        news: resolve(__dirname, 'news.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
});
