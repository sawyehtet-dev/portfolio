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
    tools: string[];
    outcome: string;
    videoPreview?: string;
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

export interface SkillGroup {
    category: string;
    tools: string[];
}
