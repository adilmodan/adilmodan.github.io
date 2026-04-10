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
- White background (`#FFFFFF`), no dark mode
- 900px max-width container, 3-column CSS grid for bento cards
- All colors via CSS custom properties
- Card hover effects: `translateY(-4px)` lift + shadow increase
- Icon cards (GitHub, LinkedIn, Resume) have `scale(1.1)` on SVG hover
- Scroll-triggered fade-in animations via Intersection Observer
- **Tab-based navigation** (pill nav): Home, About, Projects, Contact
  - Tabs show/hide content panels (not anchor scroll)
  - Desktop: centered top nav
  - Mobile: fixed bottom nav with backdrop blur
- About card in bento grid links to About tab via `data-tab-link`

## Sections (Tabs)
1. **Home** — Hero ("Adil is building Tijara" + beliefs list) + Bento grid (About, Now, Tijara, GitHub, Location, Job x2, Coming Soon, Resume, LinkedIn)
2. **About** — Labeled paragraphs (What I do, Where I started, What I'm building, Outside of work)
3. **Projects** — Tijara card (featured) + Coming Soon card
4. **Contact** — iMessage-style bubble + Email/GitHub contact cards

Footer appears on all tabs.

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
- `index.html` — tab panels: home (hero+bento), about, projects, contact
- `_layouts/default.html` — HTML shell + footer
- `_includes/head.html` — meta, Google Fonts
- `_includes/scripts.html` — single JS file
- `_sass/` — 15 partials imported by `main.scss`
  - `_variables.scss` — CSS custom properties (light only)
  - `_reset.scss` — modern reset with `prefers-reduced-motion`
  - `_typography.scss` — body/heading styles
  - `_layout.scss` — `.site` container + `.tag` + `.tab-panel`
  - `_nav.scss` — pill navigation (responsive: bottom-fixed on mobile)
  - `_hero.scss` — hero section + beliefs list
  - `_projects.scss` — bento grid + all card styles
  - `_about.scss` — about-full section (labeled paragraphs)
  - `_contact.scss` — iMessage bubble + contact cards
  - `_animations.scss` — fade-in + hero entrance keyframes
  - `_footer.scss` — footer with mobile padding for fixed nav
- `assets/css/main.scss` — Jekyll SASS entry point
- `js/main.js` — tab switching + scroll fade-in

## Local Development
```
bundle install
bundle exec jekyll serve
```

## Deploy
```
git push origin master
```
