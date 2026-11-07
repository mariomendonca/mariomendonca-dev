---
name: Mario Mendonça Portfolio
description: A quiet, text-first engineer portfolio where type, spacing and real product screenshots do all the work.
colors:
  ground: "#fcfcfb"
  ink: "#111418"
  ink-muted: "#4b5260"
  ink-faint: "#646b78"
  rule: "#e5e7eb"
  wash: "#f2f3f5"
  primary: "#2457d6"
  primary-deep: "#1a44ad"
  on-primary: "#ffffff"
  ground-dark: "#0e1013"
  ink-dark: "#eceef1"
  ink-muted-dark: "#a8afbb"
  ink-faint-dark: "#8e96a3"
  rule-dark: "#23272e"
  wash-dark: "#171a1f"
  primary-dark: "#86a9ff"
  primary-deep-dark: "#a9c2ff"
  on-primary-dark: "#0e1013"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontFeature: "'ss01'"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.01em"
    fontFeature: "'ss01'"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
    fontFeature: "'ss01'"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "'ss01'"
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "'ss01', 'tnum'"
rounded:
  focus: "4px"
  control: "8px"
  media: "10px"
  avatar: "50%"
spacing:
  gutter: "clamp(1.25rem, 0.6rem + 3vw, 3rem)"
  section: "clamp(4rem, 3rem + 4vw, 7rem)"
  container: "72rem"
  label-column: "14rem"
  row-sm: "0.85rem"
  row-md: "1.25rem"
  row-lg: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 1.15rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 1.15rem"
    height: "2.75rem"
  button-quiet-hover:
    backgroundColor: "{colors.wash}"
  nav-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    size: "2.5rem"
  nav-toggle-hover:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
  link:
    textColor: "{colors.primary}"
  screenshot-frame:
    backgroundColor: "{colors.wash}"
    rounded: "{rounded.media}"
---

# Design System: Mario Mendonça Portfolio

## Overview

**Creative North Star: "The Plain Ledger"**

The page is a well-set record of work, not a pitch deck. A near-white ground, near-black ink and a single blue carry the whole interface; one grotesk (Geist) in two working weights does all hierarchy through size, weight and tracking. Real screenshots of shipped products are the only source of colour and the only imagery besides the portrait. Everything else is text, whitespace and hairlines.

Density is calm and editorial: generous section spacing, a fixed 14rem label column on the left of every content section, and rows separated by 1px rules rather than boxes. Dark mode is the same system inverted (dark ground, light ink, a lightened blue), never a different mood. Motion is small and functional: colour and border transitions at 0.15s, a slight screenshot zoom on hover, smooth anchor scrolling, all collapsed under reduced motion.

The world refuses template chrome: no eyebrows or kickers above headings, no section numbers, no stat boxes, no tinted cards around text, no scroll-reveal that hides content until it animates in.

**Key Characteristics:**
- One accent (blue) for links and the single primary action; screenshots carry all other colour.
- One family, two weights (400 / 600, with 500 for controls and small emphasis).
- Hairline rules separate rows; there are no containers around text.
- A left label column (14rem) structures every content section on desktop and stacks on mobile.
- Light and dark are the same system with swapped values.

## Colors

A cool near-monochrome: paper-white ground, graphite inks in three steps, one confident cobalt.

### Primary
- **Cobalt Link Blue** (`primary`): links, the "Email me" primary button, focus outlines, caret, text selection tint (25% mix), and project-name hover. In dark mode it lifts to **Periwinkle** (`primary-dark`) to hold contrast on the dark ground.
- **Deep Cobalt** (`primary-deep`): hover state of the primary button only. In dark mode the hover goes lighter (`primary-deep-dark`), not darker.

### Neutral
- **Paper Ground** (`ground` / `ground-dark`): the single page background; also the theme-color meta. The sticky nav uses it at 88% over a 10px blur.
- **Graphite Ink** (`ink` / `ink-dark`): names, headings, lead paragraphs, primary reading text.
- **Slate Ink** (`ink-muted` / `ink-muted-dark`): secondary prose (summaries, about body, bullets), nav links at rest, company names after a role.
- **Fog Ink** (`ink-faint` / `ink-faint-dark`): metadata only: dates, locations, tech lists, list markers, footer line.
- **Hairline** (`rule` / `rule-dark`): row dividers, the scrolled-nav bottom border, the quiet button stroke, the 1px inner outline on screenshots.
- **Wash** (`wash` / `wash-dark`): hover fill for quiet controls and the placeholder behind images while they load. Never a section background.

### Named Rules
**The One Blue Rule.** Blue means "you can act here": links and the primary button. It never decorates headings, backgrounds, icons or dividers.

**The Screenshots Carry Colour Rule.** No other hue enters the interface. Product screenshots and the portrait are the only colour on the page.

**The Inverted Twin Rule.** Dark mode re-maps the same tokens (`*-dark`); it introduces no new colours, gradients or glows.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui, -apple-system, sans-serif)
**Body Font:** Geist Variable (same stack)

**Character:** A neutral, slightly technical grotesk set tight at large sizes and relaxed at reading sizes, with stylistic set `ss01` on throughout. Hierarchy comes from size and negative tracking, not from a second family.

### Hierarchy
- **Display** (600, fluid 2.5–4.5rem, line-height 1, tracking -0.035em): the name in the hero. Only one per page.
- **Headline** (400, fluid 1.25–1.5rem, line-height 1.4, tracking -0.01em, max 30ch): the hero pitch sentence. The same size at weight 500 sets the contact email.
- **Title** (600, 1.125rem, line-height 1.35, tracking -0.01em): section labels (Work, Experience, About…), job titles, project names. Section labels are titles, not display type.
- **Body** (400, 1rem, line-height 1.65, max 62–65ch): all reading text. Lead paragraphs (first About paragraph, contact text) step up to 1.125rem in Graphite Ink.
- **Label** (400, 0.875rem, tabular numerals): dates, periods, locations, tech lists, nav links, social links, footer.

