import type { Project, ExperienceItem, SkillGroup } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Unity VR Developer, Research Assistant',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Sole Unity VR developer for maritime safety research: designed, built, and maintained training scenarios used in live lab sessions on commercial HMDs over 11 months.',
            'Implemented C# systems for locomotion, grab/interact, and multi-step scenario flow used by researchers and trainees.',
            'Integrated XR Interaction Toolkit and OpenXR-compatible input, keeping controller and headset behaviour stable across demo days.',
            'Wrote setup guides and known-issue notes so centre staff could reproduce demos independently.',
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
        role: 'Primary Unity VR Developer',
        summary:
            'Interactive VR safety training scenarios for maritime emergency response and clean fuel handling research at SP CEMS.',
        context:
            'Centre of Excellence in Maritime Safety (CEMS), Singapore Polytechnic (Apr 2025 – Feb 2026)',
        whatIBuilt:
            'Engineered modular, event-driven C# state machines and OpenXR interaction systems to support multi-headset deployments without duplicating logic. Optimized draw call batching and dynamic LOD tuning to maintain sub-11ms frame rendering (90 FPS) on standalone Quest hardware.',
        tools: ['Unity 3D', 'C#', 'XR Interaction Toolkit', 'OpenXR', 'Meta Quest HMDs'],
        outcome:
            'Deployed in live maritime research lab sessions across 12 structured playtests, with operational setup guides authored for staff.',
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
        title: 'Bare-Hand Gesture Physics & Interaction Mechanics (Meta Quest VR)',
        role: 'Unity VR Developer',
        summary:
            'Controller-free VR heist prototype built for Meta Quest using bare-hand tracking and custom gesture physics.',
        context: 'Independent VR project focused on controller-free interaction (2025)',
        whatIBuilt:
            'Engineered custom gesture recognition mechanics, physics-driven grab affordances, and spatial audio feedback using Meta XR SDK without physical controllers, tuning interaction boundaries to eliminate false gesture triggers.',
        tools: ['Unity 3D', 'C#', 'Meta XR SDK', 'Hand Tracking', 'Meta Quest'],
        outcome:
            'Shipped Quest-ready Unity build running at a stable 72/90 FPS with responsive bare-hand interaction mechanics.',
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
        title: 'Tokey – Developer Tooling & Systems Architecture CLI',
        role: 'Author & Developer',
        summary:
            'Real-time per-prompt token cost tracker CLI tool for Claude Code, built to monitor LLM usage directly in developer terminal workflows.',
        context: 'Independent open-source CLI tool demonstrating Test-Driven Development (TDD) discipline (2026)',
        whatIBuilt:
            'Engineered an asynchronous Python CLI tool that parses streaming terminal logs in real time to calculate live token usage and per-prompt cost estimations without latency overhead.',
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
];

export const SKILLS: SkillGroup[] = [
    {
        category: 'Languages',
        tools: ['C#', 'Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
    },
    {
        category: 'XR & Interactive 3D',
        tools: [
            'Unity',
            'XR Interaction Toolkit',
            'OpenXR',
            'Meta Quest',
            'Hand Tracking',
            'HMD Build & Deploy',
        ],
    },
    {
        category: 'Engineering & Tools',
        tools: ['Test-Driven Development (TDD)', 'pytest', 'Git & GitHub', 'Linux CLI', 'React', 'Vite', 'Postman'],
    },
];

