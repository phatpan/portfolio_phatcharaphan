# portfolio_phatcharaphan

Portfolio site for **Phatcharaphan Ananpreechakun** — senior full-stack engineer,
14+ years across Thai banking, capital markets, telecom, and a Thai FDA-approved
telepharmacy platform.

A single static page. No build step is needed to serve it — `index.html` and
`assets/` are the site.

## Layout

| Path | What it is |
|---|---|
| `index.html` | The site. Self-contained apart from `assets/` and Google Fonts. |
| `assets/` | Images (JPEG) and two screen recordings (H.264 MP4). |
| `favicon.*`, `icon-*.png`, `og-image.jpg`, `site.webmanifest` | Site icon set and the Open Graph share card. |
| `src/portfolio.src.html` | Source of truth for content and design. Same markup as `index.html`, but with `{{IMG:slug}}` / `{{VID:slug}}` placeholders. |
| `src/build.py` | Generates `index.html`. `--external <dir>` writes the file-based build used here; with no arguments it inlines everything as `data:` URIs for hosts with a strict CSP. |
| `archive/2025-react/` | The previous version of this site (React over CDN, 2025). Kept for reference, not served. |

`src/build.py` expects the original screenshots and recordings in a `prep/`
and `media/` directory that are not committed — the raw press images, Keynote
recordings and app-store captures live outside this repo. Editing
`src/portfolio.src.html` and re-running the build is only necessary when the
images change; text and layout edits can be made in both files, or in the source
and rebuilt.

## Publishing

**Production: Vercel — https://www.phatcha.com** (auto-deploys from `main`).

GitHub Pages is kept as an alternate deployment from `main` / root;
`.nojekyll` is present so Pages serves the files as-is.

## Notes

- The page commits to a single light theme on purpose and paints every colour
  explicitly, so it renders the same regardless of the viewer's system theme.
- Scroll reveals run off a scroll listener plus a short-lived poll rather than
  `IntersectionObserver` or `requestAnimationFrame`; both are throttled in
  background and embedded frames, and a stalled scheduler would leave the page
  blank.
- Type is Source Serif 4 for body, Inter Tight for headings, DM Mono for labels.
