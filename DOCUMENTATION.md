# DOCUMENTATION.md — adilmodan.github.io

Technical reference for the repo. Companion to `DESIGN.md` (visual/brand system) and
`.claude/CLAUDE.md` (agent operating context) — this file focuses on architecture,
build mechanics, and the protocol for agents making changes here.

---

## 1. Tech Stack & Core Dependencies

- **Generator**: Jekyll, via the `github-pages` gem (pins Jekyll + plugin versions to
  whatever GitHub Pages' build image supports). Declared in `Gemfile`:
  ```ruby
  source "https://rubygems.org"
  gem "github-pages", group: :jekyll_plugins
  gem "jekyll-sitemap"
  ```
  No `Gemfile.lock` is committed (it's in the Jekyll `exclude:` list in `_config.yml`
  and not tracked by git) — GitHub Pages resolves versions at build time.
- **Ruby**: local interpreter observed is Ruby 2.6.10 / Bundler 1.17.2 (`ruby -v`,
  `bundle -v`). This is old relative to current GitHub Pages Ruby (3.x) — if `bundle
  install` fails locally with a version/native-extension error, that's the likely
  cause; it does not affect the GitHub Pages build itself, which runs its own image.
- **Markdown engine**: `kramdown` (set via `markdown: kramdown` in `_config.yml`).
- **Jekyll plugin**: `jekyll-sitemap` (listed under `plugins:` in `_config.yml`) —
  auto-generates `/sitemap.xml` from `sitemap.xml`'s Liquid front matter
  (`layout: null`) at build time.
- **Styling**: SCSS authored in `_sass/main.scss` (single file, ~323 lines), but it is
  **not** built by Jekyll's SCSS converter. It is pre-compiled by hand via the `sass`
  npm CLI and the *output* is committed as a static asset:
  ```bash
  npx sass _sass/main.scss assets/css/main.css --style=compressed --no-source-map
  ```
  `assets/css/main.css` (16,347 bytes, minified, single line) is what `_includes/head.html`
  actually links (`<link rel="stylesheet" href="/assets/css/main.css">`). This means
  `npx sass` (Node/npm) is a **build-time dependency for the author**, even though the
  live site has zero JS/npm runtime dependencies and Jekyll never touches `_sass/`.
- **JavaScript**: `js/main.js` — vanilla ES6+, zero npm dependencies, zero external
  `<script>` libraries. Implements tab switching, `IntersectionObserver` scroll
  reveals, and synthesized Web Audio API click/tap sounds.
- **Fonts**: Google Fonts, loaded via `<link>` in `_includes/head.html` — DM Sans
  (body/UI), Fraunces (display serif), JetBrains Mono (mono/technical texture).
- **Icons**: inline SVGs (hand-authored, Lucide-style) for nav/social icons, plus the
  Simple Icons CDN (`https://cdn.simpleicons.org/{icon}/{color}`) for the tech-stack
  logos rendered from `_data/site.yml`'s `stack:` list.
- **Hosting**: GitHub Pages, auto-build-and-deploy on push to `master` (no custom CI
  config, no GitHub Actions workflow in this repo — GitHub Pages' native Jekyll build
  handles it).
- **Custom domain**: `adilmodan.com`, via the one-line `CNAME` file at repo root.

## 2. Critical Entry Points

| Path | Role |
|---|---|
| `_config.yml` | Jekyll site config: `title`, `tagline`, `description`, `url`, `baseurl`, `resume` path, `social:` list (GitHub/LinkedIn/Email), `markdown: kramdown`, `plugins: [jekyll-sitemap]`, `exclude:` (build-time ignore list), `keep_files:` (`.git`, `.gitignore`). |
| `index.html` | The entire site. Single-page app pattern: one Jekyll page with front matter `layout: default`, containing four `<div class="tab-panel">` blocks (Home/About/Work/Contact) toggled client-side by `js/main.js`'s `switchTab()` — there is no server-side routing or additional page templates. |
| `_layouts/default.html` | The only layout in the repo. HTML shell: `<head>` via `{% include head.html %}`, `{{ content }}` (renders `index.html` or `404.html`'s body), a `<footer>` built from `site.social` + `site.resume`, then `{% include scripts.html %}`. |
| `_includes/head.html` | `<head>` partial: meta tags, OG tags, Google Fonts `<link>`s, and the `main.css` stylesheet link. Used by every page via `default.html`. |
| `_includes/scripts.html` | One line: `<script src="/js/main.js" defer></script>`. Used by every page via `default.html`. |
| `_includes/card-tags.html` | Partial for rendering a project's tech-tag pills. Takes `include.tags` (an array). Used repeatedly inside `index.html`'s Home and Work panels for each project's `tech[]` from `_data/projects.yml`. |
| `_includes/frame-bar.html` | Partial for the CSS "device frame" traffic-light bar + fake URL. Takes `include.url`. Used inside `index.html`'s Work tab for both the featured project and each `work-card`. |
| `404.html` | Standalone Jekyll page (`layout: default`), minimal not-found content. |
| `sitemap.xml` | Jekyll-templated (`layout: null`), single `<url>` entry for `/`; also duplicated by the `jekyll-sitemap` plugin's own generated sitemap — see § 3 caveat. |
| `preview.html` | **Not part of the deployed site** — excluded via `_config.yml`'s `exclude:` list. A static, hand-mirrored throwaway copy of `index.html` using relative asset paths, for opening directly via `file://` to visually review changes before pushing (per its own header comment). Must be kept in sync manually if `index.html` structure changes. |

## 3. State Management & Data Flow

This is a fully static site — there is no client or server "state" in the app sense.
"State" here means **where content lives and how it flows into the rendered HTML**.

- **All visible copy is externalized to `_data/`** (YAML). Per `.claude/CLAUDE.md`'s
  own stated constraint: *"All content from YAML — never hardcode text in HTML
  templates."* Three files:
  - `_data/site.yml` — bio, hero `beliefs[]`, `hero_footnote`, `about_labels[]` +
    `about[]` (index-aligned pairs), `now[]` (label+color), `stack[]` (name/icon
    slug/color for Simple Icons), `interests[]`, `reading[]` (title/author),
    `quote` (text/author), `contact` (intro/reply/email), `footer.credit`.
  - `_data/experience.yml` — array of 4 job objects (`company`, `url`, `time`,
    `position`); `index.html` only reads `{% assign job = site.data.experience | first %}`
    — i.e. only the **most recent** job (Apple) is rendered, on the Home "bottom row."
    The other 3 entries exist in data but are currently unused by any template.
  - `_data/projects.yml` — array of project objects: `name`, `main` (bool — exactly
    one should be `true`; it's the hero/featured project), `status` (`building` |
    `live`), `label`, `accent` (`ember`|`blue`|`amber`|`green` → CSS card color
    variant), `tagline`, `short` (Home teaser copy), `description` (Work tab copy),
    `tech[]`, `url`, `github`, `frame_url`, and either `screenshot` (image path) or
    an implied CSS mock. Currently 3 entries: Co-Lease (`main: true`, building),
    Tijara (live), Trading Bots and Analysis (live).
- **Build-time data flow (Jekyll)**: at build, Jekyll reads every `.yml`/`.yaml` file
  under `_data/` into the `site.data` Liquid namespace (e.g. `site.data.projects`,
  `site.data.site.beliefs`). `index.html` and `_layouts/default.html` consume this via
  Liquid `{% for %}` / `{{ }}` — e.g. `{% for belief in site.data.site.beliefs %}` in
  the hero, `{% assign main = site.data.projects | where: "main", true | first %}` to
  pick the featured project. `_includes/card-tags.html` and `frame-bar.html` receive
  per-call parameters (`include.tags`, `include.url`) rather than reading `site.data`
  directly, so they're reusable across both the Home and Work panels.
- **Render pipeline**: `_layouts/*` + `_includes/*` + `_data/*` + page front matter →
  Liquid template evaluation → kramdown (for any Markdown content — none of the
  current `.html` pages actually rely on Markdown conversion; only stray root-level
  `.md` files like `interview-roadmap.md` would be run through kramdown, and only if
  they carry front matter, which they don't, so Jekyll copies them through as static
  files, unconverted) → static HTML/CSS/JS emitted to `_site/` (gitignored, not
  committed) → GitHub Pages serves `_site/` as the live site.
- **CSS is out-of-band**: `_sass/main.scss` is *not* part of this data flow — Jekyll's
  built-in SCSS/Sass converter is deliberately bypassed (per `.claude/CLAUDE.md`
  constraint #3: "No Jekyll SCSS"). The author runs `npx sass` manually, and the
  compiled `assets/css/main.css` is committed and served as a plain static asset like
  any image.
- **Client-side "state"**: purely UI state in `js/main.js` — which `.tab-panel` has
  `--active`, which `.card`s have been revealed (`.is-visible`, tracked via a
  `WeakSet`-like one-shot `IntersectionObserver.unobserve`), and nav press styling.
  Nothing persists across page loads (no `localStorage`/cookies/query params read).
- **Sitemap caveat**: both a hand-written `sitemap.xml` (Liquid template, single URL)
  and the `jekyll-sitemap` plugin (which auto-generates its own `sitemap.xml` from all
  site pages) are present simultaneously — the plugin's output will overwrite the
  hand-written one at build time since they share the output path. Worth flagging if
  sitemap content ever looks wrong; the hand-written file is effectively dead weight.

## 4. Directory Map

```
_layouts/
  default.html        Only layout in the repo. HTML shell + footer + script include.
_includes/
  head.html            <head> partial: meta/OG tags, Google Fonts, main.css link.
  scripts.html         Single <script src="/js/main.js" defer> tag.
  card-tags.html       Tech-tag pill list partial, parameterized by include.tags.
  frame-bar.html       Device-frame traffic-light bar + fake URL, param include.url.
_sass/
  main.scss            ALL styles, single file (~323 lines), 10 numbered sections:
                        vars -> reset/layout -> nav -> grids -> card base ->
                        color variants -> components -> footer -> mobile breakpoints
                        -> entrance animations. Source of truth for assets/css/main.css.
_data/
  site.yml             All non-project, non-experience copy (bio, beliefs, about,
                        now, stack, interests, reading, quote, contact, footer).
  experience.yml       4 job entries; only the first (most recent) is rendered.
  projects.yml         3 project entries (Co-Lease/main, Tijara, Trading Bots).
js/
  main.js              Vanilla JS: switchTab(), IntersectionObserver reveals,
                        Web Audio tick/pop sounds, nav press effect.
assets/
  css/main.css         Pre-compiled, minified output of _sass/main.scss. Committed.
  images/              co-lease-home-page.png, trading-bot-engine-home-page.png
                        (Work-tab screenshots for Co-Lease and Trading Bots).
  work/                tijara.png (real headless-Chrome capture of the live Tijara site).
```

Root-level files of note not covered above:
- `resume.pdf` — downloadable resume, linked from `site.resume` (`/resume.pdf`) in
  `_config.yml`, used in the footer and the Home social row.
- `robots.txt`, `sitemap.xml` — SEO plumbing (see § 3 sitemap caveat).
- `DESIGN.md` — the design/brand system spec (colors, typography, layout, motion).
  Excluded from the Jekyll build via `_config.yml`'s `exclude:` list.
- `.claude/CLAUDE.md` — AI-agent operating context for this repo (stack summary,
  file structure, constraints). Excluded from the Jekyll build both by `_config.yml`
  (`exclude: [CLAUDE.md]`) and by `.gitignore` (`.claude/`), so `.claude/` itself
  isn't even version-controlled.
- **Untracked / likely stray files** (present in the working tree, `git status`
  shows them as `??`, not referenced by any template or `_config.yml`): `design-brand.md`, `latest-doc.md`, `interview-roadmap.md`. None are linked from `index.html`, `_layouts/`, or `_includes/`, and none are in `_config.yml`'s `exclude:` list, so if committed as-is they would be copied verbatim into the built site output as unstyled loose `.md` files reachable by direct URL (e.g. `/interview-roadmap.md`). `linkedin-rewrite.md` is the one exception in this group — it **is** already tracked/committed in git, but is likewise not referenced by any template.
- `preview.html` — see § 2. Explicitly excluded from the build.
- Four root-level `Screenshot 2026-04-*.png` files — gitignored (`Screenshot*` in
  `.gitignore`) and Jekyll-excluded (`Screenshot*` in `_config.yml`); safe to delete,
  they are ad hoc local captures, not site assets.

## 5. Local Setup Commands

```bash
# Install Ruby gems (Jekyll + github-pages + jekyll-sitemap)
bundle install

# Serve locally with live rebuild at http://localhost:4000
bundle exec jekyll serve

# One-time or after any _sass/main.scss edit — Jekyll does NOT compile SCSS here
npx sass _sass/main.scss assets/css/main.css --style=compressed --no-source-map
```

There is **no lint script, no `package.json`, no `Rakefile`/`Makefile`** in this
repo (verified — none present at root). The only non-Ruby tooling dependency is the
`sass` npm CLI, invoked ad hoc via `npx sass` and not declared in any manifest.
Verify locally installed Ruby/Bundler versions before troubleshooting `bundle
install` failures — the environment's Ruby (2.6.10 / Bundler 1.17.2) is older than
current GitHub Pages build images, which can cause native-extension or dependency
resolution errors that do not reproduce on the actual GitHub Pages deploy.

## 6. Fan-Out Agent Blueprint (Principal Engineer Protocol)

### Context Isolation
Confine all reads, greps, and edits to
`/Users/adilmodan/Personal/projects/adilmodan.github.io`. Do not read or reference
sibling directories under `/Users/adilmodan/Personal/projects/` — this repo has no
dependency on, and no shared tooling with, any neighboring project.

### Code Style & Guardrails
- **Liquid templating**: match the existing terse, single-line-per-element style in
  `index.html` — e.g. `{% for p in site.data.projects %}{% unless p.main %}...{% endunless %}{% endfor %}`
  on one logical block, `{% assign %}` for derived values (see the `main` project
  lookup at the top of `index.html`). Prefer `_includes/` partials with `include.*`
  parameters (as `card-tags.html` and `frame-bar.html` already do) over inlining
  repeated markup.
- **SCSS / `_sass` conventions**: per `.claude/CLAUDE.md` constraint #7, **do not
  split `_sass/main.scss` into partials** — everything lives in this single file, in
  its existing 10 numbered sections (see § 4 above). Use the existing CSS custom
  property tokens (`--bg`, `--ink`, `--ember`, `--blue`, etc., defined in `:root` at
  the top of the file) rather than introducing new hardcoded hex values. Class naming
  is BEM-ish with `__` for elements and `--` for variants (e.g. `.card__label`,
  `.card--blue`, `.pjt-main__t`). After any `_sass/main.scss` edit, always recompile
  with the exact `npx sass ...` command in § 5 and commit the regenerated
  `assets/css/main.css` alongside the source change — the compiled file is
  hand-maintained, not CI-generated.
- **Data/collections naming**: this repo has no Jekyll *collections* (no
  `_posts/`, no custom collection directories) — content lives entirely in `_data/`
  YAML arrays (`experience.yml`, `projects.yml`) consumed by `index.html`, not as
  individual Jekyll documents. New "repeatable" content (e.g. a 4th project) should
  be added as a new array entry in the relevant `_data/*.yml` file, matching the
  exact key schema of existing entries (see § 3) — never as a new template file.
- **No JS libraries, no dark mode, no hardcoded copy in HTML** — these are explicit,
  owner-stated constraints in `.claude/CLAUDE.md`; treat them as hard guardrails, not
  suggestions.

### Proactive Refactoring & File Cleanup
Authorized, within this repo only, to:
- Delete the four stray root-level `Screenshot 2026-04-*.png` files (already
  gitignored/Jekyll-excluded; purely local scratch captures).
- Investigate and, if confirmed truly unused, remove `interview-roadmap.md`,
  `latest-doc.md`, `design-brand.md` (untracked) and `linkedin-rewrite.md` (tracked)
  — none are referenced by any template, nav item, or `_config.yml` entry as of this
  writing (see § 4). Confirm with a fresh `grep -rn` across `*.html`/`_data`/`_sass`/`js`
  before deleting a tracked file like `linkedin-rewrite.md`, since removing tracked
  content is a more visible change than removing untracked scratch files.
- Resolve the duplicate-sitemap issue in § 3 (hand-written `sitemap.xml` vs.
  `jekyll-sitemap` plugin output) if it's actually causing wrong sitemap content —
  otherwise leave it, since the plugin output silently wins already.
- Split an `_includes/` partial further if it grows beyond a single clear
  responsibility (the existing ones — `card-tags.html`, `frame-bar.html` — are each
  one line; keep that granularity as a model, don't prematurely consolidate them).
- Fix formatting drift in `index.html`'s Liquid blocks to match the terse, one-line
  style already established, within the scope of whatever feature branch is active.

### Change Documentation Protocol
Before marking any task complete, append a dated entry to `CHANGELOG.md` at repo
root (create the file if it does not yet exist) describing what changed and why.
Do not create or modify `CHANGELOG.md` as part of writing this DOCUMENTATION.md —
this protocol applies to future feature/fix work in this repo, not to this
documentation pass itself.

### Definition of Done
1. Run `bundle exec jekyll build` locally and confirm it completes without errors or
   Liquid/YAML warnings.
2. Manually open the built `_site/index.html` (or run `bundle exec jekyll serve` and
   load `http://localhost:4000`) and confirm all four tabs (Home/About/Work/Contact)
   render, project data from `_data/projects.yml` appears correctly, and — if
   `_sass/main.scss` was touched — that `assets/css/main.css` was regenerated via the
   exact `npx sass` command in § 5 and the visual result matches expectations.
3. Only then append the `CHANGELOG.md` entry and consider the task complete.
