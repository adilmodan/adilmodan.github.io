# Design & Brand Identity — Personal Portfolio (adilmodan.github.io)

_Generated 2026-08-21. Companion to `DESIGN.md`, which remains the working spec._

---

## 1. The one-line identity

**Warm paper, bento cards, and deliberate pops of colour** — a portfolio in the
spirit of marco.fyi: playful, tactile, and human, *not* a resume template.

Guiding principle, stated in `DESIGN.md`: **"Less, but better."** (Dieter Rams).
Restraint, with intentional colour.

**Positioning:** builder-first. The products lead; the Apple platform-engineering
role is supporting credibility, not the headline.

---

## 2. Colour

Warm paper base, ink text, and four accent families that colour the cards.

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#FAF6F0` | Page background — **warm paper, never white** |
| `--card` | `#FFFFFF` | Default card surface |
| `--ink` | `#1A1611` | Headings, primary text |
| `--body` | `#4C463E` | Paragraph text |
| `--muted` | `#8B8479` | Labels, secondary text |
| `--faint` | `#B6AFA3` | Arrows, footnotes |
| `--accent` | `#C0392B` | Hero rule, footnote mark |
| `--ember` / `--ember-deep` | `#B85042` / `#8E3A2F` | Co-Lease brand gradient |
| `--blue` / `--blue-bg` | `#2563EB` / `#EAF1FC` | About, location, LinkedIn |
| `--green` / `--green-bg` | `#4F7A35` / `#EAF3E1` | Interests, résumé |
| `--amber` / `--amber-bg` | `#BE7C1E` / `#FAF0D6` | Reading shelf, Trading Bots |
| `--up` / `--warn` / `--down` | `#2E9E6B` / `#D99A3B` / `#C0392B` | Status: live dot, screening pills |
| `--term` | `#1E1B2E` | Catppuccin-ish terminal card |

**The system:** each accent family is a *pair* — a saturated ink colour for the
label and arrow, and a desaturated tint for the card fill. That's what lets four
colours coexist on one page without noise.

**Light theme only.** A warm dark "after-hours" mode was prototyped and
**rejected** — the warm paper is enough, and a parallel dark system is maintenance
that buys nothing here.

**Note the deliberate borrowing:** `--ember` `#B85042` is exactly Co-Lease's
primary. The portfolio adopts the product's brand colour for the card that
represents it, so the hero project carries its own identity into the portfolio
rather than being flattened into a generic accent.

---

## 3. Typography

| Font | Role |
|---|---|
| **DM Sans** | Body, nav, labels — the workhorse |
| **Fraunces** | Display serif — hero name, section headings, Co-Lease wordmark (700 *italic*) |
| **JetBrains Mono** | Labels, tags, coordinates, terminal, badges — technical texture |

Three fonts doing three distinct jobs: DM Sans disappears, Fraunces carries
personality, and JetBrains Mono is the "engineer" signal — it appears on tags and
coordinates specifically to add technical texture to a warm, soft layout.

---

## 4. Layout — the bento

**Tab navigation, not routes:** Home · About · Work · Contact. `switchTab(name)`
toggles `.tab-panel--active` and re-runs the reveal observer. Desktop gets a
floating top pill; below 600px it becomes a fixed bottom bar with blur.

**Home bento:**
```
┌────────────────┬──────────────┐
│  Hero (2 rows) │  About (blue)│
│  name+beliefs  ├──────┬───────┤
│                │ Now  │ Loc   │
├────────────────┴──────┴───────┤
│ Selected work:                 │
│  [ Co-Lease  ] [ Tijara      ] │  ← Co-Lease = larger ember "main" card
│  [  (ember)  ] [ Trading Bots] │
├──────────┬──────────┬──────────┤
│   Job    │ Terminal │  Stack   │
├──────────┼──────────┼──────────┤
│  GitHub  │ LinkedIn │  Résumé  │
└──────────┴──────────┴──────────┘
```

**A rule worth keeping:** Home project teasers carry **no screenshots** — name,
one-liner, tags only. Screenshots live on the Work tab, where they get room. This
keeps Home light and scannable.

**Work tab:** the main project (Co-Lease) in a large two-column card (copy +
device frame), then a 2-up grid. Each screenshot sits in a CSS **device frame**
(`.frame`: white bar, red/yellow/green traffic-light dots, faux URL, 16:10) —
which reuses the terminal card's traffic-light motif as browser chrome. That
repetition is the layout's signature move.

**About tab:** asymmetric bento — a large "What I'm about." card beside a column
of Interests (green), reading shelf (amber), and a "Less, but better." quote
(ember).

---

## 5. Card system

Base `.card`: white, **20px radius**, soft shadow, hairline border. Clickable
cards lift on hover.

| Variant | Look |
|---|---|
| `.card--blue/green/amber` | Soft tinted fill + matching label/arrow colour |
| `.card--ember` | Co-Lease gradient, white text (main project + quote) |
| `.hero` | Fraunces name, accent rule, beliefs list, footnote |
| `.loc` | Blue gradient location tile |
| `.term` | Dark terminal, fake `kubectl` output, blinking cursor |
| `.pjt` / `.pjt-main` | Home teasers (small / large ember) |
| `.work-feat` / `.work-card` | Work-tab cards holding device frames |
| `.ico` | Square social/link icon cards |

---

## 6. Motion & interaction

- **Entrance:** cards start `opacity:0; translateY(20px) scale(.98)` → `.is-visible`
  via IntersectionObserver. Hero uses `scale(.95)`. Panel switches fade + slide.
- **Hover:** cards lift `translateY(-6px) rotate(.25deg)` — the slight rotation is
  what makes it feel tactile rather than mechanical. Arrows slide, device frames
  lift, stack icons go grayscale → colour, live dots pulse.
- **Sound:** a Web Audio tick on tab switch and a pop on card click — **synthesized,
  zero files**, suppressed under reduced motion. An unusual choice, and the most
  distinctive thing about the site's feel.
- **Reduced motion:** all animation and transition disabled; cards shown
  immediately.

---

## 7. Responsive

| Breakpoint | Changes |
|---|---|
| >880px | Full 2-col bento, 3-col bottom rows |
| ≤880px | Bento → 1 col; Work/rows → 2 col; main project stops spanning |
| ≤600px | Single column; nav → fixed bottom bar; tighter spacing |

---

## 8. The decisions, and why

- **Bento + tabs** — keeps marco.fyi's warmth while keeping each surface focused.
  No infinite scroll.
- **Co-Lease as the main project** — biggest product ambition and the strongest
  brand; it anchors both Home and Work in its ember identity.
- **Screenshots only on Work** — Home stays scannable; Work is where device-framed
  visuals get room to breathe.
- **Light only** — warm paper avoids eye strain without a parallel dark system to
  maintain.

---

## 9. Open items

1. The **uncommitted redesign** in the working tree adds `_includes/card-tags.html`
   and `frame-bar.html` and swaps the two trader-bot screenshots for one
   "trading bot engine" image — `DESIGN.md` doesn't describe either yet. Update it
   when that work is committed.
2. `DESIGN.md` says Trading Bots reuses `assets/images/trader-bot-v1.png`, but that
   file has been **deleted** in the working tree. The doc and the assets disagree.
3. Screenshot pipeline is documented as headless Chrome against public URLs — which
   only works from an unfirewalled machine. Worth noting in the doc.
