// ============================================
// PORTFOLIO CONTENT TYPES
// ============================================
// Types for the editorial front door (the / portfolio, /writing, posts).
// Consumed from src/config/editorial-data.ts.

export interface ProjectLink {
    label: string;
    href: string;
    icon: string;
    primary?: boolean;
}

export interface ProjectMedia {
    type: 'image';
    src: string;
    alt: string;
}

export interface Project {
    id: string;
    title: string;
    role: string;
    summary: string;
    problem: string;
    solution: string;
    impact: string;
    techStack: string[];
    platform: string;
    proofPoints: string[];
    links: ProjectLink[];
    featured: boolean;
    icon: string;
    media?: ProjectMedia;
    status?: 'completed' | 'wip';
}

export interface ExperienceItem {
    org: string;
    role: string;
    period: string;
    location?: string;
    bullets: string[];
    stack?: string[];
}

// One cell in the hero stats ribbon. `value` is the number, `unit` the small
// trailing qualifier (FPS, mo, %), `label` the one-line context under it.
export interface StatItem {
    value: string;
    unit?: string;
    label: string;
}

// A reference quote. The section renders nothing while the list is empty, so a
// placeholder never ships - fill only with a real, attributed line.
export interface Testimonial {
    quote: string;
    name: string;
    title: string;
    relationship?: string;
}
