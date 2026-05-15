#!/usr/bin/env bash
# auto-push.sh — Commit and push the current Replit working tree to GitHub.
#
# Reads credentials from environment:
#   GITHUB_TOKEN     (required) — Personal Access Token with repo write access.
#
# Pushes to: https://github.com/vgutennm/gusinyc.git (branch: main)
#
# Usage:
#   ./auto-push.sh                 # commit + push if there are changes
#   ./auto-push.sh "my message"    # use a custom commit message
#
# Notes:
# - Does NOT modify the local 'origin' remote — pushes directly to the URL
#   so other tooling (Replit's Git pane, etc.) is unaffected.
# - Skips the commit when the working tree has no changes (no empty commits).
# - The token is never written to disk or printed.

set -euo pipefail

REPO_URL_HOST="github.com/vgutennm/gusinyc.git"
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

# Make sure we are on main (don't switch if already there to avoid noise).
current_branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [[ "$current_branch" != "$BRANCH" ]]; then
  echo "WARNING: current branch is '$current_branch', expected '$BRANCH'. Pushing HEAD to $BRANCH anyway."
fi

# Stage everything.
git add -A

# Bail out cleanly when there is nothing to commit.
if git diff --cached --quiet; then
  echo "No changes to commit. Pushing existing commits (if any)…"
else
  msg="${1:-Auto update from Replit: $(date '+%Y-%m-%d %H:%M:%S')}"
  git -c user.name="Replit Auto Push" \
      -c user.email="auto-push@replit.local" \
      commit -m "$msg"
  echo "Committed: $msg"
fi

# Push directly using the token in the URL (kept out of git config / disk).
push_url="https://x-access-token:${GITHUB_TOKEN}@${REPO_URL_HOST}"
git -c credential.helper= -c http.postBuffer=524288000 \
    push "$push_url" "HEAD:${BRANCH}" 2>&1 \
  | sed "s/${GITHUB_TOKEN}/REDACTED/g"

echo "Push to https://${REPO_URL_HOST} complete."
