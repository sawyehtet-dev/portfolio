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
        title: 'Jewelry Shop Robbery VR (bHaptics Gloves & Hand Tracking)',
        role: 'Unity VR Developer',
        summary:
            'Immersive VR heist game built for Meta Quest featuring bHaptics haptic feedback gloves and hand tracking mechanics.',
        context: 'Independent VR project focused on haptic feedback & hand tracking (2025)',
        whatIBuilt:
            'Integrated bHaptics haptic gloves SDK and Meta Quest hand tracking in C#, mapping custom tactile feedback profiles, gesture grab affordances, and spatial audio to physical heist interactions.',
        technicalDecisions:
            'Calibrated per-finger actuation profiles and velocity thresholds to differentiate delicate object grasping from high-impact physical interactions like glass shattering.',
        tools: ['Unity 3D', 'C#', 'bHaptics SDK', 'Meta Quest', 'Hand Tracking', 'Haptic Feedback'],
        outcome:
            'Delivered a responsive APK build for Meta Quest running at a stable 72/90 FPS with synchronized tactile haptic responses.',
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
            'bHaptics SDK',
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
