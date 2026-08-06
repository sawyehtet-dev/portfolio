import { PROFILE } from '../../config/profile';

// SOCIAL_LINKS renders in Contact only; this points there rather than repeating
// it. /#contact is a cross-page anchor, same as Nav's /#about.
export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="ed-footer">
            <div className="ed-footer-inner ed-container">
                <div>
                    <p className="ed-footer-word">
                        {PROFILE.name}
                        <span className="dot">.</span>
                    </p>
                    <p className="ed-footer-tag">
                        Desktop Support &amp; QA Specialist. This site is built from scratch in React +
                        TypeScript.
                    </p>
                </div>

                <nav className="ed-footer-col" aria-label="Contact">
                    <span className="ed-side-label">Get in touch</span>
                    <a className="ed-footer-link" href="/#contact">
                        Email, socials, and the form →
                    </a>
                </nav>
            </div>

            <div className="ed-footer-bar ed-container">
                <span>
                    © {year} {PROFILE.name} · Singapore
                </span>
                <a className="ed-totop" href="#top">
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}
