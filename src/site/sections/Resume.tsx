import { PROFILE } from '../../config/profile';

export function Resume() {
    return (
        <section className="ed-section ed-container" id="resume">
            <div className="ed-section-head">
                <span className="ed-section-tag">04 / DOCUMENTATION</span>
                <h2 className="ed-section-title">Résumé</h2>
            </div>

            <div className="ed-resume-card">
                <div className="ed-resume-info">
                    <h3 className="ed-resume-heading">
                        {PROFILE.name} - {PROFILE.role}
                    </h3>
                    <p className="ed-resume-desc">
                        Full one-page PDF details experience at CEMS, Meta Quest VR projects,
                        technical stack, and education.
                    </p>
                    <a
                        className="ed-btn ed-btn-primary"
                        href={PROFILE.resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download résumé (PDF) ↗
                    </a>
                </div>

                <div className="ed-resume-meta">
                    <div className="ed-meta-item">
                        <span className="ed-meta-label">Education</span>
                        <span className="ed-meta-val">{PROFILE.education}</span>
                    </div>
                    <div className="ed-meta-item">
                        <span className="ed-meta-label">Target Roles</span>
                        <span className="ed-meta-val">{PROFILE.roleTarget}</span>
                    </div>
                    <div className="ed-meta-item">
                        <span className="ed-meta-label">Location &amp; Status</span>
                        <span className="ed-meta-val">{PROFILE.availability}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
