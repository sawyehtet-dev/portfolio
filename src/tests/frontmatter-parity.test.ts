import { describe, it, expect } from 'vitest';
import { parseFrontmatter as parseApp, parseTags as tagsApp } from '../site/blog/posts';
import { parseFrontmatter as parseNode, parseTags as tagsNode } from '../../scripts/lib/posts.mjs';

// posts.ts and scripts/lib/posts.mjs duplicate the frontmatter parser (the build
// scripts can't use import.meta.glob). Drift is silent: RSS, the sitemap, and the
// head shells would describe different posts than the pages render. Don't delete.

const CASES: Array<[name: string, raw: string]> = [
    ['plain key/value', '---\ntitle: Hello\ndraft: false\n---\nBody text.'],
    ['single-quoted values', "---\ntitle: 'Hello'\nslug: 'hello'\n---\nBody."],
    ['double-quoted values', '---\ntitle: "Hello"\nslug: "hello"\n---\nBody.'],
    ['colon inside a value', '---\ntitle: Notes: part one\n---\nBody.'],
    ['CRLF line endings', '---\r\ntitle: Hello\r\ndraft: true\r\n---\r\nBody.'],
    ['leading BOM', '﻿---\ntitle: Hello\n---\nBody.'],
    ['no frontmatter at all', 'Just a body with no fence.'],
    ['empty frontmatter block', '---\n\n---\nBody.'],
    ['blank and malformed lines', '---\ntitle: Hello\n\nnot-a-pair\ndraft: false\n---\nBody.'],
    ['value with trailing spaces', '---\ntitle:   Hello   \n---\nBody.'],
    ['unterminated quote stays literal', '---\ntitle: "Hello\n---\nBody.'],
];

const TAG_CASES: Array<[name: string, raw: string | undefined]> = [
    ['undefined', undefined],
    ['empty string', ''],
    ['bracketed list', '[meta, design]'],
    ['bare csv', 'meta, design'],
    ['quoted items', '[\'meta\', "design"]'],
    ['stray commas', 'meta,,design,'],
    ['single tag', 'meta'],
];

describe('frontmatter parser parity: app vs build scripts', () => {
    it.each(CASES)('agrees on %s', (_name, raw) => {
        const app = [...parseApp(raw).data.entries()];
        const node = [...parseNode(raw).data.entries()];
        expect(node).toEqual(app);
    });

    it.each(TAG_CASES)('agrees on tags: %s', (_name, raw) => {
        expect(tagsNode(raw)).toEqual(tagsApp(raw));
    });

    it('both treat draft: true as the only way to hide a post', () => {
        const draft = '---\ntitle: X\ndraft: true\n---\nBody.';
        const live = '---\ntitle: X\ndraft: false\n---\nBody.';
        expect(parseApp(draft).data.get('draft')).toBe('true');
        expect(parseNode(draft).data.get('draft')).toBe('true');
        expect(parseApp(live).data.get('draft')).toBe('false');
        expect(parseNode(live).data.get('draft')).toBe('false');
    });
});
