import './editorial.css';
import { lazy, Suspense } from 'react';
import { PROFILE } from '../config/profile';
import { Nav } from './Nav';
import { Work } from './sections/Work';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Resume } from './sections/Resume';
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
                    Software engineer in Singapore building full-stack applications, real-time
                    systems, and developer tools. Focused on test-driven development, clear API
                    design, and performant Java, TypeScript, Python, and C# code.
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
                        <span>Download résumé (PDF)</span>
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
                <Resume />
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
        </div>
    );
}
