import { PROFILE } from '../../config/profile';
import { ArrowUpRight } from '../../components/Icons';

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
                        A one-page PDF covering my selected projects, experience, technical stack,
                        and education.
                    </p>
                    <a
                        className="ed-btn ed-btn-primary"
                        href={PROFILE.resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Download résumé (PDF)</span>
                        <ArrowUpRight className="ed-btn-icon" size={15} />
                    </a>
                </div>
            </div>
        </section>
    );
}
