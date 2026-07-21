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
                        The full résumé is a one-page PDF: education, coursework, and the work,
                        ready to forward.
                    </p>
                    <p className="ed-resume-note">
                        Two one-page versions, kept current: one for IT support / service desk, one
                        for software QA.
                    </p>
                    <div className="ed-cta-row">
                        <a
                            className="ed-btn ed-btn-primary"
                            href={PROFILE.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IT Support PDF <span className="ed-btn-arrow">↗</span>
                        </a>
                        <a
                            className="ed-btn ed-btn-ghost"
                            href={PROFILE.resumeQaPath}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Software QA PDF <span className="ed-btn-arrow">↗</span>
                        </a>
                    </div>
                </div>

                <dl className="ed-spec">
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Education</dt>
                        <dd className="ed-spec-val">
                            Diploma in Information Technology - Singapore Polytechnic, 2026
                        </dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Target</dt>
                        <dd className="ed-spec-val">{PROFILE.roleTarget}</dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Stack</dt>
                        <dd className="ed-spec-val">{PROFILE.primaryStack.join(' · ')}</dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Based</dt>
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
