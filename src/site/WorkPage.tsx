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

function Hero() {
    return (
        <section className="ed-hero ed-container" id="top">
            <div className="ed-hero-top">
                <span className="ed-eyebrow">Portfolio - 2026</span>
                <span className="ed-eyebrow">Singapore · Remote-friendly</span>
            </div>

            <h1 className="ed-hero-head">IT support &amp; software QA</h1>

            <div className="ed-hero-foot">
                <div>
                    <p className="ed-hero-lead">
                        IT diploma graduate with a year of technical work: setup, troubleshooting,
                        testing, and documentation for a VR training system. I trace problems to the{' '}
                        <strong>root cause</strong> and document the fix. Looking for IT support and
                        service desk roles; software QA is the second lane, since I read and write
                        code.
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
                        I find the root cause, then write it down so it stays fixed.
                    </p>
                    <div className="ed-prose">
                        <p>
                            I just finished an IT diploma at Singapore Polytechnic (2026) and have a
                            year of technical work behind it: at a maritime research centre I set up
                            and troubleshot a VR training system, ran user testing, reproduced and
                            tracked issues, and wrote the guides so other staff could run it without
                            me.
                        </p>
                        <p>
                            I'm aiming for IT support and service desk roles, with software QA a
                            close second. The difference from most manual testers is that I read and
                            write code - 70+ tests on my own tool - so I can test from the inside.
                            The part I like most is debugging: staying with a stack trace until the
                            real cause shows up, not the line that happened to throw.
                        </p>
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
