import { defineConfig } from 'astro/config';
// GitHub Pages環境の検出
const isGitHubPages =
  process.env.GITHUB_PAGES === 'true' ||
  process.env.NODE_ENV === 'production' ||
  process.env.CI === 'true';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // あなたのGitHub情報
  site: 'https://ishikawa-yutaka.github.io',
  base: '/my-blog',
});
