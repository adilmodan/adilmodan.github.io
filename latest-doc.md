# latest-doc — adilmodan.github.io (personal site)

_Generated 2026-08-21 from a full read of the repo._

## 1. What this repo is

Adil's **personal portfolio site** — a Jekyll build deployed to GitHub Pages with a
custom domain (`CNAME`). Remote: `github.com/adilmodan/adilmodan.github.io`.

Per `DESIGN.md`: a warm, card-based **bento portfolio** in the spirit of marco.fyi
— playful and tactile, not a resume template. Positioned **builder-first**: the
products lead, and the Apple platform-engineering role is supporting credibility.
Guiding principle is Dieter Rams' *"Less, but better."*

**Design system:** warm paper background `#FAF6F0` (never white), ink `#1A1611`,
and four accent families that colour the cards — ember (Co-Lease), blue (About,
LinkedIn), green (interests, résumé), amber (reading, Trading Bots), plus a
Catppuccin-ish terminal card. **Light theme only** — a warm dark "after-hours" mode
was prototyped and deliberately rejected.

Content is data-driven from `_data/projects.yml` and `_data/site.yml`. Each project
declares an accent, a status (`building` | `live`), tech tags, and a screenshot
rendered inside a CSS device frame on the Work tab. Co-Lease is `main: true` — the
hero.

## 2. Where we left off

Last commit **2026-04-14** ("Add projects"); files touched through 2026-06-11. The
working tree has **substantial uncommitted work**:

- Modified: `_config.yml`, `_data/projects.yml`, `_data/site.yml`, `DESIGN.md`,
  `_includes/head.html`, `_includes/scripts.html`, `_sass/main.scss`,
  `assets/css/main.css`, `index.html`, `js/main.js`, `preview.html`
- New, untracked: `_includes/card-tags.html`, `_includes/frame-bar.html`,
  `assets/work/`, and two new screenshots —
  `assets/images/co-lease-home-page.png`, `trading-bot-engine-home-page.png`
- Deleted: `assets/images/trader-bot-v1.png`, `trader-bot-v2.png`, `image.png`,
  and a stray Syncthing `.tmp` file

Read together, that's a **half-finished redesign**: the two old trader-bot
screenshots were swapped for one consolidated "trading bot engine" shot (matching
the modan-trader-bots consolidation), and two new includes (`card-tags`,
`frame-bar`) were added for the device-frame treatment. It was never committed.

Project data currently reflects:
- **Co-Lease** — `status: building`, `url: ""` (not deployed), `github: ""` (repo
  not public)
- **Tijara** — `status: live`, pointing at `tijara-five.vercel.app` and the public
  GitHub repo

## 3. What's remaining

1. **Commit and push the redesign.** Four months of uncommitted layout, styling,
   and asset changes sitting in a working tree that also has Syncthing writing to
   it is the main risk here.
2. Confirm the deleted trader-bot screenshots are intentional and that nothing in
   `_data/projects.yml` still references them — a broken image on the live site is
   the likely failure mode.
3. **Update the project data to match reality:**
   - The trading bots entry should describe **modan-trader-bots** (four strategies,
     live paper trading) rather than the superseded v1/v2.
   - Co-Lease stays `building` — accurate, it isn't deployed.
   - Consider adding **Kestrel** — a complete MVP that isn't listed at all.
4. Decide on Co-Lease's `github` field: the repo isn't public, so either make it
   public or leave the link empty rather than dead.
5. Clean up the four `Screenshot 2026-04-1x ....png` files at the repo root —
   they're loose captures, not site assets.
6. Verify the site actually builds (`bundle exec jekyll serve`) after the `_sass`
   and `_includes` changes before pushing.
