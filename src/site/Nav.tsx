import { Link, NavLink } from 'react-router-dom';
import { PROFILE } from '../config/profile';
import { hasPublishedPosts } from './blog/posts';

// Shared editorial chrome. Minimal by design: the wordmark returns to the front
// door (/, the portfolio), and the links are the About section, the writing feed
// (/writing) and the RSS feed. About points at /#about (a native anchor) so it
// works from any page - on the portfolio it just scrolls, from /writing or a post
// it loads the front door and jumps to the section.
//
// Writing and RSS both wait for `hasPublishedPosts`: sending a recruiter to a feed
// that reads "no posts published yet" costs more than the missing link does. The
// route still resolves, and both links return on their own the moment a post
// ships - same gate the Writing section and the sitemap use.
export function Nav() {
    return (
        <header className="ed-nav">
            <div className="ed-nav-inner ed-container">
                <Link className="ed-wordmark" to="/">
                    {PROFILE.name}
                    <span className="dot">.</span>
                </Link>
                <nav className="ed-nav-links" aria-label="Primary">
                    <a className="ed-nav-link" href="/#about">
                        About
                    </a>
                    {hasPublishedPosts && (
                        <>
                            {/* NavLink so the feed reads as the current page
                                (aria-current + the accent underline) while on it. */}
                            <NavLink className="ed-nav-link" to="/writing">
                                Writing
                            </NavLink>
                            <a
                                className="ed-nav-link"
                                href="/rss.xml"
                                title="RSS feed - paste this URL into a reader app to follow new posts"
                            >
                                RSS
                            </a>
                        </>
                    )}
                </nav>
                <span className="ed-nav-status">Open to work</span>
            </div>
        </header>
    );
}
