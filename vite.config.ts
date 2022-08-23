import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "zzzgydi/bilibili-boring",
        match: ["*://*.bilibili.com/*"],
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
