import type { Project, ExperienceItem, StatItem, Testimonial } from '../types';

// Editorial content for the site: the / portfolio, the /writing feed, and posts.
// PROJECTS, EXPERIENCE, STATS, TESTIMONIALS, SKILL_LANES, and SKILL_BANDS are all
// consumed by the section components in src/site/sections/.

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'QA & Support',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Set up, configured, and troubleshot a Unity VR training system on Meta Quest 3 headsets and bHaptics gloves, keeping user sessions running.',
            'Ran testing end to end: designed and ran user testing sessions, and turned the findings into reports for the dev team.',
            'Reproduced reported issues with exact steps, tracked them to resolution, and wrote setup and troubleshooting guides so other staff could run the system without me.',
        ],
        stack: ['Troubleshooting', 'User Testing', 'QA', 'Technical Writing', 'Unity / C#'],
    },
];

// Hero stats ribbon. Every figure is evidenced further down the page. The ribbon
// sizes itself to the count, so any length works - but a third entry should come
// from the CEMS work, not Tokey, to keep the primary lane in front.
export const STATS: StatItem[] = [
    {
        value: '1',
        unit: 'yr',
        label: 'Technical experience: setup, troubleshooting, testing, and docs at CEMS.',
    },
    {
        value: '293',
        label: 'Tests behind Tokey, my open-source tool - the spec its code is written against.',
    },
];

// Social proof. Renders only when a real, attributed quote is present - an
// empty array renders nothing, so no placeholder ever ships. Fill with one line
// from your CEMS supervisor (reliability / QA) when you have it.
export const TESTIMONIALS: Testimonial[] = [];

// Figures here are checkable against the tokey repo (README, CHANGELOG,
// pyproject.toml, `grep -c 'def test_' tests/`). Check before editing - this
// entry has drifted from the repo once already.
export const PROJECTS: Project[] = [
    {
        id: 'tokey',
        title: 'Tokey',
        role: 'Developer & Maintainer',
        summary:
            'A live terminal panel showing what each Claude Code prompt costs, in tokens and in dollars.',
        problem:
            "Claude Code's statusline tells you how full your context is, but never what the last turn actually spent. That per-prompt number is the one worth seeing while you can still change how you are asking, not after the session has ended.",
        solution:
            'I wrote the tests as the spec: 293 of them, across the token math, the per-model pricing, and session discovery. The rules live in the suite, so a later refactor cannot quietly change what a number means.',
        impact: 'That is what let me delete the superseded single-session renderer - roughly 1,100 lines no entry point could still reach, plus its 562-line test file - and show the change was safe rather than hope it was: the rendered output stayed byte-identical.',
        platform: 'Command-line tool',
        facts: [
            { key: 'Tests', value: '293, across pricing, parsing, and session discovery' },
            { key: 'Stack', value: 'Python 3.11+ · Rich, its only dependency' },
            { key: 'Runs on', value: 'Linux · macOS · Windows' },
            { key: 'License', value: 'MIT' },
        ],
        links: [
            {
                label: 'View on GitHub',
                href: 'https://github.com/sawyehtet-dev/tokey',
            },
        ],
    },
];

// The two target lanes, set side by side. These are claims, so they render as
// running text - boxing a phrase in a chip makes the eye skim it as a tag.
export const SKILL_LANES = [
    {
        rank: 'Primary lane',
        title: 'IT Support',
        skills: [
            'Troubleshooting & issue diagnosis',
            'Issue reproduction & defect tracking',
            'User support & technical documentation',
            'Windows (daily use) · Linux (CLI, scripting)',
        ],
    },
    {
        rank: 'Secondary lane',
        title: 'Software QA',
        skills: [
            'End-to-end, functional & user testing',
            'Test case design & UAT',
            'pytest & test-driven development',
            'Reads & writes code - tests from the inside',
        ],
    },
] as const;

// Single tokens, so these stay chips. `note` renders in the accent under the
// label - CLAUDE.md's tools rule requires it on coursework.
export const SKILL_BANDS = [
    {
        title: 'Tools',
        skills: ['Python', 'React & TypeScript', 'Git (clean, atomic history)'],
    },
    {
        title: 'Learning',
        note: 'in progress',
        skills: ['SQL (SQLBolt)', 'Computer networking (Coursera)', 'Azure Fundamentals (AZ-900)'],
    },
] as const;
