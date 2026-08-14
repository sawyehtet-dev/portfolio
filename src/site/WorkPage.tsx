import './editorial.css';
import { lazy, Suspense } from 'react';
import { PROFILE } from '../config/profile';
import { Nav } from './Nav';
import { Work } from './sections/Work';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Resume } from './sections/Resume';
import { Writing } from './sections/Writing';
import { Footer } from './sections/Footer';

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
                    Software engineer building full-stack web applications, Unity VR simulations, and developer tools.
                    I focus on writing clear, testable code across TypeScript, Java, Python, and C#, with practical experience in real-time systems and OpenXR.
                </p>

                <div className="ed-hero-actions">
                    <a className="ed-btn ed-btn-primary" href={`mailto:${PROFILE.email}`}>
                        Email me ↗
                    </a>
                    <a
                        className="ed-btn ed-btn-secondary"
                        href={PROFILE.resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download résumé (PDF) ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

export function WorkPage() {
    return (
        <div className="ed">
            <title>Saw Ye Htet - Software Engineer</title>
            <meta
                name="description"
                content="Software Engineer in Singapore building full-stack web applications, Unity game & VR systems, and developer tooling."
            />
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
                <Writing />
            </main>
            <Footer />
        </div>
    );
}
