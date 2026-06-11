# adilmodan.com — Design System

## Philosophy
A warm, card-based **bento** portfolio in the spirit of marco.fyi — playful, tactile, and human, not a resume template. Positioned **builder-first**: the products lead; the Apple platform-engineering role is supporting credibility.

Guiding principle: **"Less, but better."** (Dieter Rams) — restraint, with deliberate pops of color.

## Visual Identity

### Color Palette
Warm paper base, ink text, and four accent families that color the cards (the "pops of color").

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#FAF6F0` | Page background — warm paper |
| `--card` | `#FFFFFF` | Default card surface |
| `--ink` | `#1A1611` | Headings, primary text |
| `--body` | `#4C463E` | Paragraph text |
| `--muted` | `#8B8479` | Labels, secondary text |
| `--faint` | `#B6AFA3` | Arrows, footnotes |
| `--accent` | `#C0392B` | Hero rule, footnote mark |
| `--ember` / `--ember-deep` | `#B85042` / `#8E3A2F` | **Co-Lease** brand gradient (main project) |
| `--blue` / `--blue-bg` | `#2563EB` / `#EAF1FC` | Blue cards (About, location, LinkedIn) |
| `--green` / `--green-bg` | `#4F7A35` / `#EAF3E1` | Green cards (Interests, résumé) |
| `--amber` / `--amber-bg` | `#BE7C1E` / `#FAF0D6` | Amber cards (reading, Trading Bots) |
| `--up` / `--warn` / `--down` | `#2E9E6B` / `#D99A3B` / `#C0392B` | Status (live dot, screening pills) |
| `--term` | `#1E1B2E` | Catppuccin-ish terminal card |

**Light theme only.** A warm dark "after-hours" mode was prototyped and rejected — the warm paper is enough.

### Typography
| Font | Role |
|------|------|
| **DM Sans** | Body, nav, labels — the workhorse |
| **Fraunces** | Display serif — hero name, section headings, Co-Lease wordmark (700 *italic*) |
| **JetBrains Mono** | Labels, tags, coordinates, terminal, badges — technical texture |

## Layout

### Tab Navigation
Pill-nav tabs: **Home · About · Work · Contact** (not page routes). `switchTab(name)` toggles `.tab-panel--active` and re-runs the reveal observer. Desktop: floating top pill. Mobile (<600px): fixed bottom bar with blur.

### Home bento
```
┌────────────────┬──────────────┐
│  Hero (2 rows) │  About (blue)│
│  name+beliefs  ├──────┬───────┤
│                │ Now  │ Loc   │
├────────────────┴──────┴───────┤
│ Selected work:                 │
│  [ Co-Lease  ] [ Tijara      ] │  ← Co-Lease = larger ember "main"
│  [  (ember)  ] [ Trading Bots] │     card; others are small teasers
├──────────┬──────────┬──────────┤
│   Job    │ Terminal │  Stack   │
├──────────┼──────────┼──────────┤
│  GitHub  │ LinkedIn │  Résumé  │
└──────────┴──────────┴──────────┘
```
Project teasers on Home carry **no screenshots** — just name, one-liner, tags. The screenshots live on the **Work** tab.

### Work tab
Featured **main project** (Co-Lease) in a large two-column card (copy + device frame), then a 2-up grid of the remaining projects. Each screenshot sits in a **CSS device frame** (`.frame`: white bar + red/yellow/green traffic-light dots + faux URL).

### About tab
Asymmetric bento: a large "What I'm about." card (four color-labeled sections) beside a column of **Interests** (green), **reading shelf** (amber), and a **"Less, but better."** quote (ember).

## Card System
Base `.card`: white, 20px radius, soft shadow, hairline border. Clickable cards (`a`/`button`) lift on hover.

| Variant | Look |
|---------|------|
| `.card--blue/green/amber` | Soft tinted fill + matching label/arrow color |
| `.card--ember` | Co-Lease brand gradient, white text (the main-project card + quote) |
| `.hero` | Fraunces name, accent rule, beliefs list, footnote |
| `.loc` | Blue gradient location tile |
| `.term` | Dark terminal with fake `kubectl` output + blinking cursor |
| `.pjt` / `.pjt-main` | Home project teasers (small / large ember main) |
| `.work-feat` / `.work-card` | Work-tab cards holding device frames |
| `.ico` | Square social/link icon cards |

### Device frame (`.frame`)
Reuses the terminal's traffic-light motif as browser chrome. Holds either a real `<img>` screenshot or a CSS mock (`.m-co` for Co-Lease). 16:10 aspect.

## Motion & Interaction
- **Entrance:** cards start `opacity:0; translateY(20px) scale(.98)` → `.is-visible` via IntersectionObserver. Hero uses `scale(.95)`. Panel switches fade+slide.
- **Hover:** cards lift `translateY(-6px) rotate(.25deg)`; arrows slide; device frames lift; stack icons go grayscale→color; live dots pulse.
- **Sounds:** Web Audio tick (tab switch) + pop (card click) — synthesized, zero files, suppressed under reduced-motion.
- **Reduced motion:** all animation/transition disabled; cards shown immediately.

## Screenshots
Work-tab visuals are captured for **public URLs** with headless Chrome (Tijara, live → `assets/work/tijara.png`). Co-Lease uses a CSS mock until deployed; Trading Bots reuses `assets/images/trader-bot-v1.png`. See CLAUDE.md → "Project Screenshots".

## Responsive
| Breakpoint | Changes |
|------------|---------|
| >880px | Full 2-col bento, 3-col bottom rows |
| ≤880px | Bento → 1 col; Work/rows → 2 col; main project stops spanning |
| ≤600px | Single column; nav moves to fixed bottom; tighter spacing |

## Key Decisions
- **Why bento + tabs** — keeps the marco.fyi warmth; tabs keep each surface focused (no infinite scroll).
- **Why Co-Lease is the main project** — biggest product ambition and brand; it anchors Home and Work in its ember identity.
- **Why screenshots only on Work** — Home stays light and scannable; the Work tab is where the device-framed visuals get room to breathe.
- **Why light only** — the warm paper avoids eye strain without a parallel dark system to maintain.
