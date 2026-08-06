// Two target lanes: desktop support is primary, software QA is the secondary
// lane and the coding-backed edge. Kept in sync with the Desktop Support and
// Software QA résumés.
export const PROFILE = {
    name: 'Saw Ye Htet',
    role: 'Desktop Support & QA Specialist',
    roleTarget: 'Desktop Support · Software QA',
    email: 'sawyehtet.dev@gmail.com',
    resumePath: '/resume/SawYeHtet_DesktopSupport.pdf',
    resumeQaPath: '/resume/SawYeHtet_SoftwareQA.pdf',
    availability: 'Fresh grad · open to opportunities',
    location: 'Singapore / remote-friendly',
    primaryStack: ['Python', 'React + TypeScript', 'Linux', 'Git'],
};

export const SOCIAL_LINKS = [
    {
        href: 'https://github.com/sawyehtet-dev',
        label: 'GitHub',
        handle: '@sawyehtet-dev',
    },
    {
        href: 'https://www.linkedin.com/in/sawyehtet/',
        label: 'LinkedIn',
        handle: 'Saw Ye Htet',
    },
    {
        href: 'https://t.me/saulyehtet',
        label: 'Telegram',
        handle: '@saulyehtet',
    },
    {
        href: 'https://x.com/saulyehtet_',
        label: 'X',
        handle: '@saulyehtet_',
    },
] as const;
