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

## Before deploying

1. Set your real domain in **`astro.config.mjs`** (`SITE`) — used for canonical
   URLs, OG tags, sitemap and `hreflang`.
2. Update `server_name` / `root` in **`nginx.conf`** and the SSH vars in
   **`deploy.sh`**.

## Deploy (VPS)

The site is fully static, so nginx just serves `dist/`.

```bash
# one-time on the VPS: place nginx.conf, enable it, get a cert
sudo cp nginx.conf /etc/nginx/sites-available/mariomendonca-portfolio
sudo ln -s /etc/nginx/sites-available/mariomendonca-portfolio /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d mariomendonca.dev -d www.mariomendonca.dev

# from your machine: build + push
SSH_HOST=user@your-vps ./deploy.sh --dry-run   # preview
SSH_HOST=user@your-vps ./deploy.sh             # ship
```

## Adding a blog later

Architecture is ready for it: add an Astro **content collection** (`src/content/`)
for Markdown posts, a `src/pages/blog/[...slug].astro` route (and `pt/`), and a
nav link in `src/components/Nav.astro`. The i18n + design tokens already in place
carry over unchanged.
