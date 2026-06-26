import type { Project, ExperienceItem, StatItem, Testimonial } from '../types';

// Editorial content for the site: the / portfolio, the /writing feed, and posts.
// PROJECTS, EXPERIENCE, STATS, TESTIMONIALS, and EDITORIAL_SKILLS are consumed by
// the section components in src/site/sections/.

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Research Assistant & Software Developer',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Set up, configured, and troubleshot a Unity VR training system on Meta Quest 3 headsets and bHaptics gloves, keeping user sessions running.',
            'Owned testing end to end: designed and ran structured user testing sessions and turned the findings into clear, actionable reports for the dev team.',
            'Reproduced reported issues with exact steps, tracked them to resolution, and wrote setup and troubleshooting guides so other staff could run the system without me.',
        ],
        stack: ['Troubleshooting', 'User Testing', 'QA', 'Technical Writing', 'Unity / C#'],
    },
];

// Hero stats ribbon. Every figure here is something already evidenced further
// down the page (Experience bullets, the Tokey write-up) - pulled up so a
// recruiter sees the proof in the first scroll. No GPA, no padded counts.
export const STATS: StatItem[] = [
    {
        value: '1',
        unit: 'yr',
        label: 'Hands-on technical experience: setup, troubleshooting, testing, and docs at CEMS.',
    },
    {
        value: '70+',
        label: 'Tests behind my open-source tool, written test-first before I trusted it.',
    },
    {
        value: '50',
        unit: '%',
        label: "Of that tool's code cut in a refactor - the tests caught everything, so nothing regressed.",
    },
];

// Social proof. Renders only when a real, attributed quote is present - an
// empty array renders nothing, so no placeholder ever ships. Fill with one line
// from your CEMS supervisor (reliability / QA) when you have it.
export const TESTIMONIALS: Testimonial[] = [];

export const PROJECTS: Project[] = [
    {
        id: 'tokey',
        title: 'Tokey',
        role: 'Developer & Maintainer',
        summary:
            'A live token-cost panel for Claude Code. It shows IN / OUT / CACHE counts while you work. I run it every session, so I covered the counting logic with 70+ tests before I trusted a number it printed.',
        problem:
            'I use it constantly, so a wrong number is worse than no number at all: I would read it, believe it, and act on bad math without noticing. I did not want a tool I had to babysit.',
        solution:
            'I wrote the tests first, covering the token math and the session-discovery path, then built the tool on top of them. They act as the spec, so a later refactor cannot quietly change what the counts mean.',
        impact: 'That let me delete about half the original code, dropping a fragile transcript dependency for direct session discovery, with nothing regressing. I have run it daily since without rechecking its math by hand.',
        techStack: ['Python', 'Rich', 'Standard library', 'MIT'],
        platform: 'Command-line tool',
        proofPoints: [
            'Wrote the test suite before the tool was usable, not after it shipped.',
            'Leaned on it to swap a fragile transcript dependency for direct session discovery.',
            'Zero-config, MIT-licensed, and runs on both Windows and Linux.',
        ],
        links: [
            {
                label: 'View on GitHub',
                href: 'https://github.com/sawyehtet-dev/tokey',
                icon: 'github',
            },
        ],
        featured: true,
        icon: 'terminal',
        status: 'completed',
    },
];

// Skill groups for the Skills section on the front door.
export const EDITORIAL_SKILLS = [
    {
        title: 'IT Support',
        skills: [
            'Troubleshooting & issue diagnosis',
            'Issue reproduction & defect tracking',
            'User support & technical documentation',
            'Windows (daily use) · Linux (CLI, scripting)',
        ],
    },
    {
        title: 'Software QA',
        skills: [
            'End-to-end, functional & user testing',
            'Test case design & UAT',
            'pytest & test-driven development',
            'Reads & writes code - tests from the inside',
        ],
    },
    {
        title: 'Code & tools',
        skills: ['Python', 'React & TypeScript', 'Git (clean, atomic history)'],
    },
    {
        title: 'Currently learning',
        skills: [
            'SQL (SQLBolt)',
            'Computer networking (Coursera)',
            'Microsoft 365 Fundamentals (MS-900)',
        ],
    },
] as const;
