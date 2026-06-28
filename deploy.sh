#!/bin/bash
set -e

# Static deploy to the personal VPS (bind-mount served by Caddy; see
# personal-vps-infra). Deploy target is kept OUT of this public repo — set it via
# a gitignored ./.deploy.env (copy .deploy.env.example) or environment variables:
#   VPS_USER, VPS_HOST, REMOTE_PATH
[ -f .deploy.env ] && { set -a; . ./.deploy.env; set +a; }

VPS_USER="${VPS_USER:?set VPS_USER (e.g. in .deploy.env — see .deploy.env.example)}"
VPS_HOST="${VPS_HOST:?set VPS_HOST (e.g. in .deploy.env)}"
REMOTE_PATH="${REMOTE_PATH:-/opt/apps/portfolio}"

echo "→ Building..."
npm run build

echo "→ Syncing dist/ to the VPS..."
rsync -avz --delete dist/ "$VPS_USER@$VPS_HOST:$REMOTE_PATH/"

echo "✓ Deploy complete — https://mariomendonca.dev"
