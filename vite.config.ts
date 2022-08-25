import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        name: "Bilibili Boring",
        author: "zzzgydi",
        description: "用于无聊刷b站",
        namespace: "zzzgydi/bilibili-boring",
        homepage: "https://github.com/zzzgydi/bilibili-boring",
        homepageURL: "https://github.com/zzzgydi/bilibili-boring",
        icon: "https://vitejs.dev/logo.svg",
        match: ["*://*.bilibili.com/*"],
        exclude: ["*://api.bilibili.com/*", "*://api.*.bilibili.com/*"],
      },
      build: {
        // externalGlobals: {
        //   react: cdn.jsdelivr("React", "umd/react.production.min.js"),
        //   "react-dom": cdn.jsdelivr(
        //     "ReactDOM",
        //     "umd/react-dom.production.min.js"
        //   ),
        // },
      },
    }),
  ],
});
