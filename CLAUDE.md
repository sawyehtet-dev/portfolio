# CLAUDE.md - Repository Guide

> Quick-reference for any AI assistant or new contributor working on this codebase.

## ⚡ Current architecture (read first)

This is a **single portfolio site** in the Editorial / Swiss style: big display type,
strict grid, hairline structure, one signal-red accent, a warm "paper" light theme, and
self-hosted Adwaita Sans/Mono. There is no desktop simulation - it was removed; everything
lives in `src/site/`.

- **Front door (`/`) is the portfolio** (`src/site/WorkPage.tsx`), a single page:
  Hero · **Stats ribbon** · About · Experience · **Testimonial** · Projects · Skills ·
  Résumé · Contact · **Writing**. Stats and Testimonial are un-numbered ribbons, so the
  numbered run (`01 About … 03 Projects …`) stays gap-free; Testimonial renders nothing
  while `TESTIMONIALS` is empty. The Writing section surfaces the three newest posts and
  links out to the feed.
- **Writing feed at `/writing`** (`src/site/Home.tsx`): a compact masthead (name ·
  tagline · intro · link back to the portfolio) over the newest-first list of posts.
- **Posts render at clean root slugs** (`/<slug>`, e.g. `/my-post`),
  `src/site/BlogPost.tsx`. (No posts are published right now - the only published
  essay was removed; `first-post.md` is a draft, so the feed shows its empty state.)

Styles live in `src/site/editorial.css` (scoped under `.ed`, self-contained: it declares
its own `@font-face` for the subset fonts and depends on no token system). Portfolio
content comes from `src/config/editorial-data.ts` + `src/config/profile.ts`; posts are
Markdown in `src/site/blog/posts/*.md` (loader: `src/site/blog/posts.ts`).

## 🎯 Positioning (content rule - do not drift)

This site sells **one person, two target lanes**. Hold this across every section, every
edit, every session. Do not reintroduce retired framing.

- **Primary lane: IT Support / Service Desk** (service desk, desktop support, IT
  technician, IT support engineer). Lead with troubleshooting, end-to-end testing, user
  testing, issue reproduction, and documentation.
- **Secondary lane: Software QA** - the real edge, because he can **read code and
  understand APIs**, which is the differentiator over most manual testers. Lean on this,
  not on "developer."
- **Seniority:** a **fresh grad with one year of technical experience** (the CEMS VR
  work), not zero, and not a senior. Singapore Polytechnic IT diploma, 2026.
- **RETIRED framing - never reintroduce:** "Application Support" / "Production Support",
  "Java developer", "Operations Specialist", or anything that positions him as a software
  developer by trade. App Support is dead.
- **VR/Unity stays light** - it's the setting for the support/testing/documentation story,
  not the headline. Don't foreground FPS, headsets, or game-dev.
- **Tools rule:** list only tools genuinely used. **In-progress items must be marked "in
  progress":** SQL (via SQLBolt), computer networking course (Coursera), Azure Fundamentals
  (AZ-900). **Do NOT list MS-900** (retired - Microsoft 365 Fundamentals no longer offered).
  Do not claim hands-on Windows or
  M365 admin, ServiceNow, hardware repair, ITIL, or AV gear.
- Canonical résumé content lives in two `.docx` lanes (IT Support, Software QA) in the
  user's local files; the site copy is derived from them. The OG image
  (`scripts/generate-og.mjs`) bakes this positioning too - keep it in sync and regenerate
  with `npm run generate:og` when the headline/role copy changes.

## Stack & Key Dependencies

