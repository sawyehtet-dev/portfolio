import { EDITORIAL_SKILLS } from '../../config/editorial-data';

export function Skills() {
    return (
        <section className="ed-section ed-container" id="skills">
            <div className="ed-section-head">
                <h2 className="ed-section-title">Skills</h2>
            </div>

            <div className="ed-skills-grid">
                {EDITORIAL_SKILLS.map(category => (
                    <div className="ed-skill-group" key={category.title}>
                        <div className="ed-side-label">{category.title}</div>
                        <div className="ed-chip-row">
                            {category.skills.map(skill => (
                                <span key={skill} className="ed-chip">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
