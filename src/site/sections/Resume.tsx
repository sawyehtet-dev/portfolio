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
                    <h3 className="ed-resume-heading">Saw Ye Htet - Unity / XR Developer</h3>
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
                        Download Résumé (PDF) ↗
                    </a>
                </div>

                <div className="ed-resume-meta">
                    <div className="ed-meta-item">
                        <span className="ed-meta-label">Education</span>
                        <span className="ed-meta-val">
                            Diploma in Information Technology, Singapore Polytechnic (2023–2026)
                        </span>
                    </div>
                    <div className="ed-meta-item">
                        <span className="ed-meta-label">Target Roles</span>
                        <span className="ed-meta-val">
                            Unity Developer · XR / VR Developer · Simulation Engineer
                        </span>
                    </div>
                    <div className="ed-meta-item">
                        <span className="ed-meta-label">Location &amp; Status</span>
                        <span className="ed-meta-val">
                            Singapore · Requires S Pass Sponsorship · Available Immediately
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
