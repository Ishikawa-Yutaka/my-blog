// // @ts-check
// import { defineConfig } from "astro/config";

// // https://astro.build/config
// export default defineConfig({});

import { defineConfig } from "astro/config";

// GitHub Pagesでデプロイする場合はbaseパスを設定
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: "https://Ishikawa-Yutaka.github.io",
  base: "/my-blog",
  build: {
    // 必要に応じて設定を変更
  },
});
