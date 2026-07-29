import { Link, NavLink } from 'react-router-dom';
import { PROFILE } from '../config/profile';
import { hasPublishedPosts } from './blog/posts';

// About is a native /#about anchor so it works from any page. Writing and RSS
// gate on `hasPublishedPosts` - same gate as the Writing section and the sitemap,
// so an empty feed is never linked. Both return on their own with the first post.
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
