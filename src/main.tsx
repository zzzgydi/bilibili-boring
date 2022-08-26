import React from "react";
import ReactDOM from "react-dom/client";
import Entry from "@/components/entry";
import { setupDefault } from "@/services/play";

setupDefault();

const injectDom = (() => {
  const app = document.createElement("div");
  document.body.append(app);
  return app;
})();

ReactDOM.createRoot(injectDom).render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>
);
