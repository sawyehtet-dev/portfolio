import './editorial.css';
import { lazy, Suspense } from 'react';
import { PROFILE } from '../config/profile';
import { Nav } from './Nav';
import { Experience } from './sections/Experience';
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
    'Application & Production Support',
    'Incident Triage & Escalation',
    'Log Analysis & Troubleshooting',
    'SQL Debugging & Querying',
    'API Testing & QA',
    'IT Service Management (ITIL)',
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
                <span className="accent">Operations</span>
                <span>
                    Specialist<span className="arrow">↘</span>
                </span>
            </h1>

            <div className="ed-hero-foot ed-reveal" data-d="2">
                <div>
                    <p className="ed-hero-lead">
                        Recent Singapore Polytechnic IT graduate. I{' '}
                        <strong>read the logs</strong>, find the actual cause, and write the fix
                        down so the next person isn't stuck on it. Targeting application support,
                        production support, and technical analyst roles.
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
                            Application &amp; Production Support · QA / Test Documentation
                        </dd>
                    </div>
                    <div className="ed-spec-row">
                        <dt className="ed-spec-key">Stack</dt>
                        <dd className="ed-spec-val">SQL · Linux · Python · React</dd>
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
                            <dd className="ed-spec-val">IT Support &amp; Ops</dd>
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
                            I work in SQL, Linux, and Python, and the part I actually enjoy is the
                            debugging: sitting with a stack trace until the real cause turns up, not
                            just the line that happened to throw.
                        </p>
                        <p>
                            I'm aiming for application or production support at a consultancy or
                            product team. The kind of place where careful troubleshooting and
                            writing things down clearly are most of what the day looks like.
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

// The portfolio - now the front door at /. Single page: Hero → About →
// Experience → Projects → Skills → Résumé → Contact → Writing. The Writing
// section surfaces the three newest posts and links out to the full feed at
// /writing (see Home.tsx, which renders that feed).
export function WorkPage() {
    return (
        <div className="ed">
            <title>Saw Ye Htet - IT Support &amp; Operations Specialist</title>
            <meta
                name="description"
                content="Saw Ye Htet - IT support & operations. Experience, projects, skills, résumé, and recent writing."
            />
            <Nav />
            <main id="main-content">
                <Hero />
                <About />
                <Experience />
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
