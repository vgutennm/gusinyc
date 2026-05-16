# Replit → GitHub → cPanel Deploy Playbook

A reusable spec for shipping a static site (or built front-end) from a Replit
project to a GoDaddy/cPanel-hosted domain with one-command pushes from Replit
and one-click deploys from cPanel.

This is the exact flow that was set up for **gusi.nyc** — generalized so it can
be reused on any future Replit + GoDaddy/cPanel project.

---

## 1. Architecture (one-liner)

```
Replit (edit) → ./auto-push.sh → GitHub repo → cPanel "Update from Remote" →
cPanel "Deploy HEAD Commit" runs .cpanel.yml → files copied to public_html/ →
live on the domain
```

Three systems, one direction of flow. The Replit project is the source of
truth. GitHub is the transport. cPanel is the destination.

---

## 2. Prerequisites checklist

Before you start, make sure you have:

- [ ] A Replit project that builds your site to a known output folder
      (e.g. `dist/`, `build/`, `public/` — whatever your framework emits).
- [ ] A GoDaddy (or other cPanel) hosting plan with:
  - [ ] A domain pointed at it (or a working temporary URL).
  - [ ] **SSH access enabled.** This is non-negotiable — cPanel's
        "Deploy HEAD Commit" silently does nothing without shell access.
        On GoDaddy: cPanel home → search "SSH Access" → enable.
- [ ] A GitHub account.
- [ ] Your **cPanel home directory path** (e.g. `/home/abc12def34gh/`). Find it
      in cPanel sidebar under "General Information → Home Directory".
