import { renderToStaticMarkup } from 'react-dom/server';
import { WorkPage } from './site/WorkPage';

// Build-time prerender of the front door, injected into dist/index.html by
// scripts/prerender.mjs. The client boots with createRoot, which replaces this
// markup outright - switching to hydrateRoot would make mismatches matter.
export function renderHome(): string {
    return renderToStaticMarkup(<WorkPage />);
}
