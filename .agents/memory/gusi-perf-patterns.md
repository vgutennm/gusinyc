---
name: GUSI perf patterns for prerendered Vite site
description: SSR-safe route splitting with renderToString, self-hosted variable fonts, and analytics dedupe decisions for the GUSI static site
---

# SSR-safe route code-splitting with renderToString
Rule: React.lazy alone breaks synchronous `renderToString` prerendering — an uninitialized lazy throws even if its import promise is already fulfilled. Use a `splitPage()` wrapper that caches the resolved component after an explicit `preload()`, and await that preload before both server render and client `hydrateRoot`.
**Why:** renderToString cannot suspend; and hydrating before the chunk loads causes a Suspense-fallback mismatch with the prerendered HTML.
**How to apply:** entry-server `render()` must be async and await `preloadForPath(path)`; prerender script must `await render(...)`; main.tsx must preload the current route chunk (with a `.catch` so mount still happens on failure) before hydrating. Also inject `<link rel="modulepreload">` for each page's chunk at prerender time to avoid a chunk waterfall on subpages.

# Google Fonts self-hosting shortcut
Requesting specific weights from the Google Fonts CSS API with a Chrome UA returns the *same variable WOFF2 file* for every weight of a family/style. Dedupe by checksum and ship one file per family/style with `font-weight: 300 700` (or `100 900`) ranges + `font-display: swap`. In Tailwind v4 CSS, `@font-face` blocks must come **after** the `@import` lines or the CSS is invalid.

# Analytics dedupe decision
GA4 property G-VJ7V5E7MJV fires from inside GTM container GTM-NWSBPTPW (verified by fetching gtm.js). The direct gtag.js snippet in index.html was removed as a duplicate — do not re-add it; GTM + noscript iframe is the single source of tracking.

# .htaccess audio caching
MP3s are not content-hashed, so they get `public, max-age=31536000` **without** `immutable` (separate FilesMatch block after the hashed-assets block).
