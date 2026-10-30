# Portfolio design system (v9, 2026-10-29)

Jano asked for "a clean color for the theme just like the one you used for ClippMX, the clean one". The look is
ClippMX's **Limpio / Clean** theme (`projects/clippmx/app/public/style.css`, `html[data-theme="clean"]`). It is now the
only theme, so the five-theme picker from v3 is gone.

## Tokens (`style.css` `:root`)

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f5f5f7` | page |
| `--surface` | `#ffffff` | section frames, windows |
| `--rule` / `--rule-strong` | `#e8e8ed` / `#d2d2d7` | hairlines |
| `--ink` / `--ink2` / `--muted` | `#1d1d1f` / `#424245` / `#6e6e73` | text |
| `--primary` | `#0071e3` | the one filled action per view (a pill) |
| `--link` | `#0066cc` | text actions, the brand's O |
| hues | news `#0066cc` · clips `#c41e5b` · models `#1b7f37` · market `#b9470b` · photos `#9a5800` · ops `#48484d` | one per automation: icon, flow, status |
| type | system stack (SF Pro / Segoe UI Variable) | body 17px / 1.5, tight tracking |
| radii | frame 22px, window 18px, pill 980px | |

## UI UX Pro Max (`~/.claude/skills/ui-ux-pro-max`, `py -3 scripts/search.py`)

1. `"personal portfolio data AI engineer clean apple minimal" --design-system -p "Portfolio v9"` → pattern
   *Scroll-Triggered Storytelling* (keep it readable without the motion; final state under reduced motion), palette
   *Monochrome + blue accent* (#18181B / #2563EB on #FAFAFA). Its style, *Brutalism*, does not fit "clean" and was
   not used; the palette agrees with ClippMX Clean, which is what was used.
2. `"apple clean minimal light grey white surfaces" --domain style` → *Minimalism & Swiss Style*: subtle hover
   200–250 ms, clear hierarchy, a single accent.
3. `"modal dialog detail window" --domain ux` → *Focus States*: a visible focus indicator on every control, inside
   windows too.
4. `"portfolio case study interactive" --domain ux` → *Hover States*: pointer cursor and a subtle change on everything
   clickable.

## Rules

- No boxes beyond the allowed cases (`concepts/containment-budget.md` in janus-ia): section frames (real estate),
  windows, flow nodes (the datum), the one primary pill. Everything else is text, hue and hairlines.
- Click → window: every project, automation, flow step, tracker and technology opens a window that explains it.
  Windows open from what was clicked, stack, drag by the title bar on desktop and become a bottom sheet on a phone.
  Esc closes the top one; focus goes back to what opened it.
- Motion is CSS (plus the window transition) and stops under `prefers-reduced-motion`.
- Numbers on the page trace to a file in janus-ia (see the v9 loop: `.planning/loops/2026-10-29-48a5d7d5.md`).

## v10 (2026-10-29): its own composition, not ClippMX's

Jano: "the section in the image looks exactly like the home page of clippmx, you are being repetitive with your designs".
v9 had taken ClippMX's whole home (text left + tilted floating screenshot cards right + icon stat strip + icon eyebrow),
when he had asked only for its colours. Rule since then: borrow a theme's **tokens only**.

**Must not resemble:** ClippMX's home (`janus-ia/outputs/ui-checks/clippmx-ronda7/home-clean.png`) — no floating card
stack, no stat strip with icon labels, no icon eyebrow. Checked: verify-v10 fails on `hero-photo`, `class="stats"`,
`class="eyebrow"` in the markup, and the hero screenshot was compared with ClippMX's before shipping.

**What it is instead:**
- Hero = an editorial split: the name set large (two lines, −0.05em) on the left, the claim with the two numbers inline
  and the contacts on the right, on one baseline.
- Showreel = a dark stage under it, on the first screen: five numbered scenes with progress lines on the left, the
  scene playing on the right (a slow camera move over a screen; a website scrolling top to bottom with its live URL;
  three reels rising). It plays only while on screen, holds on hover/focus/an open window, has Pause, and stays still
  under reduced motion (UI UX Pro Max `"autoplaying motion" --domain ux`: pause control, stop off-screen, honour reduced
  motion, 1–2 moving elements per view). `"showreel portfolio hero autoplay work preview" --domain style` returned
  kinetic typography / 3D product preview — not used.
- Websites = "why I built it / what it does", then page frames (4:5) in a grid; one page scrolls at a time in turn, or
  the one under the pointer. Data: `sites.json`, kept live by janus-ia `scripts/portfolio-sites.mjs` (daily workflow
  `portfolio-sites`, 09:15).
