# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed by Mario, 2026-11-07):

- **Hiring managers and recruiters** evaluating Mario for full-time Software Engineer / Tech Lead roles. They scan fast for seniority, measurable impact, and stack fit, often from a LinkedIn link or a CV.
- **Freelance clients** (small businesses, organizers like La Copa) deciding whether to hire Mario to design and build a site or product. They want to see shipped, live work and trust that he delivers.

## Product Purpose

Personal portfolio for Mario Mendonça, Full Stack Software Engineer and Tech Lead based in Recife, Brazil. Success: a visitor understands who Mario is and what he has shipped within one screen, and either downloads the CV or emails him.

## Positioning

An engineer who has both led teams inside a ~60M-user loyalty platform (Livelo: Hotels, Trip Management, a car-rental flow that lifted sales 50%) and personally shipped live products end-to-end (Zuno, Volta, Mind Eaters FC Dashboard, La Copa, FalaAgro as co-founder).

## Capabilities and Constraints

- Static Astro 5 site, bilingual EN (`/`) and PT-BR (`/pt/`); all copy lives in `src/data/*.ts` and `src/i18n/ui.ts` as `{ en, pt }` pairs.
- Must keep: EN/PT language switch, light/dark theme toggle, profile photo.
- Deployed as static files to a VPS behind Caddy (`deploy.sh`).

## Evidence on Hand

- Profile photo: `public/mario-profile.webp` (also original PNG).
- CV PDF: `public/mario-mendonca-cv.pdf`.
- Project screenshots captured from live sites: `public/projects/{zuno,volta,mindeaters,lacopa}.webp`. FalaAgro has no live site and no image.
- Stats in data: 5+ years, ~60M users at Livelo, 50+ students mentored (Porto Digital, 6 squads).
- No testimonials, client logos, or press. Do not invent any.

## Product Principles

1. Shipped work is the proof: show the real products, not adjectives.
2. Scannable for a recruiter in under 30 seconds, deep enough for a client who reads.
3. Both languages are first-class; nothing breaks in the longer Portuguese copy.
4. Content stays readable without JavaScript.
