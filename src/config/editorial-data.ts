import type { Project, ExperienceItem, EducationItem, SkillGroup } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Software Developer (XR Systems), Research Assistant',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            "Architected and maintained modular C# simulation systems and runtime environments used across the centre's maritime safety research programmes on Meta Quest hardware.",
            'Owned the delivery loop end to end: translated domain requirements into configurable state-machine scenario flows, shipped standalone builds, and ran iterative user testing with trainees.',
            'Authored reproducible developer setup and troubleshooting guides that ensured codebase and lab continuity, enabling non-technical staff to run sessions independently.',
        ],
        stack: ['C#', 'Unity', 'Modular Architecture', 'Meta Quest', 'XR Interaction Toolkit'],
    },
];

export const EDUCATION: EducationItem[] = [
    {
        institution: 'Singapore Polytechnic',
        degree: 'Diploma in Information Technology',
        period: '2023 – 2026',
        location: 'Singapore',
        bullets: [
            'Graduated with a GPA of 3.55/4, building a solid foundation in full-stack software development, data structures, and computer networking.',
            'Focused coursework and projects on full-stack web applications, REST APIs, relational databases, and interactive C# simulation engines.',
        ],
    },
];

export const PROJECTS: Project[] = [
    {
        id: 'tokey',
        title: 'Tokey: Token & Cost Tracker for Claude Code',
        role: 'Developer (Python)',
        summary:
            'Real-time per-prompt token and cost tracker for Claude Code, built to make LLM spend visible inside the terminal while the work is still running.',
        context: 'Independent open-source CLI tool (2026)',
        whatIBuilt:
            'Built an asynchronous Python CLI that parses terminal event streams in real time to calculate live token usage and per-prompt cost, without scraping external transcripts or adding latency to the session. Developed test-first: every parser branch and pricing rule was specified as a failing test before it was written.',
        tools: ['Python', 'pytest', 'TDD', 'CLI Architecture', 'Git'],
        outcome:
            'Surfaces the running cost of a session as it happens, so an expensive agent run can be stopped mid-flight instead of discovered on the invoice. Open source, with a 293-test suite guarding the parsing and pricing paths.',
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
        role: 'Software Developer (C# / Unity)',
        summary:
            'Interactive VR training simulation for maritime emergency response and clean fuel handling, built with Unity for safety research at SP CEMS.',
        context:
            'Centre of Excellence in Maritime Safety (CEMS), Singapore Polytechnic (Apr 2025 – Feb 2026)',
        whatIBuilt:
            'Designed a modular C# state-machine architecture with explicit step preconditions for configurable training scenarios, integrating OculusXR and XR Interaction Toolkit for reliable operator-facing interactions on Quest controllers. Tuned dynamic LOD and draw call batching to maintain 90 FPS on standalone hardware.',
        tools: [
            'C#',
            'Unity 3D',
            'Modular Architecture',
            'XR Interaction Toolkit',
            'OculusXR',
            'Meta Quest',
        ],
        outcome:
            'Deployed in 12 structured lab sessions over 11 months, giving researchers consistent simulation data and staff documentation to run sessions independently.',
        videoPreview: '/images/projects/methanol-bunkering-preview.mp4',
        links: [],
    },
    {
        id: 'jewelry-robbery-vr',
        title: 'Jewelry Shop Robbery VR',
        role: 'Software Developer (C# / Unity)',
        summary:
            'Immersive VR heist game built for Meta Quest featuring bHaptics haptic feedback gloves and hand tracking mechanics.',
        context: 'Independent VR project focused on haptic feedback & hand tracking (2025)',
        whatIBuilt:
            'Integrated bHaptics haptic gloves SDK and Meta Interaction SDK over OpenXR in C#, calibrating per-finger actuation profiles and velocity thresholds to differentiate delicate object grasping from high-impact physical interactions.',
        tools: [
            'C#',
            'Unity 3D',
            'Meta Interaction SDK',
            'OpenXR',
            'bHaptics SDK',
            'Meta Quest',
            'Hand Tracking',
            'Haptic Feedback',
        ],
        outcome:
            'Haptic response lands in the same frame as the grab that caused it, holding a stable 72/90 FPS on-device so what the player feels never drifts from what they see.',
        videoPreview: '/images/projects/jewelry-robbery-preview.mp4',
        links: [
            {
                label: 'View on GitHub',
                href: 'https://github.com/sawyehtet-dev/Jewelry-Shop-Robbery-game-with-Meta-Quest-hand-tracking',
            },
        ],
    },
];

export const SKILLS: SkillGroup[] = [
    {
        category: 'Full-Stack & Web',
        tools: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'SQL'],
    },
    {
        category: 'Programming Languages',
        tools: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C#', 'SQL'],
    },
    {
        category: 'Engineering & DevOps',
        tools: ['Test-Driven Development (TDD)', 'Git & GitHub', 'Linux CLI', 'pytest'],
    },
    {
        category: 'Interactive & Systems',
        tools: [
            'Unity 3D (C#)',
            'Modular Architecture',
            'Performance Optimization',
            'Meta Quest / OpenXR',
        ],
    },
];
