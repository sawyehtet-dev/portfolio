import type { Project, ExperienceItem, StatItem, Testimonial } from '../types';

// Editorial content for the site: the portfolio, writing feed, and projects.
// Highlighted role: Unity VR Developer (Meta Quest, Hand Tracking & Immersive Training).

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Unity VR Developer, Research Assistant',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Primary Unity VR developer for maritime safety research: designed, built, and maintained training scenarios used in live lab sessions on commercial HMDs (~11 months).',
            'Implemented C# systems for locomotion, grab/interact, and multi-step scenario flow used by researchers and trainees.',
            'Integrated XR Interaction Toolkit and OpenXR-compatible input so controller and headset behaviour stayed stable on demo days.',
            'Ran 12 structured playtests; turned feedback into concrete interaction, UX, and scene revisions before the next session.',
            'Wrote setup guides and known-issue notes so centre staff could reproduce demos without reverse-engineering the project.',
        ],
        stack: [
            'Unity',
            'C#',
            'Meta Quest',
            'XR Interaction Toolkit',
            'OpenXR',
            'Hand Tracking',
            'HMD Deployment',
        ],
    },
];

// Hero stats ribbon.
export const STATS: StatItem[] = [
    {
        value: '11',
        unit: 'mos',
        label: 'Unity VR development at CEMS building live immersive training scenarios on commercial HMDs.',
    },
    {
        value: '12',
        label: 'Structured VR playtests conducted & iterated for interaction feel, UX, and stability.',
    },
    {
        value: '293',
        label: 'Tests behind Tokey, my open-source CLI tool — built with test-driven precision.',
    },
];

// Social proof.
export const TESTIMONIALS: Testimonial[] = [];

// Featured projects highlighting Unity VR development and software engineering.
export const PROJECTS: Project[] = [
    {
        id: 'maritime-vr',
        title: 'Maritime Safety VR Training',
        role: 'Primary Unity VR Developer',
        summary:
            'End-to-end immersive training for a maritime research centre: interaction logic, scene assembly, device deployment, and iteration with real users.',
        problem:
            'Maritime safety trainees needed realistic, reproducible multi-step emergency and operational scenarios without physical hazards during live research sessions.',
        solution:
            'Designed modular C# interaction systems for locomotion and object interaction using XR Interaction Toolkit and OpenXR. Ran 12 structured playtests to refine UX and interaction stability.',
        impact:
            'Successfully deployed stable VR builds on commercial HMDs for ~11 months of live lab sessions and authored comprehensive setup documentation for centre staff.',
        platform: 'Unity · C# · Meta Interaction SDK · HMD Deploy',
        facts: [
            { key: 'Context', value: 'Centre of Excellence in Maritime Safety (2025–2026)' },
            { key: 'Stack', value: 'Unity · C# · Meta Interaction SDK · OpenXR' },
            { key: 'Deployment', value: 'Commercial HMDs & standalone VR headsets' },
            { key: 'User Testing', value: '12 structured playtest iterations' },
        ],
        links: [
            {
                label: 'Experience Details',
                href: '#experience',
            },
        ],
    },
    {
        id: 'jewelry-robbery-vr',
        title: 'Jewelry Shop Robbery - Meta Quest VR',
        role: 'Unity VR Developer',
        summary:
            'VR heist game on Meta Quest using hand tracking instead of controllers, with gesture grabs and interact inside a jewelry shop.',
        problem:
            'Controller-less VR interaction often suffers from unstable gesture recognition and awkward physics affordances during fast-paced interactions.',
        solution:
            'Tuned interaction feel for bare hands: tracking-friendly affordances, custom gesture grab thresholds in C# using Meta Quest Hand Tracking, and optimized scene layout.',
        impact:
            'Shipped an intuitive, controller-free VR heist experience with natural hand gestures and Quest-ready standalone performance.',
        platform: 'Meta Quest · Unity · Hand Tracking',
        facts: [
            { key: 'Project', value: 'Personal VR Title (2025)' },
            { key: 'Stack', value: 'Unity 3D · C# · Meta Quest Hand Tracking' },
            { key: 'Input Method', value: 'Bare-hand gestures (controller-free)' },
            { key: 'Build Target', value: 'Meta Quest Standalone' },
        ],
        links: [],
    },
    {
        id: 'tokey',
        title: 'Tokey - Open-Source CLI',
        role: 'Developer & Maintainer',
        summary:
            'A real-time per-prompt token cost tracker for Claude Code. Public release with 70+ unit tests; small, fast, and byte-identical precision.',
        problem:
            "Claude Code's statusline tells you how full your context is, but never what the last turn actually spent. That per-prompt number is the one worth seeing while you can still change how you ask.",
        solution:
            'Wrote 293 tests across token math, per-model pricing, and session discovery. The rules live in the suite, ensuring refactors stay safe.',
        impact:
            'Released open-source on GitHub with full test coverage and zero third-party dependencies beyond Rich.',
        platform: 'Python 3.11+ CLI Tool',
        facts: [
            { key: 'Tests', value: '293, across pricing, parsing, and session discovery' },
            { key: 'Stack', value: 'Python 3.11+ · Rich' },
            { key: 'Platforms', value: 'Linux · macOS · Windows' },
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

// The two target lanes: Primary lane is Unity VR Development.
export const SKILL_LANES = [
    {
        rank: 'Primary lane',
        title: 'Unity VR Development',
        skills: [
            'Unity & C# interaction systems & scenario flow logic',
            'XR Interaction Toolkit, OpenXR & Meta Interaction SDK',
            'Meta Quest bare-hand tracking & gesture interaction design',
            'HMD build, deployment, locomotion & interaction polish',
        ],
    },
    {
        rank: 'Secondary lane',
        title: 'VR UX, Playtesting & Software Fundamentals',
        skills: [
            'Structured playtesting (12+ iterations), feedback loop & UX polish',
            'Technical documentation, setup guides & known-issue notes',
            'Python CLI tools, test-driven development (pytest, 293+ tests)',
            'TypeScript, React, SQL, Java & Linux CLI',
        ],
    },
] as const;

// Single tokens / skill chips.
export const SKILL_BANDS = [
    {
        title: 'VR / 3D',
        skills: [
            'Unity',
            'C#',
            'Meta Quest',
            'Bare-hand Tracking',
            'XR Interaction Toolkit',
            'OpenXR Input',
            'HMD Build & Deploy',
        ],
    },
    {
        title: 'Software & Tools',
        skills: [
            'Python',
            'TypeScript',
            'JavaScript',
            'React & Vite',
            'Git',
            'Linux CLI',
            'pytest',
            'SQL',
            'Java',
        ],
    },
    {
        title: 'Certifications & Auth',
        skills: [
            'AI Ethics & Governance (Associate)',
            'Microsoft MD-102 (in progress)',
            'Requires S Pass Sponsorship (Singapore-based)',
        ],
    },
] as const;
