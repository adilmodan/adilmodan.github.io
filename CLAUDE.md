# adilmodan.github.io — Context for AI Agents

## Owner
Adil Modan — Platform Engineer at Apple, Bay Area, CA.

## Stack
- **Generator**: Jekyll (GitHub Pages native)
- **Styling**: SCSS via Jekyll built-in SASS compilation (`_sass/` directory)
- **JavaScript**: Vanilla ES6+, zero dependencies (~50 lines in `js/main.js`)
- **Fonts**: Libre Baskerville (display serif), Instrument Sans (UI), IBM Plex Mono (mono) — all Google Fonts
- **Deployment**: GitHub Pages, auto-builds on push to `master`
- **Custom domain**: adilmodan.com (via CNAME)

## Design System — "Structural"
Warm, architectural aesthetic. Distinctive burnt copper/amber accent palette (NOT tech-blue).
- Light: near-white `#FAFAF8`, copper accent `#B85C38`
- Dark: warm black `#111110`, amber accent `#D4956A`
- All colors via CSS custom properties on `[data-theme]` attribute on `<html>`
- Section labels use `// 01 about` code-comment style in mono font
- Noise texture overlay via CSS SVG filter
- Fluid typography with `clamp()`, minimal breakpoints

## Content Updates
All content is data-driven from YAML files — never hardcode text in templates:
- `_data/site.yml` — hero text, about paragraphs, footer credit
- `_data/skills.yml` — skill categories (array of {label, items})
- `_data/experience.yml` — job history (array of {company, url, time, position, description})
- `_data/projects.yml` — project cards (array of {name, description, url, github, tech, featured, status})

## Key Files
- `_config.yml` — site config, social links, SASS config
- `_layouts/default.html` — single layout, `data-theme` on `<html>`
- `_includes/` — nav, hero, about, experience, skills, projects, footer, head, scripts
- `_sass/_variables.scss` — all design tokens (CSS custom properties)
- `_sass/main.scss` — import manifest for all partials
- `assets/css/main.scss` — Jekyll SASS entry point (has front matter)
- `js/main.js` — theme toggle, scroll reveal, nav scroll state

## Local Development
```
bundle exec jekyll serve
```

## Deploy
```
git push origin master
```
GitHub Pages auto-builds Jekyll.

## Tone
This is a personal site, not a resume. Content is personal and project-focused.
The about section talks about interests and what Adil builds, not job metrics.
Experience section is kept brief — one-line descriptions, no bullet points.
Projects section is prominent (second section after about).

## Future Plans
- Newsletter section (planned, not yet implemented)
- More project cards as they ship
- Semantic HTML5, BEM-style CSS class naming
- CSS custom properties for all colors (never hardcode)
- SCSS partials scoped per section
- Data-driven templates via Liquid + YAML
- No JavaScript libraries — vanilla ES6+ only
- `prefers-reduced-motion` respected in all animations
