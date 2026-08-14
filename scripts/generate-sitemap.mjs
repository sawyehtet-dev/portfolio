/**
 * Sitemap generator: builds public/sitemap.xml for the portfolio site.
 * Runs before vite build:
 *   npm run build -> tsc && generate:sitemap && vite build && build:ssr && prerender
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../public');
const SITE_URL = 'https://sawyehtet.com';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, 'sitemap.xml'), sitemap, 'utf8');
console.log('Sitemap: wrote public/sitemap.xml');
