// Two target lanes: IT support / service desk is primary, software QA is the
// secondary lane and the coding-backed edge. Kept in sync with the IT Support
// and Software QA résumés.
export const PROFILE = {
    name: 'Saw Ye Htet',
    role: 'IT Support & QA Specialist',
    // Writing-first homepage tagline (sits under the name in the /writing masthead).
    tagline: 'IT support and software QA - and notes on building things.',
    roleTarget: 'IT Support / Service Desk · Software QA',
    email: 'sawyehtet.dev@gmail.com',
    resumePath: '/resume/SawYeHtet_ITSupport.pdf',
    availability: 'Fresh grad · open to opportunities',
    location: 'Singapore / remote-friendly',
    primaryStack: ['Python', 'React + TypeScript', 'Linux', 'Git'],
};

export const SOCIAL_LINKS = [
    {
        href: 'https://github.com/sawyehtet-dev',
        icon: 'github',
        label: 'GitHub',
        handle: '@sawyehtet-dev',
        terminal: 'github.com/sawyehtet-dev',
    },
    {
        href: 'https://www.linkedin.com/in/sawyehtet/',
        icon: 'linkedin',
        label: 'LinkedIn',
        handle: 'Saw Ye Htet',
        terminal: 'linkedin.com/in/sawyehtet',
    },
    {
        href: 'https://t.me/saulyehtet',
        icon: 'telegram',
        label: 'Telegram',
        handle: '@saulyehtet',
        terminal: 't.me/saulyehtet',
    },
    {
        href: 'https://x.com/saulyehtet_',
        icon: 'x-twitter',
        label: 'X',
        handle: '@saulyehtet_',
        terminal: 'x.com/saulyehtet_',
    },
] as const;
