# Mario Mendonça — Portfolio

A bilingual (EN/PT) personal portfolio built with [Astro](https://astro.build).
Modern-minimal design, light/dark themes, fully static output.

## Stack

- **Astro 5** (static, content-first) + TypeScript
- Hand-written CSS with design tokens (no UI framework) — warm-paper / clay palette
- Self-hosted variable fonts via Fontsource: **Bricolage Grotesque** (display),
  **Hanken Grotesk** (body), **JetBrains Mono** (labels)
- `@astrojs/sitemap` for sitemap + bilingual `hreflang`

## Develop

```bash
npm install
npm run dev        # http://localhost:4321  (EN: /  ·  PT: /pt/)
npm run build      # static output → dist/
npm run preview    # preview the production build
```

## Editing content

All content lives in typed data files — no components to touch:

| File | What |
|---|---|
| `src/data/profile.ts` | Name, title, contact, socials, hero pitch, about, stats |
| `src/data/experience.ts` | Work experience timeline |
| `src/data/projects.ts` | Projects showcase |
| `src/data/education.ts` | Degrees, mentoring, certifications |
| `src/data/skills.ts` | Skill groups |
| `src/i18n/ui.ts` | UI labels / button text |

Every text field is `{ en: '…', pt: '…' }` — edit both languages in one place.

**Assets** live in `public/`: `mario-profile.png`, `mario-mendonca-cv.pdf`,
`favicon.svg`. Replace them in place to update.

## Deploy (VPS)

Served as a static site by Caddy on the personal VPS (the same bind-mount pattern
as `lacopa.com.br`), wired up in the **`personal-vps-infra`** repo:

- `proxy/Caddyfile` — `mariomendonca.dev` block → `root * /opt/apps/portfolio` + `file_server`
- `proxy/docker-compose.yml` — bind-mounts `/opt/apps/portfolio` into the Caddy container

**One-time setup** (already done if the infra change is deployed):

```bash
# on the VPS
mkdir -p /opt/apps/portfolio
# in personal-vps-infra: add the Caddyfile block + compose volume, push, then
# run the deploy-proxy.yml workflow (recreates Caddy + reloads the Caddyfile)
# DNS: point mariomendonca.dev + www A records at the VPS IP
```

**Every deploy** — build locally and rsync the static output:

```bash
cp .deploy.env.example .deploy.env   # first time only — set VPS_USER / VPS_HOST (gitignored)
./deploy.sh                          # npm run build → rsync --delete dist/ to the VPS
```

> The real deploy target (VPS user/host) lives in `.deploy.env`, which is
> gitignored — it is intentionally kept out of this public repo.

Caddy serves the new files immediately (TLS is issued/renewed automatically).

## Adding a blog later

Architecture is ready for it: add an Astro **content collection** (`src/content/`)
for Markdown posts, a `src/pages/blog/[...slug].astro` route (and `pt/`), and a
nav link in `src/components/Nav.astro`. The i18n + design tokens already in place
carry over unchanged.
