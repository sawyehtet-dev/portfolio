/**
 * Prerender the front door (/) into static HTML.
 *
 * The site is a client-rendered React SPA: dist/index.html ships an empty
 * <div id="root">, so a fetch that does not run JS sees no homepage body. The
 * head (title/OG/Twitter/canonical) and the Person JSON-LD already carry the
 * positioning, but the body text - experience, projects, skills - only exists
 * after React mounts. This step renders WorkPage to static markup (see
 * src/entry-server.tsx, built to dist-ssr by `npm run build:ssr`) and injects it
 * into the root container so non-JS crawlers and link scrapers get real text.
 *
 * Runs LAST in the build, AFTER generate-meta: npm run build → tsc &&
 * generate-feeds && vite build && generate-meta && build:ssr && prerender.
 * generate-meta derives the per-route head shells from the empty-root
 * dist/index.html first, so /writing and post shells keep their own (empty)
 * bodies; only the homepage gets a prerendered body here. The client boots with
 * createRoot, which replaces this markup on mount - there is no hydration to
 * mismatch.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '../dist');
const SSR_ENTRY = join(__dirname, '../dist-ssr/entry-server.js');
const ROOT_TAG = '<div id="root"></div>';

if (!existsSync(SSR_ENTRY)) {
    throw new Error(
        `prerender: ${SSR_ENTRY} not found - run \`npm run build:ssr\` first (it builds the SSR entry).`
    );
}

const { renderHome } = await import(pathToFileURL(SSR_ENTRY).href);

let body = renderHome();

// React 19 hoists document metadata and resource hints into the rendered markup:
//   - <title> / <meta name="description"> - index.html's <head> already carries
//     the canonical pair, so a copy inside #root would just be a stray duplicate.
//   - <link rel="preload" as="image"> for the profile photo - the <head>
//     deliberately uses prefetch (low priority) for that image so it does not
//     compete with the critical font/JS on first paint; a high-priority body
//     preload would undercut that. The client re-emits hints as needed on mount.
// Strip them from the prerendered body (each is a no-op if React kept it out).
body = body
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+name="description"[^>]*\/?>/gi, '')
    .replace(/<link\b[^>]*>/gi, '');

const indexPath = join(DIST, 'index.html');
let html = readFileSync(indexPath, 'utf8');

if (!html.includes(ROOT_TAG)) {
    throw new Error(
        `prerender: could not find ${ROOT_TAG} in dist/index.html - keep this in sync with index.html's root container.`
    );
}

html = html.replace(ROOT_TAG, `<div id="root">${body}</div>`);
writeFileSync(indexPath, html, 'utf8');

console.log(`Prerender: injected homepage body (${body.length} chars) → dist/index.html`);
