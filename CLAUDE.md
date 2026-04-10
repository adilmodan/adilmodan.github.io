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
Clean, content-forward single-page layout inspired by personal sites like marco.fyi.
- White background (`#FFFFFF`), dark mode support (`#161616`)
- Narrow 640px content column, generous line height
- All colors via CSS custom properties on `[data-theme]` attribute
- Scroll-triggered fade-in animations via Intersection Observer
- Section dividers with `<hr>` elements
- No fixed nav — inline anchor links in page header
- Theme toggle in page header (sun/moon SVG icons)
- Theme persisted to localStorage, respects `prefers-color-scheme`

## Tone
Personal site, not a resume. Content is conversational and project-focused.
"Now" section shows what Adil is currently working on.
Experience section is brief — one-line descriptions.
Newsletter planned for future but not referenced on site yet.

## Content — Data-Driven
All content from YAML files in `_data/`:
- `site.yml` — bio, about paragraphs, now list, colophon, footer
- `experience.yml` — job history
- `projects.yml` — project cards

## Architecture
- `index.html` — single file with all sections inline (not separate includes)
- `_layouts/default.html` — HTML shell + footer
- `_includes/head.html` — meta, fonts, theme script
- `_includes/scripts.html` — single JS file
- `_sass/` — 14 partials imported by `main.scss`
- `assets/css/main.scss` — Jekyll SASS entry point
- `js/main.js` — theme toggle + scroll fade-in

## Local Development
```
bundle install
bundle exec jekyll serve
```

## Deploy
```
git push origin master
```
