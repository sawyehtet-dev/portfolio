import { SKILL_LANES, SKILL_BANDS } from '../../config/editorial-data';

// Two lanes side by side, then the tools/learning bands underneath.
export function Skills() {
    return (
        <section className="ed-section ed-container" id="skills">
            <div className="ed-section-head">
                <h2 className="ed-section-title">Skills</h2>
            </div>

            <div className="ed-lanes">
                {SKILL_LANES.map(lane => (
                    <div className="ed-lane" key={lane.title}>
                        <span className="ed-side-label">{lane.rank}</span>
                        <h3 className="ed-lane-title">{lane.title}</h3>
                        <ul className="ed-lane-list">
                            {lane.skills.map(skill => (
                                <li className="ed-lane-item" key={skill}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <dl className="ed-bands">
                {SKILL_BANDS.map(band => (
                    <div className="ed-band" key={band.title}>
                        <dt className="ed-band-key">
                            {band.title}
                            {'note' in band && <span className="ed-band-note">{band.note}</span>}
                        </dt>
                        <dd className="ed-band-val">
                            {band.skills.map(skill => (
                                <span className="ed-chip" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
