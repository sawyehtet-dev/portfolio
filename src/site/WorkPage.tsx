import './editorial.css';
import { PROFILE } from '../config/profile';
import { Nav } from './Nav';
import { BackToTop } from './BackToTop';
import { Work } from './sections/Work';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Footer } from './sections/Footer';
import { Contact } from './sections/Contact';
import { ArrowUpRight } from '../components/Icons';

// ponytail: Contact is imported eagerly, not lazily. It is under 2 kB gzip, and
// lazying it cost more than it saved: #contact had no anchor target until the
// chunk resolved, the Suspense fallback reserved 40vh of empty space, and the
// prerendered HTML shipped no email or socials for crawlers to read.

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
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
