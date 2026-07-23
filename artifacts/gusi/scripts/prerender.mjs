import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, ".prerender", "entry-server.js");

const { render, PRERENDER_PAGES, SITE_URL } = await import(
  pathToFileURL(ssrEntry).href
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceBlock(html, name, replacement) {
  const start = `<!-- gusi:head:${name}:start -->`;
  const end = `<!-- gusi:head:${name}:end -->`;
  const startIdx = html.indexOf(start);
  const endIdx = html.indexOf(end);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Missing head marker "${name}" in index.html template`);
  }
  return (
    html.slice(0, startIdx) +
    start +
    "\n" +
    replacement +
    "\n    " +
    html.slice(endIdx)
  );
}

// The optional id matches the ids used by applyJsonLd() in src/lib/seo.ts so
// the client reuses the prerendered script instead of appending a duplicate.
function jsonLd(data, id) {
  const idAttr = id ? ` data-jsonld="${id}"` : "";
  return `    <script type="application/ld+json"${idAttr}>\n    ${JSON.stringify(data, null, 2).split("\n").join("\n    ")}\n    </script>`;
}

function buildHead(html, page) {
  const t = escapeHtml(page.title);
  const d = escapeHtml(page.description);
  const canonical = escapeHtml(page.canonical);
  const image = escapeHtml(page.image);
  const imageAlt = escapeHtml(page.imageAlt);
  const pageUrl = escapeHtml(`${SITE_URL}${page.path}`);

  html = replaceBlock(
    html,
    "core",
    [
      `    <title>${t}</title>`,
      `    <meta name="description" content="${d}">`,
      `    <meta name="author" content="GUSI Restaurant">`,
      `    <meta name="application-name" content="GUSI">`,
      `    <meta name="apple-mobile-web-app-title" content="GUSI">`,
      `    <meta name="robots" content="${escapeHtml(page.robots)}">`,
    ].join("\n"),
  );

  html = replaceBlock(
    html,
    "canonical",
    [
      `    <link rel="canonical" href="${canonical}">`,
      `    <link rel="alternate" hreflang="en-US" href="${canonical}">`,
      `    <link rel="alternate" hreflang="x-default" href="${canonical}">`,
    ].join("\n"),
  );

  html = replaceBlock(
    html,
    "social",
    [
      `    <meta property="og:type" content="${page.ogType === "article" ? "article" : "website"}">`,
      `    <meta property="og:url" content="${pageUrl}">`,
      `    <meta property="og:title" content="${t}">`,
      `    <meta property="og:description" content="${d}">`,
      `    <meta property="og:image" content="${image}">`,
      `    <meta property="og:image:alt" content="${imageAlt}">`,
      `    <meta property="og:locale" content="en_US">`,
      `    <meta property="og:site_name" content="GUSI">`,
      ...(page.article
        ? [
            `    <meta property="article:published_time" content="${escapeHtml(page.article.datePublished)}">`,
            `    <meta property="article:modified_time" content="${escapeHtml(page.article.dateModified)}">`,
          ]
        : []),
      `    <meta name="twitter:card" content="summary_large_image">`,
      `    <meta name="twitter:title" content="${t}">`,
      `    <meta name="twitter:description" content="${d}">`,
      `    <meta name="twitter:image" content="${image}">`,
      `    <meta name="twitter:image:alt" content="${imageAlt}">`,
    ].join("\n"),
  );

  html = replaceBlock(html, "preload", "");

  const schemas = [];
  schemas.push(
    jsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: page.breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    }),
  );
  if (page.article) {
    schemas.push(
      jsonLd({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${page.canonical}#article`,
        url: page.canonical,
        mainEntityOfPage: { "@type": "WebPage", "@id": page.canonical },
        headline: page.article.headline,
        description: page.description,
        image: page.image,
        datePublished: page.article.datePublished,
        dateModified: page.article.dateModified,
        author: {
          "@type": "Organization",
          name: "GUSI",
          url: `${SITE_URL}/`,
        },
        publisher: { "@id": `${SITE_URL}/#restaurant` },
      }, "blogposting"),
    );
    if (page.article.faq.length > 0) {
      schemas.push(
        jsonLd({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }, "faq"),
      );
    }
  } else if (page.faq && page.faq.length > 0) {
    schemas.push(
      jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }, "faq"),
    );
  }
  html = replaceBlock(html, "schema", schemas.join("\n"));

  return html;
}

function injectApp(html, appHtml) {
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) {
    throw new Error("Missing <div id=\"root\"></div> in template");
  }
  return html.replace(marker, `<div id="root">${appHtml}</div>`);
}

// Inject <link rel="modulepreload"> for the code-split page chunk so
// prerendered subpages fetch their chunk in parallel with the main bundle
// instead of waterfalling behind it.
const assetFiles = fs.readdirSync(path.join(distDir, "assets"));
function chunkFor(prefix) {
  return assetFiles.find((f) => f.startsWith(`${prefix}-`) && f.endsWith(".js"));
}
function pageChunkPrefix(routePath) {
  if (routePath === "/press") return "Press";
  if (routePath === "/events" || routePath === "/events/private-events") return "PrivateEvents";
  if (routePath === "/blog") return "Blog";
  if (routePath.startsWith("/blog/")) return "BlogPost";
  if (routePath === "/story") return "Story";
  if (routePath === "/menu") return "Menu";
  if (routePath === "/reservations") return "Reservations";
  if (routePath === "/contact") return "Contact";
  if (routePath === "/404.html") return "not-found";
  return null;
}
function injectModulePreload(html, routePath) {
  const prefix = pageChunkPrefix(routePath);
  if (!prefix) return html;
  const chunk = chunkFor(prefix);
  if (!chunk) throw new Error(`No built chunk found for page prefix "${prefix}"`);
  return html.replace(
    "</head>",
    `  <link rel="modulepreload" crossorigin href="/assets/${chunk}">\n  </head>`,
  );
}

function outputPathFor(routePath) {
  if (routePath === "/") return path.join(distDir, "index.html");
  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

const written = [];

for (const page of PRERENDER_PAGES) {
  const appHtml = await render(page.path);
  if (!appHtml || appHtml.length < 500) {
    throw new Error(`Suspiciously small render for ${page.path}`);
  }
  let html = page.useTemplateHead ? template : buildHead(template, page);
  html = injectModulePreload(html, page.path);
  html = injectApp(html, appHtml);
  const outFile = outputPathFor(page.path);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, "utf8");
  written.push(path.relative(distDir, outFile));
}

// Physical 404 page (served by Apache via ErrorDocument 404 /404.html)
{
  const appHtml = await render("/this-page-does-not-exist");
  let html = buildHead(template, {
    path: "/404.html",
    title: "Page Not Found | GUSI",
    description:
      "The page you're looking for doesn't exist. Explore GUSI's menu, blog, and reservations in Greenwich Village, NYC.",
    canonical: `${SITE_URL}/`,
    robots: "noindex, follow",
    ogType: "website",
    image: `${SITE_URL}/brand/gusi-share-card-og.webp`,
    imageAlt: "GUSI Restaurant wordmark",
    breadcrumbs: [{ name: "Home", item: `${SITE_URL}/` }],
  });
  html = injectModulePreload(html, "/404.html");
  html = injectApp(html, appHtml);
  fs.writeFileSync(path.join(distDir, "404.html"), html, "utf8");
  written.push("404.html");
}

console.log(`Prerendered ${written.length} pages:\n${written.map((f) => `  dist/${f}`).join("\n")}`);
