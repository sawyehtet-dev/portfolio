import './editorial.css';
import { lazy, Suspense } from 'react';
import { PROFILE } from '../config/profile';
import { Nav } from './Nav';
import { Stats } from './sections/Stats';
import { Experience } from './sections/Experience';
import { Testimonial } from './sections/Testimonial';
import { Work } from './sections/Work';
import { Skills } from './sections/Skills';
import { Resume } from './sections/Resume';
import { Writing } from './sections/Writing';
import { Footer } from './sections/Footer';

// Contact is the page's heaviest section (the form, its validation, and the
// social list). The portfolio is the eager front door, so Contact is lazy-loaded
// behind a *local* Suspense boundary (below) to keep that markup off the initial
// bundle - local so only the Contact slot waits while the rest of the page renders.
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

function Hero() {
    return (
        <section className="ed-hero ed-container" id="top">
            <div className="ed-hero-top">
                <span className="ed-eyebrow">Portfolio - 2026</span>
                <span className="ed-eyebrow">Singapore</span>
            </div>

            <h1 className="ed-hero-head">
                <span className="ed-sr-only">Saw Ye Htet - </span>Unity VR Developer
            </h1>

            <div className="ed-hero-foot">
                <div>
                    <p className="ed-hero-lead">
                        IT diploma graduate and <strong>Unity VR Developer</strong> based in Singapore.
                        Hands-on experience building immersive training scenarios at the Centre of
                        Excellence in Maritime Safety and shipping a Meta Quest VR title with bare-hand
                        tracking. Owning the full loop: C# interaction systems, XR input, headset builds,
                        playtesting, and polish.
                    </p>
                    <div className="ed-cta-row">
                        <a
                            className="ed-btn ed-btn-primary"
                            href={PROFILE.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VR Résumé <span className="ed-btn-arrow">↗</span>
                        </a>
                        <a className="ed-btn ed-btn-ghost" href="#contact">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="ed-section ed-container" id="about">
            <div className="ed-section-head">
                <h2 className="ed-section-title">About</h2>
            </div>

            <div className="ed-about-grid">
                <div>
                    <p className="ed-lead">
                        Building immersive VR experiences, gesture-driven interactions, and robust C# systems.
                    </p>
                    <div className="ed-prose">
                        <p>
                            I recently graduated with a Diploma in Information Technology from Singapore
                            Polytechnic (2026). Over ~11 months as a Unity VR Developer &amp; Research Assistant
                            at the Centre of Excellence in Maritime Safety (CEMS), I designed, built, and maintained
                            multi-step VR training scenarios deployed on commercial HMDs for live research lab sessions.
                        </p>
                        <p>
                            My focus is on interactive C# systems, Meta Quest bare-hand tracking, OpenXR input, and
                            XR Interaction Toolkit integration. I take pride in the full VR development loop:
                            building modular interaction logic, conducting structured playtests (12+ iterations), tuning UX feel,
                            and creating clear setup guides for team members.
                        </p>
                        <p>
                            Alongside VR, I maintain strong software engineering fundamentals in Python and TypeScript
                            (author of Tokey, an open-source CLI with 293+ tests). Based in Singapore and available immediately;
                            requires S Pass sponsorship.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// The portfolio - the front door at /. Testimonial and Writing each render
// nothing while their data is empty.
export function WorkPage() {
    return (
        <div className="ed">
            <title>Saw Ye Htet - Unity VR Developer</title>
            {/* Must stay identical to the static description in index.html - React
                hoists this into <head> alongside it, and two different strings would
                leave crawlers picking one at random. */}
            <meta
                name="description"
                content="Saw Ye Htet is a Unity VR Developer in Singapore specializing in Meta Quest, bare-hand tracking, C# interaction systems, and immersive training. View VR experience, projects, skills, resume, and contact."
            />
            <Nav />
            <main id="main-content">
                <Hero />
                <Stats />
                <About />
                <Experience />
                <Testimonial />
                <Work />
                <Skills />
                <Resume />
                <Suspense
                    fallback={
                        <div
                            className="ed-section ed-container"
                            aria-hidden="true"
                            style={{ minHeight: '60vh' }}
                        />
                    }
                >
                    <Contact />
                </Suspense>
                {/* Writing renders nothing until a post is published, so it sits
                    last where its absence leaves no visible gap. */}
                <Writing />
            </main>
            <Footer />
        </div>
    );
}
