import { renderToString } from "react-dom/server";
import App from "./App";

export { PRERENDER_PAGES, SITE_URL } from "./data/seo";

export function render(path: string): string {
  return renderToString(<App ssrPath={path} />);
}
