import { Link, NavLink } from 'react-router-dom';
import { PROFILE } from '../config/profile';
import { hasPublishedPosts } from './blog/posts';

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
                    {hasPublishedPosts && (
                        <>
                            <NavLink className="ed-nav-link" to="/writing">
                                Writing
                            </NavLink>
                            <a className="ed-nav-link" href="/rss.xml" title="RSS feed">
                                RSS
                            </a>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
