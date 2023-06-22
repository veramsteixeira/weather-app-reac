import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Search from "./Search";
import Git from "./Git";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Search />
    <Git />
  </StrictMode>
);
