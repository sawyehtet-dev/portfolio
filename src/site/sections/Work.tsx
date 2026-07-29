import { PROJECTS } from '../../config/editorial-data';

const isExternal = (href: string) => href.startsWith('http');

export function Work() {
    if (PROJECTS.length === 0) return null;

    return (
        <section className="ed-section ed-container" id="projects">
            <div className="ed-section-head">
                <h2 className="ed-section-title">Projects</h2>
            </div>

            <div className="ed-work-list">
                {PROJECTS.map(project => (
                    <article className="ed-work-item" key={project.id}>
                        <div className="ed-work-head">
                            <div className="ed-work-titlewrap">
                                <h3 className="ed-work-title">{project.title}</h3>
                                <p className="ed-work-sub">
                                    <span>{project.role}</span>
                                    <span className="sep">/</span>
                                    <span>{project.platform}</span>
                                </p>
                                <p className="ed-work-summary">{project.summary}</p>
                            </div>
                            <div className="ed-link-row">
                                {project.links.map(link => (
                                    <a
                                        key={link.href}
                                        className="ed-link"
                                        href={link.href}
                                        target={isExternal(link.href) ? '_blank' : undefined}
                                        rel={
                                            isExternal(link.href)
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                    >
                                        {link.label}
                                        <span className="a">↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="ed-work-grid">
                            <div className="ed-narrative">
                                <div className="ed-narr-row">
                                    <span className="ed-narr-key">Problem</span>
                                    <p>{project.problem}</p>
                                </div>
                                <div className="ed-narr-row">
                                    <span className="ed-narr-key">Solution</span>
                                    <p>{project.solution}</p>
                                </div>
                                <div className="ed-narr-row">
                                    <span className="ed-narr-key">Result</span>
                                    <p>{project.impact}</p>
                                </div>
                            </div>

                            <div className="ed-work-side">
                                <dl className="ed-spec">
                                    {project.facts.map(fact => (
                                        <div className="ed-spec-row" key={fact.key}>
                                            <dt className="ed-spec-key">{fact.key}</dt>
                                            <dd className="ed-spec-val">{fact.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
