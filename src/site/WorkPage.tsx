import './editorial.css';
import { lazy, Suspense } from 'react';
import { PROFILE } from '../config/profile';
import { Nav } from './Nav';
import { BackToTop } from './BackToTop';
import { Work } from './sections/Work';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Footer } from './sections/Footer';
import { ArrowUpRight } from '../components/Icons';

const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

function Hero() {
    return (
        <section className="ed-hero ed-container" id="top">
            <div className="ed-hero-header">
                <span className="ed-hero-eyebrow">
                    PORTFOLIO · SINGAPORE · {PROFILE.availability}
                </span>
                <h1 className="ed-hero-name">Saw Ye Htet</h1>
                <p className="ed-hero-title">{PROFILE.role}</p>
            </div>

            <div className="ed-hero-body">
                <p className="ed-hero-summary">
                    Full-stack software engineer in Singapore building responsive web applications,
                    developer tooling, and modular interactive systems. Focused on clean
                    architecture, test-driven development (TDD), and building reliable software.
                </p>

                <div className="ed-hero-actions">
                    <a className="ed-btn ed-btn-primary" href={`mailto:${PROFILE.email}`}>
                        <span>Email me</span>
                        <ArrowUpRight className="ed-btn-icon" size={15} />
                    </a>
                    <a
                        className="ed-btn ed-btn-secondary"
                        href={PROFILE.resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Résumé (PDF)</span>
                        <ArrowUpRight className="ed-btn-icon" size={15} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export function WorkPage() {
    return (
        <div className="ed">
            <Nav />
            <main id="main-content">
                <Hero />
                <Work />
                <Experience />
                <Skills />
                <Suspense
                    fallback={
                        <div
                            className="ed-section ed-container"
                            aria-hidden="true"
                            style={{ minHeight: '40vh' }}
                        />
                    }
                >
                    <Contact />
                </Suspense>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
