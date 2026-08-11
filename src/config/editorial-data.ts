import type { Project, ExperienceItem, SkillGroup } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Unity VR Developer & Research Assistant',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Primary Unity VR developer for maritime safety research: designed, built, and maintained training scenarios used in live lab sessions on commercial HMDs (~11 months).',
            'Implemented C# interaction systems for locomotion, grab/interact, and multi-step scenario flow used by researchers and trainees.',
            'Integrated XR Interaction Toolkit and OpenXR-compatible input so controller and headset behavior stayed stable during demo days.',
            'Ran 12 structured playtests; turned feedback into concrete interaction, UX, and scene revisions before the next session.',
            'Authored setup guides and known-issue documentation so centre staff could run demos independently.',
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
        title: 'Maritime Safety VR Training',
        role: 'Primary Unity VR Developer',
        summary:
            'Interactive VR training scenarios built for commercial HMDs in maritime emergency response research.',
        context:
            'Centre of Excellence in Maritime Safety (CEMS), Singapore Polytechnic (Apr 2025 – Feb 2026)',
        whatIBuilt:
            'Modular C# interaction systems for locomotion, object manipulation, and multi-stage scenario state machines used in live lab research sessions across 11 months.',
        technicalDecisions:
            'Standardized input on OpenXR and XR Interaction Toolkit to support multiple commercial headsets without duplicating interaction logic. Integrated event-driven state handling to decouple scenario steps from visual assets.',
        tools: ['Unity 3D', 'C#', 'XR Interaction Toolkit', 'OpenXR', 'Meta Quest HMDs'],
        constraints:
            'Hardware performance budgets on standalone HMDs required draw call optimization and sub-11ms frame rendering to prevent trainee motion discomfort.',
        outcome:
            'Successfully deployed across 11 months of live research lab sessions; conducted 12 structured playtests and authored operational setup documentation for centre staff.',
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
        title: 'Jewelry Shop Robbery - Meta Quest VR',
        role: 'Unity VR Developer',
        summary:
            'Controller-free VR heist simulation on Meta Quest using bare-hand tracking and gesture physics.',
        context: 'Independent VR project focused on controller-free interaction (2025)',
        whatIBuilt:
            'Custom hand-tracking interaction layer in C# for gesture grabbing, object manipulation, and physical environment interaction without motion controllers.',
        technicalDecisions:
            'Utilized Meta Interaction SDK with tuned hand-gesture thresholds in C# to eliminate false-trigger grabs during rapid hand movement. Configured physical collision affordances tailored to hand poses.',
        tools: ['Unity 3D', 'C#', 'Meta Quest Hand Tracking SDK', 'Meta Interaction SDK'],
        constraints:
            'Bare-hand tracking lacks haptic feedback and suffers from camera line-of-sight occlusion; implemented custom visual snapping cues and gesture velocity smoothing.',
        outcome:
            'Shipped a responsive, controller-free VR heist prototype running natively on Meta Quest standalone.',
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
        title: 'Tokey - Token Cost CLI',
        role: 'Author & Developer',
        summary:
            'Open-source CLI tool providing real-time per-prompt LLM token cost tracking for developer workflows.',
        context: 'Independent open-source developer tool (2025)',
        whatIBuilt:
            'Complete CLI architecture, pricing calculation engine, session log parser, and terminal output formatting with zero third-party framework dependencies beyond Rich UI.',
        technicalDecisions:
            'Built with test-driven development: authored 293 automated test cases covering model price tables, token arithmetic, and edge-case log formats to guarantee precision.',
        tools: ['Python 3.11', 'pytest', 'Rich UI', 'Git'],
        constraints:
            'CLI status line hooks must execute under 20ms to avoid adding latency to interactive shell prompts.',
        outcome:
            'Released publicly on GitHub with 293 passing test cases and 100% test coverage for price calculation math.',
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
        category: 'Unity & XR',
        tools: [
            'Unity (C#)',
            'Meta Quest',
            'Meta Interaction SDK',
            'XR Interaction Toolkit',
            'OpenXR',
            'Bare-Hand Tracking',
            'HMD Deployment & Optimization',
        ],
    },
    {
        category: 'Programming & Systems',
        tools: ['C#', 'Python 3.11', 'TypeScript', 'React', 'SQL', 'Linux CLI', 'Git'],
    },
    {
        category: 'Workflow & Validation',
        tools: [
            'Structured Playtesting (12+ iterations)',
            'Test-Driven Development (pytest)',
            'Technical Documentation & Setup Guides',
            'Issue Tracking & Debugging',
        ],
    },
];
