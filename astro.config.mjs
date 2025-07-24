import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages'; // ← 正しいモジュール名

// GitHub Pages環境の検出
const isGitHubPages =
  process.env.GITHUB_PAGES === 'true' ||
  process.env.NODE_ENV === 'production' ||
  process.env.CI === 'true';

export default defineConfig({
  output: 'static',
  site: 'https://ishikawa-yutaka.github.io',
  base: '/my-blog',
  trailingSlash: 'never',
  build: {
    assets: '_astro',
  },
});
