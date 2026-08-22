import { Link } from 'react-router-dom';
import { PROFILE } from '../../config/profile';
import { ArrowRight, ArrowUp } from '../../components/Icons';

// Email + socials live in Contact only; this points there rather than repeating
// them. /#contact is a cross-page anchor, same as Nav's section links.
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
                        Software Engineer based in Singapore. Built with React &amp; TypeScript.
                    </p>
                </div>

                <nav className="ed-footer-col" aria-label="Contact">
                    <span className="ed-side-label">Get in touch</span>
                    <Link className="ed-footer-link" to="/#contact">
                        <span>Contact form &amp; socials</span>
                        <ArrowRight className="ed-footer-icon" size={14} />
                    </Link>
                </nav>
            </div>

            <div className="ed-footer-bar ed-container">
                <span>
                    © {year} {PROFILE.name} · Singapore
                </span>
                <a className="ed-totop" href="#top">
                    <span>Back to top</span>
                    <ArrowUp className="ed-totop-icon" size={13} />
                </a>
            </div>
        </footer>
    );
}
