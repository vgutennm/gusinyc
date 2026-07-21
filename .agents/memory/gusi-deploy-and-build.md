---
name: GUSI site deploy flow & build quirk
description: How the gusi.nyc site ships, the committed-dist requirement, and the dev-server build-hang workaround.
---

# GUSI (artifacts/gusi) deploy flow

- Pipeline: Replit → GitHub (`vgutennm/gusinyc`, pushed with `GITHUB_TOKEN`) → cPanel copies the **pre-built** `artifacts/gusi/dist/*` to gusi.nyc. The host serves static `dist`, it does NOT build.
- Therefore `dist/` is committed, and you MUST rebuild (`pnpm --filter @workspace/gusi run build`) before every push, or the live site ships stale.
- The user runs `bash auto-push.sh` themselves (sandbox blocks destructive git). Don't try to push for them — tell them to run it.
- Vite `base="/"`; assets are absolute (`/assets/...`). Client-side routing (Wouter) relies on an SPA fallback to index.html on the host (existing `/press` proves nested paths like `/events/private-events` resolve).

# cPanel deploy pitfalls (learned from production 404s on direct SPA routes)

- `.cpanel.yml` must copy with `cp -R artifacts/gusi/dist/. $DEPLOYPATH` — the earlier `dist/*` glob silently skipped dotfiles, so `.htaccess` never reached the doc root and every direct hit to a client route 404'd in production while working locally.
- The `.htaccess` SPA fallback must NOT exempt directories (`!-d`): real asset folders like `/blog/` and `/gallery/` have no index.html, so exempting them made `/blog` 301→`/blog/`→403 on Apache. Only exempt real files (`!-f`).
- The cPanel copy is additive (no cleanup); stale hashed assets accumulate in `public_html` over time.
- If routing still fails after deploy, check server side: `AllowOverride`/`mod_rewrite` must be enabled for the vhost.

# Build hang workaround

**Symptom:** `pnpm run build` hangs at "transforming…" then exits with code -1 / no output (or times out at 124). It is NOT OOM (~12Gi free).
**Cause:** contention with the running `artifacts/gusi: web` dev server / file watcher.
**Fix that works:** `restart_workflow "artifacts/gusi: web"`, then build immediately. Clearing `node_modules/.vite` alone did NOT fix it.
**Verify pattern:** `cd artifacts/gusi && pnpm run build > /tmp/gusi-build.log 2>&1; echo "exit:$?"; tail -3 /tmp/gusi-build.log`.

# Typecheck quirk

- `tsc -p tsconfig.json --noEmit` for gusi can exceed the 2-min bash timeout under dev-server contention; background/detached processes get killed between bash calls. What works: restart the web workflow, run the build first, then `timeout 110 npx tsc -p tsconfig.json --noEmit` (completes quickly once caches are warm).

# Screenshot limitation

`screenshot` captures from the top of the page and cannot scroll. To see lower sections (e.g. footer), use a tall `viewport_size` height (max 3000) rather than expecting a scrolled view.

The homepage Hero is `min-h-[100svh]`, so it always fills the viewport and pushes everything below the fold no matter how tall you make the viewport. To capture a specific below-fold section, navigate to its anchor hash (e.g. `path="/#dishes"`, `/#gallery`, `/#faq`) — Home.tsx runs a hash-scroll effect on mount, so the screenshot lands on that section.

## Prerendering
- Build now: client vite build → SSR bundle (.prerender/, deleted after) → scripts/prerender.mjs writes dist/<route>/index.html for all PRERENDER_PAGES (src/data/seo.ts, derived from BLOG_POSTS) + dist/404.html.
- **Do NOT use `vite preview` to validate prerendered pages** — its SPA fallback rewrites every route to root index.html. Use a plain static server (`python3 -m http.server`) instead.
- New blog posts: add to BLOG_POSTS, rebuild, then deploy — prerender routes and sitemap both derive from it automatically.
- .htaccess serves <path>/index.html at slashless URLs without a 301; unknown /blog/* returns real HTTP 404 via ErrorDocument 404 /404.html.
