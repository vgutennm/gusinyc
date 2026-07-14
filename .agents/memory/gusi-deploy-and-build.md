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

# Screenshot limitation

`screenshot` captures from the top of the page and cannot scroll. To see lower sections (e.g. footer), use a tall `viewport_size` height (max 3000) rather than expecting a scrolled view.

The homepage Hero is `min-h-[100svh]`, so it always fills the viewport and pushes everything below the fold no matter how tall you make the viewport. To capture a specific below-fold section, navigate to its anchor hash (e.g. `path="/#dishes"`, `/#gallery`, `/#faq`) — Home.tsx runs a hash-scroll effect on mount, so the screenshot lands on that section.
