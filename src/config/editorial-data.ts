import type { Project, ExperienceItem, SkillGroup } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Unity VR Developer, Research Assistant',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Sole Unity VR developer for maritime safety research: designed, built, and maintained Methanol Bunkering Safety VR training scenarios used in live lab sessions on commercial HMDs over 11 months.',
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
            'Interactive VR training scenarios built for commercial HMDs in maritime emergency response and clean fuel handling research.',
        context:
            'Centre of Excellence in Maritime Safety (CEMS), Singapore Polytechnic (Apr 2025 – Feb 2026)',
        whatIBuilt:
            'Modular C# interaction systems for locomotion, object manipulation, pre-bunkering safety inspections, hose leak response, and multi-stage scenario state machines used in live research sessions across 11 months.',
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
        title: 'Jewelry Shop Robbery – Meta Quest VR Game',
        role: 'Unity VR Developer',
        summary:
            'VR heist game using bare-hand tracking instead of controllers, with gesture-based grab and interact mechanics.',
        context: 'Independent VR project focused on controller-free interaction (2025)',
        whatIBuilt:
            'Built a VR heist game using bare-hand tracking instead of controllers, with gesture-based grab and interact mechanics.',
        technicalDecisions:
            'Tuned interaction feel for hand tracking (affordances, scene layout) and shipped Quest-ready Unity builds.',
        tools: ['Unity', 'C#', 'Hand Tracking', 'Meta Quest'],
        constraints:
            'Bare-hand tracking lacks physical controller buttons; tuned interaction feel, affordances, and scene layout.',
        outcome:
            'Shipped Quest-ready Unity builds with responsive bare-hand interaction mechanics.',
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
            'Real-time per-prompt token cost tracker for Claude Code with 70+ unit tests.',
        context: 'Independent open-source CLI tool (2026)',
        whatIBuilt:
            'Published a real-time per-prompt token cost tracker for Claude Code with 70+ unit tests.',
        technicalDecisions:
            'Built with test-driven development: authored 70+ automated unit tests covering pricing tables and token tracking.',
        tools: ['Python', 'pytest', 'MIT License', 'Git'],
        constraints:
            'Must provide real-time token tracking for developer terminal workflows.',
        outcome:
            'Published as an open-source tool on GitHub with 70+ unit tests.',
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

