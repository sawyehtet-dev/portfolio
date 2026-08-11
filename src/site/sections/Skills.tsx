import { SKILLS } from '../../config/editorial-data';

export function Skills() {
    return (
        <section className="ed-section ed-container" id="skills">
            <div className="ed-section-head">
                <span className="ed-section-tag">03 / TECHNICAL PROFICIENCY</span>
                <h2 className="ed-section-title">Skills &amp; Tools</h2>
            </div>

            <div className="ed-skills-grid">
                {SKILLS.map(group => (
                    <div className="ed-skill-group" key={group.category}>
                        <h3 className="ed-skill-cat">{group.category}</h3>
                        <ul className="ed-skill-list">
                            {group.tools.map(tool => (
                                <li className="ed-skill-item" key={tool}>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