### Named Rules
**The Two-Weight Rule.** Headings use 600, text uses 400; 500 is reserved for buttons, toggles and the inline emphasis of a credential title. No light (300) or heavy (700+) weights.

**The Tabular Dates Rule.** Every date or period uses tabular numerals so dated columns align.

## Layout

A single centred column (max 72rem) with a fluid side gutter (1.25–3rem). Sections are separated by fluid top padding (4–7rem); there are no section backgrounds or bands.

- **Hero:** two columns at 7fr / 5fr (text / portrait), vertically centred, gap 2–5rem. Below 760px the portrait shrinks to a 5.5rem circle beside the name and all other hero content spans full width beneath.
- **Label column:** About, Experience, Skills, Education and Contact use a 14rem left column holding the section title (sticky at 5.5rem from the top on desktop) and a fluid content column, gap 2rem. Below 820px it stacks with a 1.25rem gap.
- **Ruled rows:** Experience, Skills, Education and the secondary projects repeat the 14rem / 1fr split inside each row: date or name on the left, content on the right, a 1px rule above every row and below the last. Row padding is 0.85rem (skills, education), 1.25rem (secondary projects) or 1.75rem (jobs). Rows collapse to one column below 560–620px.
- **Work row:** the Work section breaks the label column: its title sits above a three-up screenshot row (Zuno, Volta, Mind Eaters), dropping to two columns below 960px and one below 620px. Remaining projects (La Copa, FalaAgro) follow as full-width ruled rows in the label-column pattern.
- **Nav:** sticky, 4rem tall, brand left, section links (hidden below 700px), then language and theme toggles.
- **Reading measure:** prose caps at 62–65ch; the pitch at 30ch; contact text at 44ch.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth is expressed only by the sticky nav's translucent ground (88% over a 10px backdrop blur) and the hairline that appears under it once the page scrolls. Screenshots sit flush with a 1px inset hairline outline so white product UIs don't dissolve into the white ground.

### Named Rules
**The Flat Ledger Rule.** No shadows, glows or lifted cards. Separation is a 1px rule or whitespace.

## Shapes

Gentle, consistent rounding on the few objects that have edges; text never sits inside a shape.

- **Controls** (buttons, language and theme toggles): softly rounded corners (8px).
- **Media** (screenshots, desktop portrait): slightly softer corners (10px) with overflow clipped.
- **Mobile portrait:** a full circle.
- **Focus ring:** 2px blue outline, 3px offset, 4px corner.
- **Dividers:** straight 1px rules, full width of their column.

## Components

### Buttons
Quiet, compact and few: the hero has exactly one primary and one quiet button.
- **Shape:** softly rounded (8px), 2.75rem minimum height, 1.15rem horizontal padding, 0.5rem gap for an optional 16px stroke icon.
- **Primary:** Cobalt ground with white label (dark mode: Periwinkle ground, dark label), weight 500.
- **Hover / Focus:** primary deepens to Deep Cobalt; focus shows the global blue ring. Transitions on background and border at 0.15s.
- **Quiet:** transparent with a Hairline stroke and Graphite label; hover fills with Wash and darkens the stroke to Fog Ink.

### Links
- **Style:** Cobalt text with a 1px underline at 35% accent mix, offset 0.2em; hover brings the underline to full accent. Used for social links, email, "visit" links and the CV download.
- **Project names:** inherit ink, no underline, turn Cobalt on hover.

### Navigation
- **Style:** translucent sticky bar; brand name in 600; section links in Label size, Slate Ink, brightening to Graphite on hover. The hairline under the bar appears only after 8px of scroll.
- **Toggles:** language (EN/PT text) and theme (sun/moon stroke icon, 18px) share one 2.5rem rounded square treatment: Slate Ink at rest, Wash fill and Graphite on hover.
- **Mobile:** section links hide below 700px; brand and toggles remain.

### Screenshot Frame (signature)
The project tile is not a card: a 16:10 clipped screenshot (10px corners, Wash placeholder, 1px inset Hairline outline) followed by plain text: name and year on one baseline, a one-line summary in Graphite, a short description in Slate at Label size, and the tech list in Fog. On hover the image scales to 1.02 over 0.5s with a soft ease-out.

### Ruled Row (signature)
The recurring list unit for experience, skills, education and secondary projects: a 1px top rule, a 14rem left cell for the date or name (Label, Fog Ink, tabular), and a right cell for the content. The last row closes with a bottom rule.

## Do's and Don'ts

### Do:
- **Do** keep blue for links and the single primary action (The One Blue Rule).
- **Do** let real product screenshots be the only colour; frame them in a 16:10, 10px-cornered clip with a 1px inset hairline.
- **Do** structure content sections with the 14rem label column and 1px ruled rows.
- **Do** set every date and period in tabular numerals at Label size in Fog Ink.
- **Do** cap prose at 62–65ch and keep the pitch at 30ch.
- **Do** implement dark mode by swapping to the `*-dark` tokens only.
- **Do** keep all content visible without JavaScript and honour reduced motion.

### Don't:
- **Don't** add eyebrows, kickers or section numbers above headings.
- **Don't** add stat boxes, metric tiles or tinted cards around text.
- **Don't** use box-shadows or glows; separation is hairlines and whitespace.
- **Don't** hide content behind scroll-reveal entrance animations.
- **Don't** introduce a second typeface or a second accent hue.
- **Don't** use blue on headings, icons or dividers.