| Layer     | Technology                                    | Version | Notes                                                                                                                                   |
| --------- | --------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Framework | React                                         | 19      | StrictMode enabled                                                                                                                      |
| Language  | TypeScript                                    | 5       | Strict, `noEmit`, bundler module resolution                                                                                             |
| Bundler   | Vite                                          | 8       | Dev on `:3000`, builds to `dist/`                                                                                                       |
| Styling   | Vanilla CSS                                   | -       | `src/site/editorial.css`, scoped under `.ed`. No Tailwind, no CSS-in-JS                                                                 |
| Routing   | React Router DOM                              | 7       | BrowserRouter. `/` (portfolio), `/writing` (feed), `/:slug` (posts); `/work`→`/`, `/blog`→`/writing`, `/blog/:slug`→`/:slug`; `*` → 404 |
| Forms     | React Hook Form + Zod                         | 7 / 4   | Used by the `/` Contact section (lazy); rides in its lazy chunk (deliberately NOT a manual chunk)                                       |
| Markdown  | react-markdown + remark-gfm                   | 10 / 4  | Renders posts; rides with the lazy `BlogPost` chunk                                                                                     |
| Fonts     | Adwaita Sans/Mono (self-hosted WOFF2, subset) | -       | Self-hosted in `public/fonts/` with SIL license. **No external font requests**                                                          |
| Testing   | Vitest + Testing Library + jsdom              | 4 / 16  | `vmForks` pool, globals enabled                                                                                                         |
| Linting   | ESLint flat config + Prettier                 | 9 / 3   | 4-space indent, single quotes, trailing comma es5                                                                                       |
| Analytics | Plausible                                     | -       | Script tag in index.html, domain `sawyehtet.com`                                                                                        |
| Deploy    | Netlify                                       | -       | Build: `npm run build`, publish: `dist/`; SPA rewrite + 301s; RSS + sitemap + per-route head shells at build                            |
| PWA       | Service worker (`public/sw.js`) + manifest    | -       | Per-build cache version (`__BUILD_HASH__`); registered in `main.tsx` (prod) / unregistered (dev)                                        |

## Entry Point & Routing

```
index.html                       ← Vite HTML entry, loads /src/main.tsx
  └─ src/main.tsx                ← ReactDOM.createRoot; registers the service worker
       └─ src/App.tsx            ← ErrorBoundary + BrowserRouter + ScrollToTop + Routes
            ├─ /                 → WorkPage   (src/site/, the portfolio - EAGER)
            ├─ /writing          → Home       (lazy, the writing feed)
            ├─ /work             → Navigate → /        (redirect)
            ├─ /blog             → Navigate → /writing (legacy redirect)
            ├─ /blog/:slug       → Navigate → /:slug   (legacy redirect via BlogRedirect)
            ├─ /:slug            → BlogPost   (lazy; unknown/draft slug → not-found)
            └─ *                 → NotFound   (lazy, editorial 404)
```

`WorkPage` is eager (the front door); `Home`, `BlogPost`, and `NotFound` are
`React.lazy`-loaded inside a `Suspense` boundary. The portfolio's `Contact` section is
_itself_ lazy (a local `Suspense` inside `WorkPage`) so the react-hook-form/zod runtime is
code-split out of the front door's bundle; `react-markdown` rides with `BlogPost`.

**No context providers.** `App.tsx` is just `ErrorBoundary` → `BrowserRouter` →
`ScrollToTop` → `Routes`. The editorial site is theme-independent (light only) and uses no
global state, so there is no theme bootstrap and no `data-theme` handling.

## Project Layout

```
src/
  main.tsx               ← createRoot, SW register/unregister, axe in dev
  App.tsx                ← router + routes (no providers)
  site/                  ← THE SITE
    WorkPage.tsx         ← front-door portfolio (Hero/About defined inline here)
    Home.tsx             ← /writing feed (masthead + post list)
    BlogPost.tsx         ← a published post (react-markdown)
    NotFound.tsx         ← editorial 404 (catch-all route)
    Nav.tsx
    editorial.css        ← the entire design system, scoped .ed, self-contained
    sections/            ← Stats, Experience, Testimonial, Work (projects), Skills,
                           Resume, Contact (lazy), Writing, Footer
    blog/
      posts.ts           ← Vite Markdown loader (frontmatter + reading time)
      posts/*.md         ← the posts
  config/
    editorial-data.ts    ← PROJECTS, EXPERIENCE, STATS, TESTIMONIALS, EDITORIAL_SKILLS
    profile.ts           ← PROFILE (name, role, taglines, email, resume) + SOCIAL_LINKS
  types/index.ts         ← front-door content types (Project, ExperienceItem, StatItem,
                           Testimonial, ProjectLink, ProjectMedia)
  components/
    ErrorBoundary.tsx    ← the only remaining component; generic, used by App + windows
  styles/404.css         ← styles for the STATIC 404.html (editorial, self-contained)
  tests/                 ← see Tests below
```

