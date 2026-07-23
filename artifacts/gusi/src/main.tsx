import { createRoot, hydrateRoot } from "react-dom/client";
import App, { preloadForPath } from "./App";
import "./index.css";

const root = document.getElementById("root")!;

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const path = window.location.pathname.startsWith(base)
  ? window.location.pathname.slice(base.length) || "/"
  : window.location.pathname;

// Load the code-split chunk for the current route before hydrating so the
// hydrated tree matches the prerendered HTML (no Suspense fallback flash).
// If the chunk preload fails (transient network error), still mount: the
// lazy/Suspense fallback path will retry the chunk on render.
preloadForPath(path).catch(() => {}).then(() => {
  if (root.hasChildNodes()) {
    hydrateRoot(root, <App />);
  } else {
    createRoot(root).render(<App />);
  }
});
