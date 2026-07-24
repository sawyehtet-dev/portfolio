// Types for the build-time post loader (posts.mjs), which is plain Node ESM so
// the generator scripts can run outside Vite. Declared here only so
// src/tests/frontmatter-parity.test.ts can import it under `tsc --noEmit`.

export declare const SITE_URL: string;
export declare const POSTS_DIR: string;

export declare function parseFrontmatter(raw: string): { data: Map<string, string> };
export declare function parseTags(raw: string | undefined): string[];
export declare function escapeXml(text: string): string;

export interface ScriptPost {
    title: string;
    date: string;
    summary: string;
    slug: string;
    draft: boolean;
    tags: string[];
}

export declare function loadPublishedPosts(): ScriptPost[];
