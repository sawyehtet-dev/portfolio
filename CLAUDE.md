# CLAUDE.md - Repository Guide

> Quick-reference for any AI assistant or new contributor working on this codebase.

## Current architecture (read first)

This is a **single portfolio site** in the Editorial / Swiss style: big Newsreader serif
display type, strict grid, hairline structure, an ink-on-paper palette with a warm ivory
light theme and a matching slate dark theme (the "accent" is the ink color itself).
Everything lives in `src/site/`.

- **Front door (`/`) is the portfolio** (`src/site/WorkPage.tsx`), a single page:
  Hero, Selected Work, Experience, Skills, Resume, Contact, and Footer.
- Active routes include `/` (portfolio) and `*` (NotFound 404).
- Legacy routes (`/work`, `/writing`, `/writing/*`, `/blog`, `/blog/*`) 301-redirect to `/`.

Styles live in `src/site/editorial.css` (scoped under `.ed`, self-contained: it declares
its own CSS custom-property tokens and depends on no token system). Fonts load from
Google Fonts in `index.html` (Newsreader variable font); there are no local `@font-face`
declarations anywhere in the app. Portfolio content comes from
`src/config/editorial-data.ts` + `src/config/profile.ts`.

## Positioning (content rule - do not drift)

This site positions Saw Ye Htet as a **Software Engineer specializing in Full-Stack Web Development, Unity Game/XR Systems, and Software Tooling**.

- **Primary positioning:** Software Engineer
- **Core Narrative:** Software engineer based in Singapore building modern web applications, Unity games, and developer tooling. Works across full-stack web technologies and interactive real-time systems, combining clean frontend/backend architecture with robust test-driven engineering.
- **Target Roles:** Software Engineer, Full-Stack / Backend / Java / Web Developer, Unity / XR Developer, Systems Developer.
- **Background:** Fresh graduate with one year of technical engineering experience at SP CEMS (Methanol Bunkering VR research). Singapore Polytechnic IT Diploma, 2026. S-Pass eligible.
- **Typography Rule:** Never use em dashes (`—`) anywhere in code, markdown, comments, or documentation. Use standard hyphens (`-`), en dashes (`–`), colons (`:`), or pipes (`|`).
- The OG image (`scripts/generate-og.mjs`) bakes this positioning too: keep it in sync and regenerate with `npm run generate:og` when the headline/role copy changes.

## Stack & Key Dependencies

| Layer     | Technology                                   | Version | Notes                                                                                                    |
| --------- | -------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| Framework | React                                        | 19      | StrictMode enabled                                                                                       |
| Language  | TypeScript                                   | 5       | Strict, `noEmit`, bundler module resolution                                                              |
| Bundler   | Vite                                         | 8       | Dev on `:3000`, builds to `dist/`                                                                        |
| Styling   | Vanilla CSS                                  | -       | `src/site/editorial.css`, scoped under `.ed`. No Tailwind, no CSS-in-JS                                  |
| Routing   | React Router DOM                             | 7       | BrowserRouter. `/` (portfolio); `/work`, `/writing`, `/writing/*`, `/blog`, `/blog/*` -> `/`; `*` -> 404 |
| Forms     | None - plain React state                     | -       | The `/` Contact section validates in ~20 lines against HTML constraints. No heavy third-party libraries  |
| Fonts     | Newsreader variable serif (Google Fonts CDN) | -       | Stylesheet in `index.html`; system serif/mono fallbacks. External request by design                      |
| Testing   | Vitest + Testing Library + jsdom             | 4 / 16  | `vmForks` pool, globals enabled                                                                          |
| Linting   | ESLint flat config + Prettier                | 9 / 3   | 4-space indent, single quotes, trailing comma es5                                                        |
| Analytics | Plausible                                    | -       | Script tag in index.html, domain `sawyehtet.com`                                                         |
| Deploy    | Netlify                                      | -       | Build: `npm run build`, publish: `dist/`; SPA rewrite + 301s; sitemap + SSR prerender at build           |
| PWA       | Service worker (`public/sw.js`) + manifest   | -       | Per-build cache version (`__BUILD_HASH__`); registered in `main.tsx` (prod) / unregistered (dev)         |

## Entry Point & Routing

```
index.html                       <- Vite HTML entry, loads /src/main.tsx
  └─ src/main.tsx                <- ReactDOM.createRoot; registers the service worker
       └─ src/App.tsx            <- ErrorBoundary + BrowserRouter + ScrollToTop + Routes
            ├─ /                 -> WorkPage (src/site/, the portfolio - EAGER)
            ├─ /work             -> Navigate -> /
            ├─ /writing          -> Navigate -> /
            ├─ /writing/*        -> Navigate -> /
            ├─ /blog             -> Navigate -> /
            ├─ /blog/*           -> Navigate -> /
            └─ *                 -> NotFound (lazy, editorial 404)
```

`WorkPage` is eager (the front door); `NotFound` is `React.lazy`-loaded inside a `Suspense` boundary. The portfolio's `Contact` section is _itself_ lazy (a local `Suspense` inside `WorkPage`) so its markup stays off the initial bundle.

## Project Layout

