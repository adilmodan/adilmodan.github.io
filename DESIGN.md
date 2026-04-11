# adilmodan.com — Design System

## Philosophy
Personal site inspired by marco.fyi's bento grid approach. The design is warm, card-based, and interactive — a portfolio that feels like a product, not a resume template. Every element earns its space.

Guiding principle: **"Less, but better."** (Dieter Rams)

## Visual Identity

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#FAFAFA` | Page background — warm off-white, not sterile white |
| Card | `#FFFFFF` | Card surfaces |
| Text | `#111111` | Headings, primary text |
| Body | `#3D3D3D` | Paragraph text — softer than pure black |
| Muted | `#777777` | Labels, secondary text |
| Faint | `#AAAAAA` | Footnotes, arrows, de-emphasized elements |
| Accent | `#C0392B` | Deep red — Tijara card background, dividers, dots |
| Accent Soft | `#FDF0EE` | Light red tint for subtle accent backgrounds |
| Border | `#EEEEEE` | Card separators, subtle dividers |
| Tag BG | `#F3F3F3` | Tag and chip backgrounds |
| Terminal | `#1E1E2E` | Catppuccin Mocha base for terminal card |

No dark mode. The off-white background provides enough contrast without being harsh.

### Typography
Three font families, each with a clear role:

| Font | Style | Usage |
|------|-------|-------|
| **DM Sans** | Geometric sans-serif | Body text, nav, labels, cards — the workhorse |
| **Fraunces** | Optical-size serif | Display headings (About heading, Tijara title) — personality |
| **JetBrains Mono** | Monospace | Terminal card, tags, coordinates, screening pills — technical texture |

**Type Scale** (desktop):
- `--text-2xl`: 2rem (32px) — page headings
- `--text-xl`: 1.375rem (22px) — featured titles
- `--text-lg`: 1.1875rem (19px) — card titles
- `--text-base`: 1.0625rem (17px) — body text
- `--text-sm`: 0.9375rem (15px) — card text, descriptions
- `--text-xs`: 0.8125rem (13px) — labels, tags, footnotes

Scale reduces progressively on mobile via CSS custom property overrides at 800px, 600px, and 380px.

### Spacing
| Token | Value |
|-------|-------|
| `--space-xs` | 0.5rem (8px) |
| `--space-sm` | 0.875rem (14px) |
| `--space-md` | 1.5rem (24px) |
| `--space-lg` | 2.25rem (36px) |
| `--space-xl` | 3.5rem (56px) |

### Radius
- Cards: `20px` (desktop), scaling to `14px` on mobile
- Tags/chips: `12px`
- Pills/buttons: `100px` (fully round)
- Terminal dots: `50%`

### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| Rest | `0 1px 3px rgba(0,0,0,0.06)` | Default card shadow — barely there |
| Hover | `0 16px 48px rgba(0,0,0,0.12)` | Card hover — dramatic lift |
| Active | `0 8px 24px rgba(0,0,0,0.08)` | Card press — compressed |

Cards also have a `1px solid rgba(0,0,0,0.04)` border for subtle edge definition.

## Layout

### Bento Grid
The homepage uses a card-based bento grid inspired by marco.fyi:

```
Desktop (>800px):
┌──────────────────┬────────────┐
│   Hero (2 rows)  │   About    │
│   "Adil Modan"   │  Preview   │
│   + beliefs      ├─────┬──────┤
│                  │ Now │ Loc  │
├──────────────────┴─────┴──────┤
│         Tijara (full width)    │
├──────────┬──────────┬─────────┤
│   Job    │ Terminal │  Stack  │
├────┬─────┼──────────┴─────────┤
│ GH │ LI  │      Resume       │
└────┴─────┴────────────────────┘

Mobile (<600px): single column, all cards stack vertically
```

- Main grid: `1.2fr 0.8fr`
- Bottom row: `repeat(3, 1fr)`
- Sub-grid (Now + Location): `1fr 1fr`
- Gap: `14px` (desktop) → `10px` (mobile)
- Max width: `1380px`, centered

### Tab Navigation
Pill-shaped tab bar with 4 tabs: Home, About, Projects, Contact.
- Desktop: centered at top, floating with shadow
- Mobile (<700px): fixed bottom, `backdrop-filter: blur(16px)`, frosted glass effect
- Active tab: dark background (`#111`) with white text and subtle shadow
- Inactive: muted gray text, no background

## Card System

