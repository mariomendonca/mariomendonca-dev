---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/pt/index.astro"]
---

# Surface: portfolio home (EN `/`, PT `/pt/`)

Mode: Experience. Audience: hiring managers/recruiters and freelance clients, equally.
Job: in one screen, know who Mario is and what he shipped; then email him or download the CV.
Constraints: keep EN/PT switch, light/dark toggle, real profile photo; live-site screenshots in `public/projects/`. No invented testimonials or claims.

## Direction contract

THESIS: The category standard, executed impeccably at the craft level of brittanychiang.com and paco.me: a quiet, text-first engineer portfolio where typography, spacing and real screenshots do all the work. It refuses the template chrome around it: no eyebrows, no section numbers, no stat boxes, no card grid, no scroll-reveal hiding content.

OWN-WORLD: White/near-white ground and near-black ink, one blue for links and the primary action, a neutral grotesk in two weights, hairline dividers only where they separate rows, real product screenshots carry all colour. Dark mode is the same system inverted, not a new mood.

STORY: Visitor reads name, one-line pitch and current role, sees three shipped products right below, scans a dated experience list with impact, then emails.

FIRST VIEWPORT: Desktop two-column: left 7/12 holds name (large), pitch sentence, "Software Engineer at OneBeat · previously Tech Lead at Livelo", buttons Email me (primary) + Download CV; right 5/12 the portrait photo. The top edge of the work row (three screenshots) is visible at 900px height. Mobile: name, pitch, buttons first; photo smaller beside the name.

FORM: Category standard (canon card), standing exit taken by the user; references brittanychiang.com, paco.me. seed:f4a6d0fd93b8098a. Build path: code-led (disclosed: comp shows invented screenshots and a stand-in face the real assets cannot match); decision comp `.impeccable/mocks/decision/canon.png` rides as critique reference.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
