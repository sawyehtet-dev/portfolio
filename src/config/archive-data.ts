import type { ExperienceItem, StatItem } from '../types';

// Archived data for previous Desktop Support and Software QA roles.
// Stored here so it is not shown on the live site, but can be retrieved anytime.

export const ARCHIVED_DESKTOP_SUPPORT_PROFILE = {
    role: 'Desktop Support & QA Specialist',
    roleTarget: 'Desktop Support · Software QA',
    resumePath: '/resume/SawYeHtet_DesktopSupport.pdf',
    resumeQaPath: '/resume/SawYeHtet_SoftwareQA.pdf',
    primaryStack: ['Python', 'React + TypeScript', 'Linux', 'Git'],
};

export const ARCHIVED_DESKTOP_SUPPORT_EXPERIENCE: ExperienceItem[] = [
    {
        org: 'Centre of Excellence in Maritime Safety (CEMS)',
        role: 'Technical Support',
        period: 'Apr 2025 – Feb 2026',
        location: 'Singapore',
        bullets: [
            'Provided technical support for workstations, VR headsets, and computer peripherals to maintain system uptime.',
            'Diagnosed, reproduced, and documented 40+ hardware and software incidents, tracking them through to resolution.',
            'Managed device setup, system configuration, and software deployment across live testing environments.',
            'Authored actionable user feedback reports and technical documentation.',
        ],
        stack: ['Troubleshooting', 'Ticket Management', 'QA', 'Technical Writing', 'Unity / C#'],
    },
];

export const ARCHIVED_DESKTOP_SUPPORT_STATS: StatItem[] = [
    {
        value: '1',
        unit: 'yr',
        label: 'Technical experience: setup, troubleshooting, testing, and docs at CEMS.',
    },
    {
        value: '293',
        label: 'Tests behind Tokey, my open-source tool - the spec its code is written against.',
    },
];

export const ARCHIVED_DESKTOP_SUPPORT_LANES = [
    {
        rank: 'Primary lane',
        title: 'Desktop Support',
        skills: [
            'Troubleshooting & issue diagnosis',
            'Issue reproduction & defect tracking',
            'User support & technical documentation',
            'Windows & macOS (daily use) · Linux (CLI, scripting)',
        ],
    },
    {
        rank: 'Secondary lane',
        title: 'Software QA',
        skills: [
            'End-to-end, functional & user testing',
            'Test case design & UAT',
            'pytest & test-driven development',
            'Reads & writes code - tests from the inside',
        ],
    },
] as const;

export const ARCHIVED_DESKTOP_SUPPORT_BANDS = [
    {
        title: 'Tools',
        skills: ['Python', 'React & TypeScript', 'Git (clean, atomic history)'],
    },
    {
        title: 'Learning',
        note: 'in progress',
        skills: [
            'SQL (SQLBolt)',
            'Computer networking (Coursera)',
            'Microsoft Endpoint Administrator Associate (MD-102)',
        ],
    },
] as const;
