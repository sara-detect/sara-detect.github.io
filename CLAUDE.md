# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static research-showcase site for **SARA·Detect** — "Detecting Subacute Ruminal Acidosis with a Real-Time Deep Learning Algorithm" (USDA-NIFA grant 2023-70001-40997, SIU Carbondale). Astro 5 + React 19, four pages, no backend, no client JS framework runtime. See `PRODUCT.md` for audience, brand, and design principles (oxblood + cream + ink; rigorous, evidence-first, never SaaS-glossy).

## Commands

```bash
npm run dev      # astro dev — local server at localhost:4321
npm run build    # astro build — outputs static site to dist/
npm run preview  # serve the built dist/ locally
```

No test suite, no linter configured. Verify changes with `npm run build` (catches type errors via `astro/tsconfigs/strict`) and visually in `dev`.

## Architecture

- **Pages** live in `src/pages/*.astro` (`index`, `research`, `publications`, `team`). Each wraps `src/layouts/Base.astro`, passing `title` and `active` (the current `PageKey`). Base renders `Nav` → page `<slot/>` → `Funding` → `Footer`.
- **Design tokens** are centralized in `src/components/tokens.ts`: colors (`c.maroon`, `c.ink`, `c.muted`, …), font stacks (`serif`/`sans`/`mono`), and the `NAV` array (single source of truth for routes + nav). `PageKey` is derived from `NAV`. Adding/renaming a page means editing `NAV` here.
- **Styling is mostly inline** style objects/attributes inside components and `.astro` files (ported from a `.dc.html` design template). Global rules, media queries, focus states, and the CSS-only mobile hamburger live in `src/styles/global.css`. There is no Tailwind/CSS-modules. Match the existing inline-style idiom when editing; use `global.css` only for things inline can't do (`:hover`, `@media`, `::selection`, `prefers-reduced-motion`).
- **Mobile** breakpoints in `global.css`: `820px` (nav collapses to hamburger, layout reflows) and `480px` (typography scale, tighter spacing).

## Links & assets (BASE_URL discipline)

Every internal link and asset path MUST go through `import.meta.env.BASE_URL` so the site survives a subpath deploy. Use the `href()` helper from `tokens.ts` for routes, and `` `${base}assets/...` `` for images. Never hardcode a leading `/`.

`astro.config.mjs` is configured for the **root** deploy `sara-detect.github.io` (`base: '/'`). To move to a project repo (e.g. `user.github.io/acidosis/`), set `base: '/acidosis/'` and `site` accordingly — that one change is sufficient because everything uses `BASE_URL`.

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/`) builds with `withastro/action` and publishes `dist/` to GitHub Pages. No manual deploy step.

## Conventions

- Accessibility is a product requirement (WCAG AA): body/label text ≥4.5:1 contrast, visible `:focus-visible` outlines, `prefers-reduced-motion` respected, ≥44px touch targets. Don't regress these.
- Benchmark tables (e.g. FUME / CarboFormer in `research.astro`) hold real published numbers — treat them as data, verify against the source paper before editing.
- `papers/` is gitignored (local PDFs only).
