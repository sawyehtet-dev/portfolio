import { SKILLS } from '../../config/editorial-data';

export function Skills() {
    return (
        <section className="ed-section ed-container" id="skills">
            <div className="ed-section-head">
                <span className="ed-section-tag">03 / TECHNICAL PROFICIENCY</span>
                <h2 className="ed-section-title">Skills &amp; Tools</h2>
            </div>

            <div className="ed-skills-grid">
                {SKILLS.map((group, idx) => (
                    <div className="ed-skill-card" key={group.category}>
                        <div className="ed-skill-card-header">
                            <h3 className="ed-skill-heading">{group.category}</h3>
                            <span className="ed-skill-count">0{idx + 1}</span>
                        </div>
                        <div className="ed-skill-tags">
                            {group.tools.map(tool => (
                                <span className="ed-skill-tag" key={tool}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
