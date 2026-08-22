import type { Project, ExperienceItem, SkillGroup } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Unity VR Developer, Research Assistant',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Built and maintained Unity (C#) VR training scenarios used across the centre\'s maritime safety research programmes on Meta Quest hardware.',
            'Owned the delivery loop end to end: translating researcher requirements into scenario flows, shipping builds, and running user testing with trainees.',
            'Authored reproducible setup and troubleshooting guides that let centre staff run lab sessions without developer support.',
        ],
        stack: ['Unity (C#)', 'Meta Quest', 'XR Interaction Toolkit', 'OculusXR'],
    },
];

export const PROJECTS: Project[] = [
    {
        id: 'tokey',
        title: 'Tokey: Token & Cost Tracker for Claude Code',
        role: 'Developer',
        summary:
            'Real-time per-prompt token cost tracker CLI for Claude Code, built to monitor LLM usage directly in developer terminal workflows.',
        context: 'Independent open-source CLI tool for Claude Code (2026)',
        whatIBuilt:
            'Built an asynchronous Python CLI tool that parses terminal event streams in real time to calculate live token usage and per-prompt cost estimations directly without external transcript scraping dependencies or latency overhead.',
        tools: ['Python', 'pytest', 'CLI Architecture', 'Git'],
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
        id: 'maritime-vr',
        title: 'Methanol Bunkering Safety VR Training',
        role: 'Unity VR Developer',
        summary:
            'Interactive VR safety training scenarios for maritime emergency response and clean fuel handling research at SP CEMS.',
        context:
            'Centre of Excellence in Maritime Safety (CEMS), Singapore Polytechnic (Apr 2025 – Feb 2026)',
        whatIBuilt:
            'Built modular C# state machines with explicit step preconditions for maritime emergency procedures, integrating OculusXR and XR Interaction Toolkit for reliable Quest controller mapping. Tuned dynamic LOD and draw call batching to maintain 90 FPS on standalone Quest hardware.',
        tools: ['Unity 3D', 'C#', 'XR Interaction Toolkit', 'OculusXR', 'Meta Quest'],
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
        title: 'Jewelry Shop Robbery VR',
        role: 'Unity VR Developer',
        summary:
            'Immersive VR heist game built for Meta Quest featuring bHaptics haptic feedback gloves and hand tracking mechanics.',
        context: 'Independent VR project focused on haptic feedback & hand tracking (2025)',
        whatIBuilt:
            'Integrated bHaptics haptic gloves SDK and Meta Interaction SDK over OpenXR in C#, calibrating per-finger actuation profiles and velocity thresholds to differentiate delicate object grasping from high-impact physical interactions.',
        tools: [
            'Unity 3D',
            'C#',
            'Meta Interaction SDK',
            'OpenXR',
            'bHaptics SDK',
            'Meta Quest',
            'Hand Tracking',
            'Haptic Feedback',
        ],
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
];

export const ARCHIVED_PROJECTS: Project[] = [
    {
        id: 'hand-tracking-bunkering',
        title: 'Hand-Tracking Bunkering Safety VR',
        role: 'Unity VR Developer',
        summary:
            'Controller-free rebuild of the centre\'s methanol bunkering safety trainer: same scenario scenes and scripts, re-driven entirely by tracked hands.',
        context:
            'Centre of Excellence in Maritime Safety (CEMS), Singapore Polytechnic (2026)',
        whatIBuilt:
            'Commissioned to convert the controller-based bunkering trainer to hand tracking. Ported the interaction layer on top of the proven gesture system from an independent Quest game: pinch-driven UI navigation, walkie-talkie reporting, PPE locker equipping, and hose/flange inspection validated by gesture input over the existing scenario state machines.',
        tools: [
            'Unity 3D',
            'C#',
            'Meta Interaction SDK',
            'OpenXR',
            'Meta Quest',
            'Hand Tracking',
        ],
        outcome:
            'Working Quest build running the full report, PPE, and inspection loop without controllers, validating optical hand tracking as a viable input direction for the centre\'s training programmes.',
        videoPreview: '/images/projects/hand-tracking-bunkering-preview.mp4',
        links: [
            {
                label: 'Experience Details',
                href: '#experience',
            },
        ],
    },
];

export const SKILLS: SkillGroup[] = [
    {
        category: 'Programming Languages',
        tools: ['Java', 'C#', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
        category: 'Game & XR Development',
        tools: [
            'Unity 3D (C#)',
            'Meta Interaction SDK',
            'XR Interaction Toolkit',
            'OpenXR',
            'OculusXR',
            'bHaptics SDK',
            'Meta Quest',
            'Hand Tracking',
            'HMD Deployment',
        ],
    },
    {
        category: 'Web & Backend',
        tools: ['React', 'Node.js', 'REST APIs', 'HTML5 / CSS3'],
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