- [ ] Your **target domain's Document Root** in cPanel → Domains
      (often `/home/<user>/public_html/`, but for add-on/sub domains it can
      be a subfolder — verify, don't assume).

---

## 3. Phase 1 — Prepare the Replit project

### 3.1 Decide what gets shipped

The build output is what cPanel will copy to `public_html/`. Pick one model:

- **Model A (recommended):** Commit the built output (e.g. `dist/`) to git.
  cPanel pulls the built files directly. **No build runs on the server.**
  Pro: cPanel doesn't need Node/build tools. Con: every code change rebuilds
  and re-commits the dist files (larger repo).
- **Model B:** Don't commit dist; let cPanel build on the server. Requires
  Node + your toolchain on cPanel (rare on shared hosting). Skip unless you
  *know* the server can build.

This playbook assumes **Model A**.

### 3.2 `.gitignore` — the critical exception pattern

Your `.gitignore` likely already excludes the build output. You need a single
exception so the artifact's dist folder *is* tracked:

```gitignore
# compiled output
dist
!artifacts/<your-app>/dist
!artifacts/<your-app>/dist/**

# replace <your-app> with the actual artifact name (e.g. gusi)
# or, if not in a monorepo, use: !dist  and  !dist/**

# dependencies
node_modules

# Replit
.cache/
.config/
.upm/

# env / secrets
.env
.env.*

# misc
.DS_Store
*.log
```

### 3.3 Build config — bind to environment variables

Make the build script run cleanly *without* requiring runtime env vars to be
set (since you'll run the build from the Shell tab, not from a workflow).
Defaults in `vite.config.ts` (or equivalent) should look like:

```ts
const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  build: {
    outDir: "dist",      // keep the build output local to the artifact dir
  },
  server: { host: true, port, allowedHosts: true },
});
```

`BASE_PATH=/` is correct when the site is served from the **root** of a
domain. If it's served from a subfolder (e.g. `https://example.com/gusi/`),
set `BASE_PATH=/gusi/` at build time.

### 3.4 Build it once locally

```
PORT=3000 BASE_PATH=/ NODE_ENV=production pnpm --filter @workspace/<app> run build
```

Confirm `artifacts/<app>/dist/index.html` and `dist/assets/` exist.

---

## 4. Phase 2 — GitHub repository & token

### 4.1 Create the repo

1. github.com → New repository → name it (e.g. `mysite`).
2. **Public** is fine and simpler for cPanel cloning. Private requires
   credentials in the cPanel Git config.
3. Do **not** initialize with README/`.gitignore`/license — leave it empty so
   the first push from Replit can populate `main` cleanly.

### 4.2 Create a Personal Access Token (PAT)

GitHub → Settings → Developer settings → **Personal access tokens →
Fine-grained tokens** → Generate new token.

- **Repository access:** "Only select repositories" → pick the new repo.
  (Or "All repositories" if you'll reuse the token across projects.)
- **Repository permissions:**
  - **Contents:** Read and write
  - **Metadata:** Read-only (auto-selected)
- **Expiration:** 90 days minimum, longer is fine for personal use.

Copy the token immediately — GitHub only shows it once.

### 4.3 Common pitfall

If you create a fine-grained token scoped to repo "A" and then try to push to
repo "B", GitHub returns `repository not found` (404) — *not* an auth error.
Always confirm the token's repo scope matches the repo you're pushing to.

---

## 5. Phase 3 — Replit auto-push to GitHub

### 5.1 Add the token as a Replit Secret

In Replit: Tools → **Secrets** → New Secret.

- Key: `GITHUB_TOKEN`
- Value: the PAT from 4.2

That's it. Don't store username — the token is enough to authenticate.

### 5.2 Drop in `auto-push.sh` at the project root

```bash
#!/usr/bin/env bash
# auto-push.sh — Commit and push the current Replit working tree to GitHub.
#
# Reads credentials from environment:
#   GITHUB_TOKEN     (required) — Personal Access Token with repo write access.
#
# Pushes to: https://github.com/<OWNER>/<REPO>.git (branch: main)
#
# Usage:
#   ./auto-push.sh                 # commit + push if there are changes
#   ./auto-push.sh "my message"    # use a custom commit message

set -euo pipefail

REPO_URL_HOST="github.com/<OWNER>/<REPO>.git"   # <-- EDIT
BRANCH="main"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "ERROR: GITHUB_TOKEN is not set. Add it in Replit Secrets." >&2
  exit 1
fi

cd "$(dirname "$0")"

if [[ ! -d .git ]]; then
  echo "ERROR: This directory is not a git repository." >&2
  exit 1
fi

current_branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [[ "$current_branch" != "$BRANCH" ]]; then
  echo "WARNING: current branch is '$current_branch', expected '$BRANCH'."
fi

git add -A

if git diff --cached --quiet; then
  echo "No changes to commit. Pushing existing commits (if any)…"
else
  msg="${1:-Auto update from Replit: $(date '+%Y-%m-%d %H:%M:%S')}"
  git -c user.name="Replit Auto Push" \
      -c user.email="auto-push@replit.local" \
      commit -m "$msg"
  echo "Committed: $msg"
fi

push_url="https://x-access-token:${GITHUB_TOKEN}@${REPO_URL_HOST}"
git -c credential.helper= -c http.postBuffer=524288000 \
    push "$push_url" "HEAD:${BRANCH}" 2>&1 \
  | sed "s/${GITHUB_TOKEN}/REDACTED/g"

echo "Push to https://${REPO_URL_HOST} complete."
```

Make it executable:

```
chmod +x auto-push.sh
```

### 5.3 Why this design

- **Token in URL, not in `.git/config`.** Nothing on disk holds the token.
- **No empty commits.** `git diff --cached --quiet` short-circuits.
- **Doesn't touch `origin`.** Replit's built-in Git pane keeps working
  alongside the script.
- **Output is sanitized** so the token never appears in logs.
- **No background watcher.** Replit auto-checkpoints on every chat turn; a
  watcher would race those checkpoints and fight `.git/index.lock`. Ship
  on demand instead.

### 5.4 Day-2 usage

In Replit's **Shell** tab:

```
./auto-push.sh "added hours section"
```

That's the entire developer loop. Replit's agent cannot run the script
itself (sandbox blocks agent-initiated commits to avoid racing checkpoints) —
**you** run it. As a workaround, the agent can also push directly via the
GitHub Contents API for one-off file edits, but the script is the canonical
path.

### 5.5 First push

1. Confirm `.git` exists and `main` is the current branch:
   `git status -sb`
2. Run `./auto-push.sh "initial import"`.
3. Verify on GitHub by opening the repo URL in a browser — the latest commit
   should be visible.

Initial push of a heavy repo (with images / dist) can take 30–120 seconds.
Subsequent pushes only send deltas and are fast.

---

## 6. Phase 4 — cPanel SSH access

**This is the most-overlooked step. Do it before touching Git Version Control.**

cPanel home → search "SSH Access" → **Manage SSH Keys** or "Enable SSH". On
GoDaddy specifically, SSH is sometimes enabled in the GoDaddy hosting
dashboard rather than cPanel itself: My Products → Web Hosting → Settings →
**SSH Access: On**.

Without SSH on:

- ❌ `.cpanel.yml` deployment tasks silently no-op.
- ❌ "Deploy HEAD Commit" appears to succeed but does nothing.
- ✅ "Update from Remote" still works (pure git pull).

You'll waste hours debugging "why isn't my site updating" if you skip this.

---

## 7. Phase 5 — cPanel Git Version Control

### 7.1 Create the repository entry

cPanel → **Git Version Control** → **Create**.

- **Clone URL:** `https://github.com/<OWNER>/<REPO>.git`
- **Repository Path:** `/home/<cpanel_user>/repositories/<repo>`
- **Repository Name:** `<repo>` (display name only)
- **Clone a Repository:** **ON**

For a public GitHub repo, no credentials needed. For a private repo, append
the token to the clone URL: `https://x-access-token:<TOKEN>@github.com/...`.
(The token is then stored in `repositories/<repo>/.git/config` on the server —
acceptable on a single-tenant account, but rotate it periodically.)

### 7.2 Wait for the clone

Cloning is **slow on shared hosting** — 5–25 minutes for a 200+ MB repo is
normal. Don't refresh aggressively or click "Remove" mid-clone.

If it appears stuck after 30 minutes, SSH in and check the partial clone:

```
ssh <cpanel_user>@<server_ip>
du -sh ~/repositories/<repo>
```

If the size is growing, it's working. If flat for 5+ minutes, kill it
(remove the entry in cPanel + delete the folder in File Manager) and retry.

---

## 8. Phase 6 — `.cpanel.yml` deployment script

### 8.1 The file

Create `.cpanel.yml` at the **root** of the GitHub repository (not inside the
artifact folder):

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/<cpanel_user>/public_html/
    - /bin/cp -R artifacts/<app>/dist/* $DEPLOYPATH
```

Replace `<cpanel_user>` and `<app>`. The path **must** end with a `/`.

### 8.2 With or without `rm -rf`?

Two valid variants:

**Overwrite-only (safer, default in this playbook):**

```yaml
    - /bin/cp -R artifacts/<app>/dist/* $DEPLOYPATH
```

New and changed files are copied; deleted/renamed files in `dist/` will
linger on the server. Safe if `public_html/` contains other things you want
to preserve (e.g. `cgi-bin/`, `.htaccess`, hand-uploaded files).

**Wipe-then-copy (cleaner, more aggressive):**

```yaml
    - /bin/rm -rf $DEPLOYPATH/*
    - /bin/cp -R artifacts/<app>/dist/* $DEPLOYPATH
```

Guarantees `public_html/` exactly mirrors `dist/`. **Will destroy** anything
else in `public_html/`, including `.htaccess` if your app doesn't ship one.

### 8.3 Document Root sanity check

Before deploying, **verify the target domain's Document Root** in cPanel →
Domains. The column shows the actual path. Common patterns:

- Primary domain → `/home/<user>/public_html/`
- Add-on domain → `/home/<user>/public_html/<addon-folder>/`
- Subdomain → `/home/<user>/public_html/<sub>/` or its own path

`DEPLOYPATH` in `.cpanel.yml` **must match the Document Root of the domain
you want to update.** Wrong path = files copied to a folder no one serves.

### 8.4 Push the `.cpanel.yml` to GitHub

```
./auto-push.sh "Add cPanel deployment file"
```

---

## 9. Phase 7 — First deploy

cPanel → **Git Version Control** → **Manage** on your repo → **Pull or
Deploy** tab.

1. Click **Update from Remote**. Should show "Successful" within a few
   seconds. This pulls the latest commit (including `.cpanel.yml`).
2. Click **Deploy HEAD Commit**. Should show a success banner with the
   command output.
3. Open the live domain in an incognito window. The site should be live.

If the page is blank/404 after deploy:

- Open browser DevTools → Network. If asset URLs (JS/CSS) return 404, the
  build's `BASE_PATH` doesn't match where the site is served from. Rebuild
  with the correct `BASE_PATH`, push, redeploy.
- If the page is the old site or a default cPanel page, the Document Root
  in `.cpanel.yml` doesn't match the domain's actual Document Root.

---

## 10. Day-2 workflow (the whole loop)

After everything is set up, shipping a change looks like this:

```
# 1. Edit code in Replit (any way you like).
# 2. Build:
PORT=3000 BASE_PATH=/ NODE_ENV=production pnpm --filter @workspace/<app> run build

# 3. Push to GitHub:
./auto-push.sh "describe the change"

# 4. In cPanel → Git Version Control → Manage → Pull or Deploy:
#    - Click "Update from Remote"
#    - Click "Deploy HEAD Commit"

# 5. Hard-refresh the live site (Cmd+Shift+R / Ctrl+Shift+F5).
```

About 60 seconds end-to-end after the build finishes.

---

## 11. Common pitfalls (lessons learned the hard way)

| Symptom | Cause | Fix |
|---|---|---|
| `repository not found` (HTTP 404) on push, but token authenticates fine | Fine-grained PAT is scoped to wrong repo | Edit token → add target repo to access list |
| `fatal: not a git repository` in cPanel Git after a failed earlier setup | The `repositories/<repo>/.git` folder is corrupted | Remove repo entry, delete folder via File Manager, recreate |
| "Deploy HEAD Commit" succeeds but site doesn't change | SSH access is OFF on the cPanel account | Enable SSH, retry |
| Site loads but assets 404 / page is blank | `BASE_PATH` mismatch between build and serving location | Rebuild with correct base, redeploy |
| `DNS_PROBE_FINISHED_NXDOMAIN` in browser | Local DNS cache or wrong URL | Flush DNS, try mobile data, verify the URL in cPanel → Domains |
| Clone in cPanel "in progress" forever | Genuinely slow shared hosting OR hung | Wait 25 min; if no growth, remove + retry |
| Initial `git push` from Replit shell takes 2+ minutes | Repo is large (committed dist + media) | Normal. Subsequent pushes are fast (deltas only) |
| Replit Git pane "Push" button is greyed | Nothing local to push (already in sync) | Not an error |

---

## 12. Replacement variables — fill these in once per project

When applying this playbook to a new site, these are the values you customize:

| Token | Example | Where used |
|---|---|---|
| `<OWNER>` | `vgutennm` | `auto-push.sh`, GitHub URLs |
| `<REPO>` | `mysite` | `auto-push.sh`, GitHub URLs, cPanel Clone URL |
| `<cpanel_user>` | `vllzr8jk8a1z` | `.cpanel.yml`, Repository Path |
| `<app>` | `gusi` | `.cpanel.yml` (path under `artifacts/`), `.gitignore` exception |
| `<server_ip>` | `97.74.209.81` | SSH troubleshooting only |

Everything else is identical project to project.

---

## 13. Optional hardening / nice-to-haves

- **Auto-deploy on push** — Add a GitHub Actions webhook that calls cPanel's
  deploy endpoint after each push so you don't have to click in cPanel. Out
  of scope for this playbook; cPanel docs cover it under "DeploymentURL".
- **Branch protection** — Require PRs to `main` so `auto-push.sh` can't
  bypass review. Useful for team projects, overkill for solo.
- **Token rotation** — Set the PAT expiration to 90 days. When it expires,
  generate a new one and update the `GITHUB_TOKEN` secret in Replit + the
  cPanel Git repo's stored credentials (if private repo).
- **Separate prod and staging domains** — Two `.cpanel.yml` variants, two
  cPanel Git repo entries (one per branch: `main` → prod, `staging` → preview).

---

## 14. TL;DR for the next site

1. Replit: build to `artifacts/<app>/dist/`. Track that folder in `.gitignore`.
2. GitHub: create repo, create fine-grained PAT with **Contents: write**
   scoped to that repo, add token to Replit as `GITHUB_TOKEN`.
3. Drop in `auto-push.sh`, edit `<OWNER>/<REPO>` line, `chmod +x`.
4. Run `./auto-push.sh "initial"` from Replit Shell.
5. Enable **SSH** on the cPanel account. (Critical.)
6. cPanel → Git Version Control → Create → clone the GitHub repo.
7. Add `.cpanel.yml` with correct `<cpanel_user>` and `<app>`, push.
8. cPanel → Manage → Pull or Deploy → Update from Remote → Deploy HEAD Commit.
9. Live.