## Data & Config

- **`src/config/editorial-data.ts`** - the single source of truth for portfolio content:
    - `PROJECTS` (`Project[]`) - title, role, problem/solution/impact narrative, `techStack`,
      `proofPoints`, `links`, optional `media` (screenshot), `status`.
    - `EXPERIENCE` (`ExperienceItem[]`) - org, role, period, bullets, stack.
    - `STATS` (`StatItem[]`) - the hero ribbon's headline figures (each is something already
      evidenced elsewhere on the page).
    - `TESTIMONIALS` (`Testimonial[]`) - references. **Empty renders nothing**, so a
      placeholder never ships; add only real, attributed quotes.
    - `EDITORIAL_SKILLS` - skill groups for the Skills section.
- **`src/config/profile.ts`** - `PROFILE` (name, role, taglines, email, resume path,
  availability, location) and `SOCIAL_LINKS`.
- **Posts** - Markdown in `src/site/blog/posts/*.md`. `src/site/blog/posts.ts` parses
  frontmatter, computes reading time, and exposes `PUBLISHED_POSTS` / `FEATURED_POSTS`.
  `scripts/lib/posts.mjs` is a standalone Node mirror used by the feed/meta scripts - keep
  its frontmatter parser in sync with `posts.ts`.

## Build & Deploy

- **Build:** `npm run build` → typecheck → `scripts/generate-feeds.mjs` → `vite build` →
  `scripts/generate-meta.mjs` → `build:ssr` (`vite build --ssr src/entry-server.tsx` →
  `dist-ssr/`) → `scripts/prerender.mjs`. Manual chunks (eager vendors ONLY):
    - `vendor-react` (react, react-dom, scheduler)
    - `vendor-router` (react-router)
    - zod/react-hook-form (Contact) and react-markdown (BlogPost) are intentionally unlisted;
      Rolldown hoists manual chunks into the entry's static imports, so naming lazy-only
      vendors there would modulepreload code the front door does not need. They ride with
      their lazy importers.
- **Multi-page:** Vite builds `index.html`, `offline.html`, and `404.html` as entries.
- **Feeds:** `scripts/generate-feeds.mjs` writes `public/rss.xml` + `public/sitemap.xml`
  (committed, deterministic, served in dev too).
