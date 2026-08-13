export interface ProjectLink {
    label: string;
    href: string;
}

export interface Project {
    id: string;
    title: string;
    role: string;
    summary: string;
    context: string;
    whatIBuilt: string;
    technicalDecisions?: string;
    tools: string[];
    constraints?: string;
    outcome: string;
    videoPreview?: string;
    links: ProjectLink[];
}

export interface StatItem {
    value: string;
    unit?: string;
    label: string;
}

export interface ExperienceItem {
    org: string;
    role: string;
    period: string;
    location?: string;
    bullets: string[];
    stack?: string[];
}

export interface SkillGroup {
    category: string;
    tools: string[];
}
