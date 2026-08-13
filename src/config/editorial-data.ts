import type { Project, ExperienceItem, SkillGroup } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Unity VR Developer, Research Assistant',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Sole Unity VR developer for maritime safety research: designed, built, and maintained Methanol Bunkering Safety VR training scenarios used in live lab sessions on commercial HMDs.',
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
            'Interactive VR safety training scenarios for maritime emergency response and clean fuel handling research.',
        context:
            'Centre of Excellence in Maritime Safety (CEMS), Singapore Polytechnic (Apr 2025 – Feb 2026)',
        whatIBuilt:
            'Engineered modular C# interaction systems for locomotion, object manipulation, pre-bunkering safety inspections, hose leak response, and multi-stage state machines deployed in live research sessions.',
        technicalDecisions:
            'Standardized input on OpenXR and XR Interaction Toolkit to support multiple commercial headsets without duplicating interaction logic. Integrated event-driven state handling to decouple scenario steps from visual assets.',
        tools: ['Unity 3D', 'C#', 'XR Interaction Toolkit', 'OpenXR', 'Meta Quest HMDs'],
        constraints:
            'Hardware performance budgets on standalone HMDs required draw call batching, dynamic LOD tuning, and sub-11ms frame rendering (90 FPS) to eliminate trainee motion discomfort.',
        outcome:
            'Deployed in live maritime research lab sessions, conducting 12 structured playtests and authoring operational setup documentation for centre staff.',
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
        title: 'Jewelry Shop Robbery – Meta Quest VR Game',
        role: 'Unity VR Developer',
        summary:
            'Controller-free VR heist prototype built for Meta Quest using bare-hand tracking and custom gesture interaction mechanics.',
        context: 'Independent VR project focused on controller-free interaction (2025)',
        whatIBuilt:
            'Engineered custom gesture-based interaction mechanics, physics-driven grab affordances, and item manipulation triggers using Meta XR SDK without physical controllers.',
        technicalDecisions:
            'Optimized hand-tracking pose detection and visual affordances, tuning interaction boundaries to eliminate false gesture triggers during fast gameplay.',
        tools: ['Unity 3D', 'C#', 'Meta XR SDK', 'Hand Tracking', 'Meta Quest'],
        constraints:
            'Controller-free hand tracking lacks physical button feedback; designed visual and spatial audio affordances to reinforce grab and release state recognition.',
        outcome:
            'Shipped Quest-ready Unity build running at stable 72/90 FPS with responsive bare-hand interaction mechanics.',
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
        title: 'Tokey – Open-Source CLI',
        role: 'Author & Developer',
        summary:
            'Real-time per-prompt token cost tracker CLI tool for Claude Code, built to monitor LLM usage directly in developer terminal workflows.',
        context: 'Independent open-source CLI tool built to solve terminal cost-visibility friction (2026)',
        whatIBuilt:
            'Engineered a Python CLI tool that parses Claude Code streams in real time to calculate live token usage and per-prompt cost estimations.',
        technicalDecisions:
            'Architected using Test-Driven Development (TDD) with 293 unit tests, ensuring robust edge-case coverage for API cost calculation tables and terminal formatting.',
        tools: ['Python', 'pytest', 'TDD', 'MIT License', 'Git'],
        constraints:
            'Must operate asynchronously with zero noticeable latency impact on developer terminal workflows.',
        outcome:
            'Published as an open-source CLI package on GitHub backed by a 293-test test suite and active community usage.',
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
        tools: ['C#', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
    },
    {
        category: 'VR / 3D',
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
        category: 'Tools & Frameworks',
        tools: ['React', 'Vite', 'pytest', 'Linux CLI', 'Postman'],
    },
    {
        category: 'Version Control',
        tools: ['Git', 'GitHub', 'Unity Version Control'],
    },
];

