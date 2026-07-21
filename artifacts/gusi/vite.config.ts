import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { STORY_ARTICLES } from "./src/data/stories";
import { BLOG_POSTS } from "./src/data/posts";

const port = Number(process.env.PORT || 5173);
const basePath = process.env.BASE_PATH || "/";

const SITE_URL = "https://gusi.nyc";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemap(): string {
  const staticEntries = `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>2026-05-16</lastmod>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
    <image:image>
      <image:loc>${SITE_URL}/gallery/gusi-1f-05.webp</image:loc>
      <image:title>GUSI Restaurant &amp; Bar — Greenwich Village, NYC</image:title>
      <image:caption>Interior of GUSI restaurant and bar at 432 Sixth Avenue, Greenwich Village — first-floor dining and bar space.</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/gallery/gusi-2f-02.webp</image:loc>
      <image:title>Lebedi / The Swans — GUSI second-floor dining room</image:title>
      <image:caption>GUSI's second-floor dining room with commissioned paintings, ivory chairs, white-clothed tables, and a hand-painted ceiling.</image:caption>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/brand/gusi-share-card-og.webp</image:loc>
      <image:title>GUSI Restaurant wordmark</image:title>
    </image:image>
  </url>
  <url>
    <loc>${SITE_URL}/events</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/events" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/events" />
  </url>
  <url>
    <loc>${SITE_URL}/events/private-events</loc>
    <lastmod>2026-05-16</lastmod>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/events/private-events" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/events/private-events" />
  </url>
  <url>
    <loc>${SITE_URL}/press</loc>
    <lastmod>2026-05-16</lastmod>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/press" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/press" />
  </url>
  <url>
    <loc>${SITE_URL}/blog</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/blog" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/blog" />
  </url>
  <url>
    <loc>${SITE_URL}/story</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/story" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/story" />
  </url>
  <url>
    <loc>${SITE_URL}/menu</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/menu" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/menu" />
  </url>
  <url>
    <loc>${SITE_URL}/reservations</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/reservations" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/reservations" />
  </url>
  <url>
    <loc>${SITE_URL}/contact</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_URL}/contact" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/contact" />
  </url>`;

  const publishedPosts = STORY_ARTICLES.filter(
    (article) => article.published && article.slug && BLOG_POSTS[article.slug],
  ).map((article) => BLOG_POSTS[article.slug as string]);

  const postEntries = publishedPosts
    .map((post) => {
      const loc = `${SITE_URL}/blog/${post.slug}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${post.dateModified ?? post.datePublished}</lastmod>
    <xhtml:link rel="alternate" hreflang="en-US" href="${loc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
    <image:image>
      <image:loc>${SITE_URL}${post.image}</image:loc>
      <image:title>${escapeXml(post.h1)}</image:title>
      <image:caption>${escapeXml(post.metaDescription)}</image:caption>
    </image:image>
  </url>`;
    })
    .join("\n");

  const body = [staticEntries, postEntries].filter(Boolean).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
}

function sitemapPlugin(): Plugin {
  return {
    name: "gusi-sitemap",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(import.meta.dirname, "dist");
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), buildSitemap(), "utf8");
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    sitemapPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
