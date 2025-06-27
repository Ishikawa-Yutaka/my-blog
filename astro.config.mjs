// // @ts-check
// import { defineConfig } from "astro/config";

// // https://astro.build/config
// export default defineConfig({});

import { defineConfig } from "astro/config";

// 環境に応じてbaseパスを設定
const isProduction =
  process.env.NODE_ENV === "production" || process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: "https://Ishikawa-Yutaka.github.io",
  base: isProduction ? "/my-blog" : "/",
  build: {
    // 必要に応じて設定を変更
  },
});
