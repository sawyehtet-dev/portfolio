import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { WorkPage } from './site/WorkPage';

// Build-time prerender of the front door (/). scripts/prerender.mjs imports this
// after `vite build` and injects the result into dist/index.html's #root, so
// crawlers and link scrapers that do not run JS get the real homepage text. The
// head, OG tags, and JSON-LD already carry the positioning; this fills the body.
//
// StaticRouter supplies the router context WorkPage's <Link>s need at "/" without
// touching window. The client still boots normally with createRoot (main.tsx),
// which replaces this markup on mount, so there is no hydration step to mismatch.
export function renderHome(): string {
    return renderToStaticMarkup(
        <StaticRouter location="/">
            <WorkPage />
        </StaticRouter>
    );
}
