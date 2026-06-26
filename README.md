# sawyehtet.com

Personal site of Saw Ye Htet: a portfolio front door and a writing feed, in an
Editorial / Swiss design.

Live at [sawyehtet.com](https://sawyehtet.com), deployed on Netlify from `main`.

## What this is

A single-person portfolio aimed at two target lanes: **IT support / service desk**
(primary) and **software QA** (secondary, the coding-backed edge). Fresh Singapore
Polytechnic IT graduate with a year of hands-on technical experience.

| Route      | What you get                                                                                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`        | The portfolio: a single-page Editorial / Swiss layout. Hero, Stats, About, Experience, Testimonial, Projects, Skills, Resume, Contact, and a teaser of recent writing |
| `/writing` | The writing feed: newest-first list of published posts                                                                                                                |
| `/<slug>`  | Individual posts at clean root slugs                                                                                                                                  |
| `/rss.xml` | RSS feed of published posts, generated at build time                                                                                                                  |

The site speaks one design language: big display type, strict grid, hairline
structure, a single red accent, warm paper-light theme, self-hosted Adwaita Sans/Mono.

## Tech stack

- React 19 + TypeScript 5, built with Vite 8
- React Router 7 (routes above, plus 301s for legacy URLs)
- Vanilla CSS scoped under `.ed`; no CSS framework
- react-markdown + remark-gfm for posts
- React Hook Form + Zod for the contact form (Formspree)
- Vitest + Testing Library; ESLint flat config + Prettier
- Netlify for hosting, GitHub Actions for CI, CodeQL + Dependabot for scanning

## Project structure

```text
portfolio/
├── src/
│   ├── main.tsx                # createRoot + service-worker register/unregister
│   ├── App.tsx                 # ErrorBoundary + router + routes
│   ├── site/                   # The site: portfolio (/), writing feed, posts
│   │   ├── WorkPage.tsx        # The front door at /
│   │   ├── Home.tsx            # The writing feed at /writing
│   │   ├── BlogPost.tsx        # Post page at /<slug>
│   │   ├── NotFound.tsx        # Editorial 404 (catch-all route)
│   │   ├── editorial.css       # The whole design system, scoped under .ed
│   │   ├── sections/           # Stats, Experience, Testimonial, Work, Skills, Resume, Contact, Writing, Footer
│   │   └── blog/posts/         # Posts as Markdown with frontmatter
│   ├── components/             # ErrorBoundary (the only shared component)
│   ├── config/                 # editorial-data.ts (content) + profile.ts
│   ├── styles/                 # 404.css for the static 404.html
│   └── tests/                  # Vitest suites
├── scripts/                    # Build-time generators (feeds, head shells, OG image)
├── public/                     # Static assets, fonts, resume PDF, sw.js
└── netlify.toml                # Headers, redirects, build config
```

## Writing and publishing posts

Posts live in `src/site/blog/posts/` as Markdown files with frontmatter:

```markdown
---
title: 'Post title'
date: '2026-06-06'
slug: 'post-slug'
summary: 'One or two sentences shown in the feed and as the meta description.'
tags: [meta, design]
draft: false
---
```

A post with `draft: true` is hidden everywhere, including its own URL. Publishing is
flipping `draft` to `false` (or adding a new file) and rebuilding. The feed, the
homepage writing teaser, reading time, the RSS feed, the sitemap, and the post's
static head shell (correct title, OG tags, and canonical for social sharing) all
update automatically at build. `scripts/lib/posts.mjs` parses the same frontmatter
for the generators, so keep it in sync with `src/site/blog/posts.ts` if the format
ever changes.

## Development

```bash
npm install
npm run dev        # Vite dev server on :3000
```

`rss.xml` and `sitemap.xml` are generated into `public/` (and committed), so they
serve in dev too; `npm run build` regenerates them from the published posts.

## Validation

```bash
npm run validate   # lint, typecheck, tests
npm run build      # typecheck, feeds, production build, per-route head shells
```

CI runs the same chain (plus build) on every push and PR to `main`.

## Deployment

Netlify builds with `npm run build` and publishes `dist/`. Routing in `netlify.toml`:

- the catch-all `/*` rewrites to the SPA entry (status 200)
- `/work` 301s to `/`; legacy `/blog` 301s to `/writing` and `/blog/*` to `/:splat`
- `/writing` and each published post get a static `dist/<route>/index.html` head
  shell (built by `scripts/generate-meta.mjs`) with the route's own title, OG tags,
  and canonical, so shared links unfurl correctly; Netlify serves static files
  before the catch-all

### Post-deploy checklist

1. Visit `/` and confirm the portfolio renders with no layout shifts.
2. Visit `/writing` and a post slug; confirm the feed and post render.
3. Check `/rss.xml` serves valid XML.
4. Test OG preview at [opengraph.xyz](https://www.opengraph.xyz/).
5. Verify headers at [securityheaders.com](https://securityheaders.com/).
6. Run Lighthouse (Performance, Accessibility, Best Practices).
7. Submit the contact form with a real email to confirm Formspree delivery.

## Updating profile and projects

Portfolio content lives in two config files:

- **`src/config/profile.ts`**: name, role, taglines, target, email, resume path,
  availability, location, primary stack, social links.
- **`src/config/editorial-data.ts`**: `PROJECTS`, `EXPERIENCE`, `STATS`,
  `TESTIMONIALS`, and `EDITORIAL_SKILLS`.

To add a project, append a `Project` object to the `PROJECTS` array in
`editorial-data.ts`. After any content change run `npm run validate`.

## Design notes

An opinionated Editorial / Swiss design: strict grid, aligned hairlines, one accent
color (`#cc2a10`), a warm paper background, no glassmorphism or dark-card defaults.
The entire design system is `src/site/editorial.css`, scoped under `.ed` and
self-contained (it declares its own subset `@font-face`). See `CLAUDE.md` for the
full list of conventions and the positioning rule.

## Security

- **Headers**: Netlify serves `X-Content-Type-Options: nosniff`, `X-Frame-Options:
DENY`, two-year HSTS with preload, a deny-by-default `Permissions-Policy`,
  cross-origin isolation headers, and a strict Content Security Policy on every
  response.
- **CSP `style-src 'unsafe-inline'`**: required by React inline `style` props. An
  accepted trade-off.
- **Contact form**: honeypot field, client-side rate limiting, Zod schema validation.
  Submissions go through Formspree (the form ID is public by design).
- **External links**: all `target="_blank"` links use `rel="noopener noreferrer"`.
- **Dependencies**: Dependabot runs weekly for npm and GitHub Actions. CodeQL scans
  JavaScript/TypeScript on every push to `main`.

## OG image

The Open Graph preview image is generated by Puppeteer:

```bash
npm run generate:og    # outputs public/images/og-preview.png
```

After regeneration, optimize the PNG before committing:

```bash
# pngquant (best results)
pngquant --force --quality=85-95 --output public/images/og-preview.png public/images/og-preview.png

# ImageMagick fallback
magick public/images/og-preview.png -strip -colors 256 -define png:compression-level=9 public/images/og-preview.png
```

The image stays PNG (not WebP) because link previews on Facebook, LinkedIn, iMessage,
and Slack have inconsistent WebP support.
