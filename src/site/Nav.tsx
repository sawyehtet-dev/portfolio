import { Link } from 'react-router-dom';
import { PROFILE } from '../config/profile';

export function Nav() {
    return (
        <header className="ed-nav">
            <div className="ed-nav-inner ed-container">
                <Link className="ed-wordmark" to="/">
                    {PROFILE.name}
                </Link>
                <nav className="ed-nav-links" aria-label="Primary navigation">
                    <a className="ed-nav-link" href="/#work">
                        Work
                    </a>
                    <a className="ed-nav-link" href="/#experience">
                        Experience
                    </a>
                    <a className="ed-nav-link" href="/#skills">
                        Skills
                    </a>
                    <a className="ed-nav-link" href="/#resume">
                        Resume
                    </a>
                    <a className="ed-nav-link" href="/#contact">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}
