// // @ts-check
// import { defineConfig } from "astro/config";

// // https://astro.build/config
// export default defineConfig({});

import { defineConfig } from "astro/config";

// GitHub Pages環境の検出
const isGitHubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.NODE_ENV === "production" ||
  process.env.CI === "true";

export default defineConfig({
  site: "https://ishikawa-yutaka.github.io",
  base: "/my-blog",
  build: {
    // 必要に応じて設定を変更
  },
});
