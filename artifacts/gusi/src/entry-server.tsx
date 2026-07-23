import { renderToString } from "react-dom/server";
import App, { preloadForPath } from "./App";

export { PRERENDER_PAGES, SITE_URL } from "./data/seo";

export async function render(path: string): Promise<string> {
  // Load the code-split page chunk first so renderToString (which is
  // synchronous and cannot suspend) renders the full page markup.
  await preloadForPath(path);
  return renderToString(<App ssrPath={path} />);
}
