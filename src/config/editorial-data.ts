import type { Project, ExperienceItem, SkillGroup } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Unity VR Developer, Research Assistant',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Built and maintained interactive maritime emergency scenarios in Unity (C#) deployed on Meta Quest headsets for training research.',
            'Implemented locomotion, object manipulation, and scenario state flows using XR Interaction Toolkit and OpenXR.',
            'Ran 12 structured playtest sessions with researchers and trainees, iterating on grab affordances and input boundaries based on user feedback.',
            'Wrote reproducible hardware setup documentation and troubleshooting notes for centre staff.',
        ],
        stack: [
            'Unity (C#)',
            'Meta Quest',
            'XR Interaction Toolkit',
            'OpenXR',
            'Hand Tracking',
            'HMD Deployment',
        ],
    },
];

export const PROJECTS: Project[] = [
    {
        id: 'maritime-vr',
        title: 'Methanol Bunkering Safety VR Training',
        role: 'Unity VR Developer',
        summary:
            'Interactive VR safety training scenarios for maritime emergency response and clean fuel handling research at SP CEMS.',
        context:
            'Centre of Excellence in Maritime Safety (CEMS), Singapore Polytechnic (Apr 2025 – Feb 2026)',
        whatIBuilt:
            'Built modular C# state machines for step-by-step emergency procedures and integrated OpenXR for consistent controller mapping across headsets. Tuned dynamic LOD and draw call batching to maintain 90 FPS on standalone Quest hardware.',
        technicalDecisions:
            'Enforced explicit step preconditions in the scenario state machine to prevent trainees from accidentally skipping critical safety protocols during drills.',
        tools: ['Unity 3D', 'C#', 'XR Interaction Toolkit', 'OpenXR', 'Meta Quest'],
        outcome:
            'Deployed in 12 structured lab sessions over 11 months, providing researchers with consistent simulation data and staff with independent setup guides.',
        videoPreview: '/images/projects/methanol-bunkering-preview.mp4',
        links: [
            {
                label: 'Experience Details',
                href: '#experience',
            },
        ],
    },
    {
        id: 'jewelry-robbery-vr',
        title: 'Bare-Hand Gesture Interaction Mechanics (Meta Quest VR)',
        role: 'Unity VR Developer',
        summary:
            'Controller-free VR prototype built for Meta Quest exploring bare-hand tracking and gesture physics.',
        context: 'Independent VR project focused on controller-free interaction (2025)',
        whatIBuilt:
            'Implemented custom gesture recognition mechanics, physics-based grab affordances, and spatial audio feedback in C# using the Meta XR SDK without physical controllers.',
        technicalDecisions:
            'Added velocity smoothing filters and intentional dwell thresholds to eliminate false-positive pinch triggers during fast hand movements.',
        tools: ['Unity 3D', 'C#', 'Meta XR SDK', 'Hand Tracking', 'Meta Quest'],
        outcome:
            'Delivered a responsive controller-free build running at a stable 72/90 FPS with predictable physics handling.',
        videoPreview: '/images/projects/jewelry-robbery-preview.mp4',
        links: [
            {
                label: 'View on GitHub',
                href: 'https://github.com/sawyehtet-dev/Jewelry-Shop-Robbery-game-with-Meta-Quest-hand-tracking',
            },
        ],
    },
    {
        id: 'tokey',
        title: 'Tokey – Developer Tooling CLI',
        role: 'Developer',
        summary:
            'Real-time per-prompt token cost tracker CLI for Claude Code, built to monitor LLM usage directly in developer terminal workflows.',
        context: 'Independent open-source CLI tool (2026)',
        whatIBuilt:
            'Built an asynchronous Python CLI tool that parses terminal event streams in real time to calculate live token usage and per-prompt cost estimations without latency overhead.',
        technicalDecisions:
            'Re-architected from transcript scraping to direct session stream parsing, eliminating fragile external dependencies and simplifying the codebase.',
        tools: ['Python', 'pytest', 'TDD', 'MIT License', 'Git'],
        outcome:
            'Published as an open-source CLI package on GitHub backed by a 293-test unit test suite built with Test-Driven Development (TDD).',
        videoPreview: '/images/projects/tokey-preview.mp4',
        links: [
            {
                label: 'View on GitHub',
                href: 'https://github.com/sawyehtet-dev/tokey',
            },
            {
                label: 'LinkedIn Post',
                href: 'https://www.linkedin.com/posts/sawyehtet_i-made-a-small-tool-for-claude-code-cli-called-ugcPost-7472600055208865792-RM7I/',
            },
        ],
    },
    {
        id: 'web-platform',
        title: 'Modern Web Architecture & Editorial Platform',
        role: 'Frontend & Web Developer',
        summary:
            'Lightweight, SSR-prerendered personal web platform built with React 19, TypeScript, and a vanilla CSS design system.',
        context: 'Independent web engineering project (2026)',
        whatIBuilt:
            'Built a lightweight single-page web app with Node-based static SSR prerendering for instant first paint, responsive typography, semantic accessibility, and native HTML constraint validation.',
        technicalDecisions:
            'Built without heavy UI or validation libraries to keep the total client bundle under 25 kB while maintaining 100/100 Lighthouse performance.',
        tools: ['React 19', 'TypeScript', 'Vite', 'Vanilla CSS', 'SSR Prerender', 'Vitest', 'GitHub Actions'],
        outcome:
            'Delivered zero-layout-shift rendering, deterministic build-time feed and sitemap generation, and clean CI test gates.',
        links: [
            {
                label: 'View on GitHub',
                href: 'https://github.com/sawyehtet-dev/portfolio',
            },
        ],
    },
];

export const SKILLS: SkillGroup[] = [
    {
        category: 'Web & Backend',
        tools: [
            'React',
            'TypeScript',
            'JavaScript',
            'Node.js',
            'REST APIs',
            'Java',
            'SQL',
            'HTML5 / CSS3',
        ],
    },
    {
        category: 'Game & XR Development',
        tools: [
            'Unity 3D',
            'C#',
            'XR Interaction Toolkit',
            'OpenXR',
            'Meta Quest',
            'Hand Tracking',
            'HMD Deployment',
        ],
    },
    {
        category: 'Programming Languages',
        tools: ['Java', 'C#', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
        category: 'Engineering & Tools',
        tools: [
            'Test-Driven Development (TDD)',
            'pytest',
            'Git & GitHub',
            'Linux CLI',
            'Postman',
            'Vite',
        ],
    },
];

