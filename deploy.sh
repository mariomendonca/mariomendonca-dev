#!/usr/bin/env bash
# Build the site and rsync it to the VPS.
#
# Usage:
#   ./deploy.sh            # build + deploy
#   ./deploy.sh --dry-run  # build + show what would transfer (no changes)
#
# Configure these (or export them in your shell / a .env you source):
SSH_HOST="${SSH_HOST:-user@your-vps}"          # TODO: ssh target
REMOTE_DIR="${REMOTE_DIR:-/var/www/mariomendonca-portfolio}"
SSH_PORT="${SSH_PORT:-22}"

set -euo pipefail

DRY=""
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY="--dry-run"
  echo "▶ DRY RUN — no files will be transferred"
fi

echo "▶ Building…"
npm run build

echo "▶ Syncing dist/ → ${SSH_HOST}:${REMOTE_DIR}"
rsync -avz --delete $DRY \
  -e "ssh -p ${SSH_PORT}" \
  dist/ "${SSH_HOST}:${REMOTE_DIR}/"

echo "✓ Done."
