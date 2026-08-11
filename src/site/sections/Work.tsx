import { PROJECTS } from '../../config/editorial-data';

const isExternal = (href: string) => href.startsWith('http');

export function Work() {
    if (PROJECTS.length === 0) return null;

    return (
        <section className="ed-section ed-container" id="work">
            <div className="ed-section-head">
                <span className="ed-section-tag">01 / SELECTED CASE STUDIES</span>
                <h2 className="ed-section-title">Selected Work</h2>
            </div>

            <div className="ed-case-studies">
                {PROJECTS.map((project, idx) => (
                    <article className="ed-case-study" key={project.id}>
                        <header className="ed-case-header">
                            <div className="ed-case-header-top">
                                <div className="ed-case-num">0{idx + 1}</div>
                                {project.links.length > 0 && (
                                    <div className="ed-case-links">
                                        {project.links.map(link => (
                                            <a
                                                key={link.href}
                                                className="ed-text-link"
                                                href={link.href}
                                                target={isExternal(link.href) ? '_blank' : undefined}
                                                rel={
                                                    isExternal(link.href)
                                                        ? 'noopener noreferrer'
                                                        : undefined
                                                }
                                            >
                                                {link.label} ↗
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="ed-case-meta">
                                <h3 className="ed-case-title">{project.title}</h3>
                                <p className="ed-case-subtitle">
                                    <span className="ed-case-role">{project.role}</span>
                                    <span className="ed-sep">•</span>
                                    <span className="ed-case-context">{project.context}</span>
                                </p>
                            </div>
                        </header>

                        {project.videoPreview && (
                            <div className="ed-case-media">
                                <video
                                    className="ed-case-video"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    aria-label={`Demo video for ${project.title}`}
                                >
                                    <source src={project.videoPreview} type="video/mp4" />
                                </video>
                            </div>
                        )}

                        <div className="ed-case-body">
                            <p className="ed-case-summary">{project.summary}</p>

                            <div className="ed-case-grid">
                                <div className="ed-case-col">
                                    <h4 className="ed-field-label">What I Built</h4>
                                    <p className="ed-field-text">{project.whatIBuilt}</p>

                                    <h4 className="ed-field-label">Technical Decisions</h4>
                                    <p className="ed-field-text">{project.technicalDecisions}</p>
                                </div>

                                <div className="ed-case-col">
                                    {project.constraints && (
                                        <>
                                            <h4 className="ed-field-label">Constraints</h4>
                                            <p className="ed-field-text">{project.constraints}</p>
                                        </>
                                    )}

                                    <h4 className="ed-field-label">Outcome</h4>
                                    <p className="ed-field-text">{project.outcome}</p>
                                </div>
                            </div>

                            <div className="ed-case-tools">
                                <span className="ed-tools-label">Tools:</span>
                                <div className="ed-tools-list">
                                    {project.tools.map(tool => (
                                        <span key={tool} className="ed-tool-tag">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
