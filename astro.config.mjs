import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://totebag.web.id',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
