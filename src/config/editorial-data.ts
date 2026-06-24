import type { Project, ExperienceItem } from '../types';

// Editorial front-door content (the / portfolio, /writing, posts). Kept in its
// own module - separate from the desktop-only data in ./data.ts (virtual
// filesystem, boot logs, wallpapers, terminal easter eggs, app definitions) -
// so the eager front-door bundle doesn't drag that desktop data in. data.ts
// re-exports PROJECTS for the desktop apps that still consume it.

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Research Assistant & Software Developer',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Profiled a Unity VR app frame by frame and cleared the bottlenecks holding it back, getting it to a stable 72 FPS on the target headset.',
            'Sat with maritime subject-matter experts to turn their real procedures into technical specs, then tested each feature back against how the work is actually done.',
            'Ran QA and documentation across the hardware (Meta Quest 3, bHaptics gloves), logging exact reproduction steps so a bug could be retraced instead of re-guessed.',
        ],
        stack: ['Unity', 'C#', 'Profiling', 'QA', 'Technical Writing'],
    },
];

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

// Editorial homepage only. The desktop SkillsApp still uses SKILL_CATEGORIES.
export const EDITORIAL_SKILLS = [
    {
        title: 'Support & QA',
        skills: [
            'Log analysis & troubleshooting',
            'Incident triage & escalation',
            'Manual & API testing (Postman)',
        ],
    },
    {
        title: 'Technical',
        skills: [
            'SQL querying & debugging',
            'Linux & shell',
            'Git & version control',
            'REST / HTTP debugging',
        ],
    },
    {
        title: 'Languages',
        skills: ['Python', 'JavaScript / TypeScript'],
    },
] as const;