### Base Card
All cards share: white background, 20px radius, subtle shadow, 1px border. Clickable cards (links, tab-links) get hover lift + rotation.

### Card Variants
| Variant | Visual Character |
|---------|-----------------|
| **Hero** | Largest card, spans 2 rows. Name + beliefs list + accent divider + footnote. Dramatic entrance animation. |
| **About Preview** | Bio paragraph + 3 clickable preview items with inline SVG icons. Links to About tab. |
| **Now** | Compact list with color-coded dots. Current activities. |
| **Location** | Centered layout with pulsing accent dot, coordinates in mono. |
| **Terminal** | Catppuccin Mocha dark theme. Fake kubectl output with colored syntax. Blinking cursor. |
| **Stack** | 4x2 grid of tech icons. Grayscale by default, full color on hover. |
| **Tijara (Accent)** | Full-width. Deep red background. Screening status pills (pass/warn/fail). Tech tags in translucent white. |
| **Job** | Apple logo + date label + title + company. Minimal. |
| **Icon** | GitHub, LinkedIn, Resume. Centered SVG + sublabel. Scale + rotate on hover. |
| **Coming Soon** | Muted card with "Coming Soon" label. No link. |

### Contact Cards
- **iMessage** — Chat bubble layout with received (gray) and sent (blue #007AFF) messages. Input bar with send button. Action icons.
- **Email Preview** — Mimics email client: To field, subject line, body preview, accent border-left.
- **GitHub Preview** — Profile card with bio and "View Profile" CTA.

## Animation & Interaction

### Entrance Animations
Inspired by marco.fyi's dramatic card entrances:
- Cards start at `opacity: 0; translateY(24px) scale(0.96)`
- Hero: `translateY(32px) scale(0.92) rotate(-1deg)` — extra drama
- Accent: `translateY(32px) scale(0.9)` — bigger pop
- Triggered by IntersectionObserver (threshold 0.08, -40px root margin)
- Staggered delays per nth-child (0.07s increments)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, smooth settle

### Hover Effects
- Clickable cards: `translateY(-6px) rotate(0.3deg)` + deep shadow
- Active/press: `translateY(-2px) scale(0.99)` with 0.1s transition
- Icon cards: SVG scales to 1.2x with -3deg rotation
- Stack items: `scale(1.08)` + grayscale to color on icons
- Interest items: `translateX(4px)` slide on hover
- Arrows: `translateX(6px)` + color change to accent

### Sounds
Web Audio API synthesized sounds (no external files):
- **Tick** (1800Hz sine, 60ms) — plays on tab switch
- **Pop** (600→200Hz sweep, 80ms) — plays on card click
- Volume: 0.06–0.08 gain — barely perceptible, adds tactile feel

### Nav
- Nav pills: `scale(0.95)` on mousedown for press feedback
- Tab panels: `scale(0.98) + translateY(16px)` fade-in animation on switch

### Reduced Motion
All entrance animations and transforms are disabled when `prefers-reduced-motion: reduce` is set. Cards appear immediately with no animation.

## Responsive Breakpoints

| Breakpoint | Layout | Key Changes |
|------------|--------|-------------|
| >800px | Desktop | 2-col bento, 3-col bottom row, full spacing |
| 800px | Tablet | Equal 2-col grid, reduced type scale, tighter spacing |
| 700px | Mobile nav | Fixed bottom nav with blur backdrop |
| 600px | Mobile | Single column, compact cards, smaller text, horizontal scroll for pills, hover effects disabled |
| 380px | Small phone | Extra tight padding, smallest type, compressed nav pills |

## Design Decisions

### Why no dark mode
The off-white (#FAFAFA) is warm enough to not cause eye strain. Dark mode would require a parallel color system and testing burden for a personal site. The terminal card already provides dark contrast as a visual break.

### Why bento grid
Inspired by marco.fyi — it lets each piece of content have its own card with appropriate sizing. The hero spans 2 rows because the beliefs list needs vertical space. The Tijara card spans full width because it's the featured project. Icon cards are small because they're just links.

### Why tab navigation instead of scroll
Tabs keep each section clean and focused. Scrolling a single page with bento grids would feel like an infinite Pinterest board. Tabs give structure — you know exactly where you are.

### Why synthesized sounds
Marco uses 47 hosted MP3 files. Synthesized Web Audio is zero-dependency, ~0 bytes, instant, and doesn't require hosting audio files. Two subtle sounds (tick + pop) are enough to add tactile feel without being annoying.