```
src/
  main.tsx               <- createRoot, SW register/unregister, axe in dev
  App.tsx                <- router + routes (no providers)
  site/                  <- THE SITE
    WorkPage.tsx         <- front-door portfolio (Hero defined inline here)
    NotFound.tsx         <- editorial 404 (catch-all route)
    Nav.tsx
    BackToTop.tsx        <- floating back-to-top button; hidden on mobile and while the footer's .ed-totop link is visible
    editorial.css        <- the entire design system, scoped .ed, self-contained
    sections/            <- Experience, Work (projects), Skills, Contact (lazy), Footer
  config/
    editorial-data.ts    <- PROJECTS, EXPERIENCE, EDUCATION, SKILLS
    profile.ts           <- PROFILE (name, role, email, resume paths) + SOCIAL_LINKS
  types/index.ts         <- front-door content types (Project, ExperienceItem, EducationItem, SkillGroup, etc.)
  components/
    ErrorBoundary.tsx    <- generic error boundary, wraps the router in App
  tests/                 <- Vitest test suites
```

## Data & Config

- **`src/config/editorial-data.ts`** - the single source of truth for portfolio content:
    - `PROJECTS` (`Project[]`) - title, role, summary, context, whatIBuilt (key engineering narrative), tools, outcome, optional videoPreview, links.
    - `EXPERIENCE` (`ExperienceItem[]`) - org, role, period, bullets, stack.
    - `EDUCATION` (`EducationItem[]`) - institution, degree, period, location, bullets.
    - `SKILLS` (`SkillGroup[]`) - categorized skill groups (Web & Backend, Game & XR Development, Languages, Engineering & Tools).
- **`src/config/profile.ts`** - `PROFILE` (name, role, email, resume path, availability) and `SOCIAL_LINKS`. Education lives in `EDUCATION` (`editorial-data.ts`); do not duplicate it in other sections.

## Build & Deploy

- **Build:** `npm run build` -> typecheck -> `scripts/generate-sitemap.mjs` -> `vite build` -> `build:ssr` (`vite build --ssr src/entry-server.tsx` -> `dist-ssr/`) -> `scripts/prerender.mjs`.
- **Manual chunks (eager vendors ONLY):**
    - `vendor-react` (react, react-dom, scheduler)
    - `vendor-router` (react-router)
- **Multi-page:** Vite builds `index.html` and `offline.html` as entries.
- **Sitemap:** `scripts/generate-sitemap.mjs` writes `public/sitemap.xml`.
- **Homepage prerender:** `scripts/prerender.mjs` renders `WorkPage` to static markup via `src/entry-server.tsx` (compiled to `dist-ssr/` by `build:ssr`) and injects it into `dist/index.html`'s `#root`, so non-JS crawlers get the real front-door body.
- **Netlify** (`netlify.toml`): publish `dist/`. SPA catch-all `/*` -> `/index.html` (status 200); `/work`, `/writing`, `/writing/*`, `/blog`, `/blog/*` are 301 redirects to `/`.
- **PWA:** `main.tsx` registers `public/sw.js` in production and unregisters stale workers in dev.

## Scripts Reference

```bash
npm run dev              # Vite dev server on :3000, auto-opens browser
npm run lint             # ESLint on src/**/*.{ts,tsx}
npm run lint:fix
npm run typecheck        # tsc --noEmit
npm run test             # Vitest run (single pass)
npm run test:watch
npm run validate         # lint -> typecheck -> test (full CI gate)
npm run format           # Prettier write
npm run format:check
npm run build            # typecheck -> sitemap -> vite build -> build:ssr -> prerender -> dist/
npm run preview          # Serve dist/ locally
npm run build:ssr        # Compile src/entry-server.tsx -> dist-ssr/ (runs in build)
npm run prerender        # Inject prerendered homepage body into dist/index.html (runs in build)
npm run generate:og      # Puppeteer script to regenerate the OG preview image
npm run generate:sitemap # public/sitemap.xml (runs in build)
```

## Tests

- **`src/tests/front-door-routing.test.tsx`** - asserts the portfolio hero at `/` and redirects from `/writing`, `/work`, `/blog`.
- **`src/tests/error-boundary.test.tsx`** - crash screen, error logging, and pass-through when nothing throws.
- **`src/tests/contact-form.test.tsx`** - validation (empty, whitespace-only, bad email, short message), trimmed POST body, success/failure states, honeypot drop, and live character counter.
- **Setup** (`src/tests/setup.ts`): imports `@testing-library/jest-dom`.
- **Environment:** jsdom with `vmForks` pool.

## Conventions & Non-Obvious Details

1. **No em dashes anywhere** in the project - use a standard hyphen, en dash, colon, or pipe.
2. **`editorial.css` is the whole design system** - scoped `.ed`, self-contained, declares its own tokens; no `@font-face`.
3. **Contact form** - plain `useState` plus a ~20-line `validate()`, POSTing to Formspree via native `fetch()`. Includes an off-screen honeypot (`website_url`).
4. **Fonts** - Newsreader loads from Google Fonts; nothing is self-hosted. `assets-src/fonts/` holds full-weight fonts used ONLY by generation scripts (favicons use Newsreader24pt-Bold, OG image embeds Adwaita Sans/Mono as base64), with the Adwaita license file alongside.
5. **One 404, and it is `src/site/NotFound.tsx`.**
6. **`google0e39a960e13ab711.html`** - Google Search Console verification. Do not delete.
7. **No pre-React splash in `index.html`.** `scripts/prerender.mjs` bakes the real homepage into `#root`.
8. **Images are palette-quantized.**
9. **`SOCIAL_LINKS` renders in the Contact section.** The footer links to `/#contact`.
10. **CI security gate is `scripts/audit-ci.mjs`.**
