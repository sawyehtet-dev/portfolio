import { PROFILE } from '../../config/profile';

export function Resume() {
    return (
        <section className="ed-section ed-container" id="resume">
            <div className="ed-section-head">
                <h2 className="ed-section-title">Résumé</h2>
            </div>

            <div className="ed-resume-grid">
                <div>
                    <p className="ed-resume-statement">
                        The full résumé is a concise one-page PDF covering VR development, CEMS research work, Meta Quest projects, and software engineering skills.
                    </p>
                    <p className="ed-resume-note">
                        Targeting Unity VR Developer positions in Singapore. Available immediately; S Pass sponsorship required.
                    </p>
                    <div className="ed-cta-row">
                        <a
                            className="ed-btn ed-btn-primary"
                            href={PROFILE.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Unity VR Developer Résumé (PDF) <span className="ed-btn-arrow">↗</span>
                        </a>
                    </div>
                </div>

                <dl className="ed-spec">
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Education</dt>
                        <dd className="ed-spec-val">
                            Diploma in Information Technology - Singapore Polytechnic (2023 – 2026)
                        </dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Target Role</dt>
                        <dd className="ed-spec-val">{PROFILE.roleTarget}</dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Primary Stack</dt>
                        <dd className="ed-spec-val">{PROFILE.primaryStack.join(' · ')}</dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Location</dt>
                        <dd className="ed-spec-val">{PROFILE.location}</dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Status</dt>
                        <dd className="ed-spec-val">{PROFILE.availability}</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
