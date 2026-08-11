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
                <span className="ed-hero-eyebrow">PORTFOLIO · SINGAPORE</span>
                <h1 className="ed-hero-name">Saw Ye Htet</h1>
                <p className="ed-hero-title">Unity / XR Developer</p>
            </div>

            <div className="ed-hero-body">
                <p className="ed-hero-summary">
                    Unity / XR developer based in Singapore with ~11 months of experience building
                    and deploying interactive VR training scenarios for the Centre of Excellence in
                    Maritime Safety.
                </p>

                <div className="ed-hero-actions">
                    <a className="ed-btn ed-btn-primary" href="#work">
                        View work ↓
                    </a>
                    <a
                        className="ed-btn ed-btn-secondary"
                        href={PROFILE.resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download résumé ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

export function WorkPage() {
    return (
        <div className="ed">
            <title>Saw Ye Htet — Unity / XR Developer</title>
            <meta
                name="description"
                content="Saw Ye Htet is a Unity / XR Developer in Singapore specializing in Meta Quest, bare-hand tracking, C# interaction systems, and immersive training. View case studies, experience, skills, resume, and contact."
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
