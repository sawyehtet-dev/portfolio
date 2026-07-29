// Content types for the front door. Consumed from src/config/editorial-data.ts.

export interface ProjectLink {
    label: string;
    href: string;
}

// One row of a project's spec list. Facts only - the narrative makes the claims.
export interface ProjectFact {
    key: string;
    value: string;
}

// Every field here is rendered by src/site/sections/Work.tsx. If you add one,
// render it in the same change - this interface previously carried `featured`,
// `icon`, `status` and `ProjectLink.icon` that nothing ever read.
export interface Project {
    id: string;
    title: string;
    role: string;
    summary: string; // What the thing IS, in one line, before the narrative.
    problem: string;
    solution: string;
    impact: string;
    platform: string;
    facts: ProjectFact[];
    links: ProjectLink[];
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