- **Head shells:** `scripts/generate-meta.mjs` (post-build) copies `dist/index.html` to
  `dist/<route>/index.html` for `/writing` and every published post, rewriting title,
  description, OG/Twitter, and canonical per route so social crawlers (which don't run JS)
  see the right card. Shell titles must match what the React components set at runtime; it
  throws if `index.html`'s head shape drifts.
- **Homepage prerender:** `scripts/prerender.mjs` (post-build, AFTER generate-meta) renders
  `WorkPage` to static markup via `src/entry-server.tsx` (compiled to `dist-ssr/` by
  `build:ssr`) and injects it into `dist/index.html`'s `#root`, so non-JS crawlers/scrapers
  get the real front-door body (head/OG/JSON-LD already carry the positioning; this fills
  the body). Pure Node `react-dom/server` - no headless browser, so it stays Netlify-safe.
  Runs after generate-meta so the per-route head shells keep their empty-root bodies; only
  `/` is prerendered. It strips React's hoisted `<title>`/`<meta>`/`<link>` hints from the
  fragment (the head owns those, and the head's image `prefetch` is deliberately
  low-priority). The client boots with `createRoot`, which replaces the markup on mount, so
  there is no hydration step to mismatch.
- **Netlify** (`netlify.toml`): publish `dist/`. SPA catch-all `/*` → `/index.html`
  (status 200); `/work` → `/`, legacy `/blog` → `/writing` and `/blog/*` → `/:splat` are
  **301 redirects**. Static files (offline.html, 404.html, assets, head shells) are served
  before redirects, so shells win over the SPA catch-all.
- **PWA:** `main.tsx` registers `public/sw.js` in production and unregisters stale workers
  in dev. Cache-first for `/assets/` + `/fonts/`, stale-while-revalidate for other statics,
  network-first HTML with `offline.html` fallback. Cache version is per-build
  (`__BUILD_HASH__` injected by `vite.config.js`).

## Scripts Reference

```bash
npm run dev              # Vite dev server on :3000, auto-opens browser
npm run lint             # ESLint on src/**/*.{ts,tsx}
npm run lint:fix
npm run typecheck        # tsc --noEmit
npm run test             # Vitest run (single pass)
npm run test:watch
npm run validate         # lint → typecheck → test (full CI gate)
npm run format           # Prettier write
npm run format:check
npm run build            # typecheck → feeds → vite build → meta → build:ssr → prerender → dist/
npm run preview          # Serve dist/ locally
npm run build:ssr        # Compile src/entry-server.tsx → dist-ssr/ (runs in build)
npm run prerender        # Inject prerendered homepage body into dist/index.html (runs in build)
npm run generate:og      # Puppeteer script to regenerate the OG preview image
npm run generate:feeds   # public/rss.xml + public/sitemap.xml (runs in build)
npm run generate:meta    # dist/<route>/index.html head shells (runs in build, needs dist/)
```

## Tests

- **`src/tests/front-door-routing.test.tsx`** - renders the real `<App>` and asserts the
  portfolio hero at `/` and the writing-feed masthead at `/writing`. Guards the routing.
- **`src/tests/error-boundary.test.tsx`** - window-level error UI, app-level crash screen,
  retry recovery, normal pass-through. Tests `ErrorBoundary` standalone.
- **Setup** (`src/tests/setup.ts`): mocks `matchMedia`, `AudioContext`, `localStorage`.
- **Environment:** jsdom with `vmForks` pool.

## Conventions & Non-Obvious Details

1. **No em dashes anywhere** in the project - use a spaced hyphen or restructure.
2. **`editorial.css` is the whole design system** - scoped `.ed`, self-contained, declares
   its own subset `@font-face`. Add new sections with the existing `ed-*` vocabulary
   (`ed-section`, `ed-container`, `ed-section-head`, `ed-chip`, hairline `--line` borders,
   the single `--accent`). Numbered sections use `ed-section-num`; ribbons (Stats,
   Testimonial) are un-numbered to keep the numbered run gap-free.
3. **Contact form** - React Hook Form + Zod, POSTs to Formspree via native `fetch()`.
   Includes a hidden off-screen honeypot field (`website_url`, positioned off-screen, NOT
   `display:none`, because bots detect that). It is lazy so its runtime stays off the front
   door.
4. **Self-hosted fonts** - `public/fonts/` holds subset Adwaita Sans/Mono (used by the site)
   plus the full weights (kept for `scripts/generate-og.mjs`) and the SIL license.
5. **Static 404** - `404.html` + `src/styles/404.css` are a no-React editorial 404 served
   by Netlify on hard 404s; they mirror `src/site/NotFound.tsx`. Self-contained, no shared
   imports.
6. **`google0e39a960e13ab711.html`** - Google Search Console verification. Do not delete.
7. **`docs/`** - reference material from a previous design audit, not build artifacts.

## Prettier Config

```json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "printWidth": 100,
    "bracketSpacing": true,
    "arrowParens": "avoid",
    "endOfLine": "lf"
}
```

## Node Version

Requires Node `^20.19.0 || >=22.12.0` (see `engines` in package.json). CI uses Node 22.
