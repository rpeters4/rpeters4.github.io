// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rpeters4.github.io',
  // no `base` — user-site repo serves from root
  vite: {
    plugins: [tailwindcss()],
  },
});