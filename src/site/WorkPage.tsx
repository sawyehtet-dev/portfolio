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

// Contact carries react-hook-form + zod (the vendor-forms chunk). The portfolio
// is now the eager front door, so Contact is lazy-loaded behind a *local* Suspense
// boundary (below) to keep that weight off the initial bundle - local so only the
// Contact slot waits while the rest of the page renders.
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

const FOCUS_AREAS = [
    'IT Support & Service Desk',
    'Troubleshooting & Issue Diagnosis',
    'End-to-End & User Testing',
    'Issue Reproduction & Defect Tracking',
    'Technical Documentation',
    'Software QA (manual & test-driven)',
];

function Hero() {
    return (
        <section className="ed-hero ed-container" id="top">
            <div className="ed-hero-top ed-reveal">
                <span className="ed-eyebrow">Portfolio - 2026</span>
                <span className="ed-eyebrow">Singapore · Remote-friendly</span>
            </div>

            <h1 className="ed-hero-head ed-reveal" data-d="1">
                <span>IT Support &amp;</span>
                <span className="accent">QA</span>
                <span>
                    Specialist<span className="arrow">↘</span>
                </span>
            </h1>

            <div className="ed-hero-foot ed-reveal" data-d="2">
                <div>
                    <p className="ed-hero-lead">
                        IT diploma graduate with a year of hands-on technical work - setup,
                        troubleshooting, end-to-end testing, and documentation for a VR training
                        system. I <strong>find the actual cause</strong> and write the fix down so
                        the next person isn't stuck on it. Targeting IT support and service desk
                        roles; software QA is my edge, because I read and write code.
                    </p>
                    <div className="ed-cta-row">
                        <a
                            className="ed-btn ed-btn-primary"
                            href={PROFILE.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Résumé <span className="ed-btn-arrow">↗</span>
                        </a>
                        <a className="ed-btn ed-btn-ghost" href="#contact">
                            Get in touch
                        </a>
                    </div>
                </div>

                <dl className="ed-spec">
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Focus</dt>
                        <dd className="ed-spec-val">
                            IT Support / Service Desk · Software QA &amp; Testing
                        </dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Stack</dt>
                        <dd className="ed-spec-val">Python · React · Linux · Git</dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Status</dt>
                        <dd className="ed-spec-val">
                            <span className="live">Open to opportunities</span>
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="ed-section ed-container" id="about">
            <div className="ed-section-head">
                <span className="ed-section-num">01</span>
                <h2 className="ed-section-title">About</h2>
                <span className="ed-section-meta">Who I am</span>
            </div>

            <div className="ed-about-grid">
                <div>
                    <figure className="ed-portrait">
                        <img src="/images/profile-picture.webp" alt="Saw Ye Htet" />
                        <figcaption className="ed-portrait-tag">Saw Ye Htet</figcaption>
                    </figure>
                    <dl className="ed-spec ed-about-meta">
                        <div className="ed-spec-row">
                            <dt className="ed-spec-key">Role</dt>
                            <dd className="ed-spec-val">IT Support &amp; QA</dd>
                        </div>
                        <div className="ed-spec-row">
                            <dt className="ed-spec-key">Based</dt>
                            <dd className="ed-spec-val">Singapore</dd>
                        </div>
                        <div className="ed-spec-row">
                            <dt className="ed-spec-key">Study</dt>
                            <dd className="ed-spec-val">Dip. IT - Singapore Poly, 2026</dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <p className="ed-lead">
                        I turn vague bug reports into{' '}
                        <span className="accent">a fix and a paper trail</span>.
                    </p>
                    <div className="ed-prose">
                        <p>
                            I just finished an IT diploma, but I have a year of real technical work
                            behind me: a maritime research centre where I set up and troubleshot a
                            VR training system, ran user testing, reproduced and tracked issues, and
                            wrote the guides so other staff could run it without me.
                        </p>
                        <p>
                            I'm aiming for IT support and service desk roles, with software QA a
                            close second - and that is my edge, because I read and write code (70+
                            tests on my own tool) instead of only clicking through a UI. The part I
                            actually enjoy is the debugging: sitting with a stack trace until the
                            real cause turns up, not the line that happened to throw.
                        </p>
                    </div>

                    <div className="ed-focus">
                        <div className="ed-focus-label">Focus areas</div>
                        <ul className="ed-focus-list">
                            {FOCUS_AREAS.map((area, i) => (
                                <li key={area}>
                                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                                    <span>{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// The portfolio - now the front door at /. Single page: Hero → Stats →
// About → Experience → Testimonial → Projects → Skills → Résumé → Contact →
// Writing. Stats and Testimonial are un-numbered ribbons, so the numbered run
// (01 About … 03 Projects …) stays gap-free; Testimonial renders nothing while
// TESTIMONIALS is empty. The Writing section surfaces the three newest posts
// and links out to the full feed at /writing (see Home.tsx, which renders it).
export function WorkPage() {
    return (
        <div className="ed">
            <title>Saw Ye Htet - IT Support &amp; QA Specialist</title>
            <meta
                name="description"
                content="Saw Ye Htet - IT support and software QA. Experience, projects, skills, résumé, and recent writing."
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
                {/* Writing is the only section that can be absent (no published
                    posts), so it sits last - keeping the numbered run gap-free. */}
                <Writing />
            </main>
            <Footer />
        </div>
    );
}
