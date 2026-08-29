# sawyehtet.com

Personal site of Saw Ye Htet: an editorial portfolio in a Swiss design layout.

Live at [sawyehtet.com](https://sawyehtet.com), deployed on Netlify from `main`.

## What this is

A single-page developer portfolio showcasing full-stack web applications, game & VR development, and developer tooling. Fresh Singapore Polytechnic IT graduate with hands-on research lab and engineering experience.

| Route | What you get                                                                                                    |
| ----- | --------------------------------------------------------------------------------------------------------------- |
| `/`   | The portfolio: a single-page Editorial / Swiss layout. Hero, Selected Work, Experience, Skills, Resume, Contact |

The site speaks one design language: big display type, strict grid, hairline structure, a single red accent, warm paper-light theme, and self-hosted Adwaita Sans/Mono fonts.

## Tech stack

- React 19 + TypeScript 5, built with Vite 8
- React Router 7
- Vanilla CSS scoped under `.ed`; no CSS framework
- No form library: the contact form is plain React state over native HTML constraints, posting to Formspree
- Vitest + Testing Library; ESLint flat config + Prettier
- Netlify for hosting, GitHub Actions for CI, CodeQL + Dependabot for scanning

## Project structure

```text
portfolio/
├── src/
│   ├── main.tsx                # createRoot + service-worker register/unregister
│   ├── App.tsx                 # ErrorBoundary + router + routes
│   ├── site/                   # The portfolio site
│   │   ├── WorkPage.tsx        # The front door at /
│   │   ├── NotFound.tsx        # Editorial 404 (catch-all route)
│   │   ├── editorial.css       # The whole design system, scoped under .ed
│   │   └── sections/           # Experience, Work, Skills, Resume, Contact, Footer
│   ├── components/             # ErrorBoundary, LazyVideo
│   ├── config/                 # editorial-data.ts, profile.ts
│   └── tests/                  # Vitest suites
├── scripts/                    # Build-time generators (sitemap, SSR prerender, OG image)
├── public/                     # Static assets, fonts, resume PDF, sw.js
└── netlify.toml                # Headers, redirects, build config
```

## Development

```bash
npm install
npm run dev        # Vite dev server on :3000
```

`sitemap.xml` is generated into `public/` (and committed), so it serves in dev too; `npm run build` regenerates it during production builds.

## Validation

```bash
npm run validate   # audit, lint, typecheck, tests
npm run build      # typecheck, sitemap, production build, SSR prerender
```

CI runs the same chain (plus build) on every push and PR to `main`.

## Deployment

Netlify builds with `npm run build` and publishes `dist/`. Routing in `netlify.toml`:

- the catch-all `/*` rewrites to the SPA entry (status 200)
- `/work`, `/writing`, `/writing/*`, `/blog`, and `/blog/*` 301-redirect to `/`
- Static files (`index.html`, `offline.html`, assets) are served before the catch-all

### Post-deploy checklist

1. Visit `/` and confirm the portfolio renders with no layout shifts.
2. Test OG preview at [opengraph.xyz](https://www.opengraph.xyz/).
3. Verify headers at [securityheaders.com](https://securityheaders.com/).
4. Run Lighthouse (Performance, Accessibility, Best Practices).
5. Submit the contact form with a real email to confirm Formspree delivery.

## Updating profile and projects

Portfolio content lives in two config files:

- **`src/config/profile.ts`**: name, role, taglines, email, resume path, availability, location, primary stack, social links.
- **`src/config/editorial-data.ts`**: `PROJECTS`, `EXPERIENCE`, `EDUCATION`, `SKILLS`.

To add a project, append a `Project` object to the `PROJECTS` array in `editorial-data.ts`. After any content change run `npm run validate`.

## Design notes

An opinionated Editorial / Swiss design: strict grid, aligned hairlines, one accent color (`#a8432b`), a warm paper background, no glassmorphism or dark-card defaults. The entire design system is `src/site/editorial.css`, scoped under `.ed` and self-contained (it declares its own subset `@font-face`).

## Security

- **Headers**: Netlify serves `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, two-year HSTS with preload, a deny-by-default `Permissions-Policy`, cross-origin isolation headers, and a strict Content Security Policy on every response.
- **CSP `style-src 'unsafe-inline'`**: required by React inline `style` props. An accepted trade-off.
- **Contact form**: an off-screen honeypot field plus client-side validation on the trimmed values, backed by the native HTML constraints on each input. Submissions go through Formspree.
- **External links**: all `target="_blank"` links use `rel="noopener noreferrer"`.
- **Dependencies**: Dependabot runs weekly for npm and GitHub Actions. CodeQL scans JavaScript/TypeScript on every push to `main`.

## OG image

The Open Graph preview image is generated by Puppeteer:

```bash
npm run generate:og    # outputs public/images/og-preview.png
```

The script palette-quantizes the screenshot to 256 colours itself (via ImageMagick, skipped with a note if it isn't installed), so there is no manual optimize step before committing.
