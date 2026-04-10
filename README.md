# adilmodan.github.io

Personal portfolio website for Adil Modan.

## Stack

- Jekyll (static site generator)
- SCSS with CSS Custom Properties
- Vanilla JavaScript (ES6+)
- GitHub Pages

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deploy

Push to `master` — GitHub Pages auto-builds.

## Content

All content is data-driven from YAML files in `_data/`:

- `site.yml` — hero, about, footer text
- `skills.yml` — skill categories
- `experience.yml` — job history
- `projects.yml` — project cards
