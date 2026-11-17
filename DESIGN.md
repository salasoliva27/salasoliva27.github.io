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

## v11 (2026-11-15): two flagships, and the page made true again

Jano: "add clippana to my portfolio, that and Janus AI are my biggest projects (delete espacio bosques, janus
investments, platu) and update the portfolio itself with these learnings". The learnings are janus-ia
`concepts/website-design-lessons.md`; this is what each one changed here.

- **Two flagships.** Janus IA, then clippana, each across the whole frame and mirrored (picture left / words left).
  clippana shows its two real screens at the same height, the computer one and the phone one, because its phone is
  its own design. Longevité follows as one row (a second client card was there until v13). Espacio Bosques, Janus Investments, Platu and "Also
  building" are gone: cards, windows, Spanish, pictures.
- **Must not resemble** clippana's own home (a wall of clips beside a headline): here its screens are quoted as
  pictures inside the portfolio's own card.
- **Only true things (rule 8).** In seventeen days the page had drifted, so every status and number was read again
  against its source on 2026-11-15:
  - the creator-clips automation stopped on 3 Nov: out of "Automations in production" (five now); its real totals
    (142 posts, 24,087 views) are one line of clippana's story;
  - the eight "live" website links had been 404 since 2 Nov: the section now shows captures and links nowhere;
  - the newsroom runs Monday and Thursday and publishes one post, not ten a day; its totals are counted to 15 Nov;
  - the paper portfolios are one portfolio; the photo studio queues drafts; 70 models, 11 workflows on a clock;
  - MORSCO ended in September 2026, Outlier is out, clippana is the first experience; "ClippMX demo" is clippana, live.
- **The phone (rule 5).** Measured at 390 px: 94 links and buttons under 44 px and 17 kinds of text under 14 px. A phone
  layer at the end of `style.css` (under 720 px only) brings every lone link or button to 44 px and every text to 14 px
  or more, and the menu shows three places (Work, Websites, Contact) instead of one.
- **One control per job (rule 7).** The top bar already stays; a website card has one action (Details) now that
  "Open live" is gone.
- **Checks.** `node C:\Users\salas\portfolio-work\verify-v11.mjs [liveUrl]` (static truth greps, every window, the two
  flagships, Spanish for every key, the bar, the phone); janus-ia `projects/ai-hound/lib/phone-check.mjs <url>` ("good
  on a phone") and `scripts/containment-check.mjs --strict style.css` ("clean").

## v12 (2026-11-15): dark by default, his palette, a more technical look

Jano: "set it on dark mode by defult with the option of light mode, make the dark mode look more tech, use the colour
pallette I pasted here" — Electric Violet `#6900CF`, White `#FFFFFF`, Spring Green `#1BE89C`, Black `#000000`. The
ClippMX Clean look of v9 to v11 is gone. The violet is his own choice for his own brand; the "no purple" rule is about
pages made for others looking AI-made.

**Tokens (`style.css`, top).** A mode sets colours only; type, sizes and shapes are the same in both.

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--paper` | `#000000` | `#f3f3f6` | the page, under a faint 44 px grid |
| `--surface` / `--surface-2` | `#0a0a0d` / `#111116` | `#ffffff` / `#f8f8fb` | section frames, windows |
| `--rule` / `--rule-strong` | `#24242c` / `#363642` | `#e3e3ea` / `#cdcdd8` | hairlines, frame edges |
| `--ink` / `--ink2` / `--muted` | `#ffffff` / `#d9d9e0` / `#a0a0ad` | `#000000` / `#2e2e36` / `#5f5f6b` | text |
| `--primary` | `#6900cf`, white letters | the same | the one filled action per view |
| `--link` | `#1be89c` | `#6900cf` | text actions, highlighted words, the O of ASO |
| `--ok` / `--warn` | `#1be89c` / `#b78cff` | `#097350` / `#6900cf` | statuses |
| hues | green, violet tint, mint, pale violet, grey | their dark strengths | one per automation |

- **Violet is 2.5:1 on black**, so on dark it is a fill (the main button, the mark on each frame, the selection) and
  never a text colour; text accents on dark are the green (13:1) or `#b78cff`, a tint of the violet. On light the violet
  is the text accent (8.4:1) and the green is only a fill; its text shade is `#097350`.
- **Only the palette:** verify-v12 reads every colour in the sheet (50) and fails on one that is not the violet's
  family, the green's family or a neutral. The five automation hues are two strengths of each family and a grey.
- **The technical look**, the same in both modes: small labels (kickers, statuses, dates, flow notes, figures' labels)
  in the system mono face; a `>` prompt before the line under the name; a faint grid on the page ground; frames of
  12 px radius with a hairline edge and a 56 px violet mark on the top edge; the main button squared to 8 px.
- **The switch:** one button in the top bar (a sun in dark, a moon in light), nowhere else. Dark is in the markup; a
  saved choice is applied before the first paint; `localStorage "theme"`. Its name follows the language.
- **The showreel stays a dark stage in both modes.**
- **Measured:** every text against its ground in both modes at 1440 and 390, on the page (285 and 270 texts) and
  inside five kinds of window: 0 under 4.5:1 (3:1 from 24 px).
- **Phone:** the bar holds Work · Websites · Contact, the one language you can change to, and the switch (44 px).
- **Check:** `node C:\Users\salas\portfolio-work\verify-v12.mjs [liveUrl]`; `PORT=4713 SERVE_ONLY=1 node verify-v12.mjs`
  serves the folder for janus-ia `projects/ai-hound/lib/phone-check.mjs`; `scripts/containment-check.mjs --strict style.css`.

## v13 (2026-11-15, night): one client case removed

Jano asked to delete one client case from the portfolio. Its card, its window, its showreel scene (four now), the "See it at…"
button in Rates, its Spanish and its two pictures are gone. The AI adoption program stays in Rates as an offer, with
no case behind it.

- **One card left in a grid of two is half a frame of nothing**, so Longevité became a row across the frame
  (`.work--row`: picture 0.72, words 1.28), smaller than a flagship and picture-first like Janus IA.
- The showreel's list keeps its height with four scenes: the gap between tabs took the room the fifth left.
- **Check:** `node C:/Users/salas/portfolio-work/verify-v13.mjs [liveUrl]` (v12's checks, plus: the name is nowhere
  in the page, the Spanish, the script, the styles or the sites list; its pictures are gone; four scenes).

## v14 (2026-11-16): his brand board

Jano: "for my personal brand use the attached pallet, for the portafolio and the CV". Deep violet #34205C, lavender
#A99AD6, lime #C5F05A, charcoal #202126, off-white #F5F3F8 replace v12's violet and green. The token table above keeps v12's
values for history; `style.css` holds the current ones.

- **Dark (default):** page #17171b, frames #202126, ink #F5F3F8; text accents lime (12:1); the main button lavender with
  charcoal letters (6.3:1); the frame marks lavender. Deep violet is 1.3:1 on charcoal, so on dark it is only the selection.
- **Light:** page #ebe8f0, frames #F5F3F8, ink #202126; text accents and the main button deep violet (12.6:1); lime only
  as a fill, its text shade #4a6610.
- Automation hues: lime, lavender, a paler lime, a paler lavender, grey. Favicon charcoal with a lime AS.
- **Check:** `node C:/Users/salas/portfolio-work/verify-v14.mjs [liveUrl]`: the palette check now accepts the violet family
  (hue 245–290), the lime family (65–95) or a neutral.
