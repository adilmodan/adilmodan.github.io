# adilmodan.github.io — Context for AI Agents

## Owner
Adil Modan — Platform Engineer, Bay Area, CA.

## Stack
- **Generator**: Jekyll (GitHub Pages native)
- **Styling**: SCSS via Jekyll built-in SASS compilation (`_sass/`)
- **JavaScript**: Vanilla ES6+, zero dependencies
- **Fonts**: Instrument Sans (body), Libre Baskerville (display serif), IBM Plex Mono (mono) — Google Fonts
- **Deployment**: GitHub Pages, auto-builds on push to `master`
- **Custom domain**: adilmodan.com (via CNAME)

## Design
Bento grid layout inspired by marco.fyi — card-based, interactive, personal.
- White background (`#FFFFFF`), dark mode support via `[data-theme="dark"]`
- 900px max-width container, 3-column CSS grid for bento cards
- All colors via CSS custom properties on `[data-theme]` attribute
- Card hover effects: `translateY(-4px)` lift + shadow increase
- Icon cards (GitHub, LinkedIn, Resume) have `scale(1.1)` on SVG hover
- Scroll-triggered fade-in animations via Intersection Observer
- Pill navigation (capsule tabs: Home, About, Projects, Contact)
  - Desktop: centered top nav
  - Mobile: fixed bottom nav with backdrop blur
- Theme toggle: fixed circle button (top-right), sun/moon SVG icons
- Theme persisted to localStorage, respects `prefers-color-scheme`

## Sections
1. **Hero** — "Adil is building Tijara" + beliefs list
2. **Bento Grid** — Mixed cards: About (wide), Now, Project (wide), GitHub, Location, Job x2, Coming Soon, Resume, LinkedIn
3. **About** — Labeled paragraphs (What I do, Where I started, etc.)
4. **Contact** — iMessage-style bubble + email/GitHub contact cards
5. **Footer** — Social links + credit

## Tone
Personal site, not a resume. Content is conversational and project-focused.
"Now" section shows what Adil is currently working on.
Experience is brief — only top 2 jobs shown as cards in bento grid.
Newsletter planned for future but not referenced on site yet.

## Content — Data-Driven
All content from YAML files in `_data/`:
- `site.yml` — bio, beliefs, about paragraphs, about_labels, now list, colophon, footer
- `experience.yml` — job history (4 roles)
- `projects.yml` — project cards (Tijara + coming soon)

## Architecture
- `index.html` — single file with all sections inline (not separate includes)
- `_layouts/default.html` — HTML shell + theme toggle button + footer
- `_includes/head.html` — meta, fonts, inline theme script (FOUC prevention)
- `_includes/scripts.html` — single JS file
- `_sass/` — 15 partials imported by `main.scss`
  - `_variables.scss` — CSS custom properties (light/dark tokens)
  - `_reset.scss` — modern reset with `prefers-reduced-motion`
  - `_typography.scss` — body/heading styles
  - `_layout.scss` — `.site` container + `.tag`
  - `_nav.scss` — pill navigation (responsive: bottom-fixed on mobile)
  - `_hero.scss` — hero section + beliefs list
  - `_projects.scss` — bento grid + all card styles + theme toggle
  - `_about.scss` — about-full section (labeled paragraphs)
  - `_contact.scss` — iMessage bubble + contact cards
  - `_animations.scss` — fade-in + hero entrance keyframes
  - `_footer.scss` — footer with mobile padding for fixed nav
- `assets/css/main.scss` — Jekyll SASS entry point
- `js/main.js` — theme toggle + scroll fade-in + active nav tracking

## Local Development
```
bundle install
bundle exec jekyll serve
```

## Deploy
```
git push origin master
```
