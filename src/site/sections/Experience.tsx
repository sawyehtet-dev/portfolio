import { EXPERIENCE, EDUCATION } from '../../config/editorial-data';

export function Experience() {
    return (
        <section className="ed-section ed-container" id="experience">
            <div className="ed-section-head">
                <span className="ed-section-tag">02 / EXPERIENCE &amp; EDUCATION</span>
                <h2 className="ed-section-title">Experience &amp; Education</h2>
            </div>

            <div className="ed-exp-sections">
                <div className="ed-exp-group">
                    <h3 className="ed-exp-group-title">Work Experience</h3>
                    <div className="ed-exp-list">
                        {EXPERIENCE.map(item => (
                            <article className="ed-exp-card" key={`${item.org}-${item.period}`}>
                                <header className="ed-exp-header">
                                    <div>
                                        <h4 className="ed-exp-org">{item.org}</h4>
                                        <p className="ed-exp-role">{item.role}</p>
                                    </div>
                                    <div className="ed-exp-meta">
                                        <span className="ed-exp-period">{item.period}</span>
                                        {item.location && (
                                            <span className="ed-exp-loc">{item.location}</span>
                                        )}
                                    </div>
                                </header>

                                <ul className="ed-exp-bullets">
                                    {item.bullets.map(bullet => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>

                                {item.stack && item.stack.length > 0 && (
                                    <div className="ed-exp-tools">
                                        <span className="ed-tools-label">Stack:</span>
                                        <div className="ed-tools-list">
                                            {item.stack.map(tech => (
                                                <span key={tech} className="ed-tool-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>

                <div className="ed-exp-group">
                    <h3 className="ed-exp-group-title">Education</h3>
                    <div className="ed-exp-list">
                        {EDUCATION.map(item => (
                            <article
                                className="ed-exp-card"
                                key={`${item.institution}-${item.period}`}
                            >
                                <header className="ed-exp-header">
                                    <div>
                                        <h4 className="ed-exp-org">{item.institution}</h4>
                                        <p className="ed-exp-role">{item.degree}</p>
                                    </div>
                                    <div className="ed-exp-meta">
                                        <span className="ed-exp-period">{item.period}</span>
                                        {item.location && (
                                            <span className="ed-exp-loc">{item.location}</span>
                                        )}
                                    </div>
                                </header>

                                <ul className="ed-exp-bullets">
                                    {item.bullets.map(bullet => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
