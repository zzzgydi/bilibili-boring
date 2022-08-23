import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const injectDom = (() => {
  const app = document.createElement("div");
  document.body.append(app);
  return app;
})();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  injectDom
);
