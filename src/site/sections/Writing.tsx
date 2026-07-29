import { Link } from 'react-router-dom';
import { PUBLISHED_POSTS, formatPostDate } from '../blog/posts';

// The newest posts on the front door, linking out to the full feed. Renders
// nothing until a post is published, which is why it sits last on the page.
const RECENT_COUNT = 3;

export function Writing() {
    if (PUBLISHED_POSTS.length === 0) return null;

    const recent = PUBLISHED_POSTS.slice(0, RECENT_COUNT);

    return (
        <section className="ed-section ed-container" id="writing">
            <div className="ed-section-head">
                <h2 className="ed-section-title">Writing</h2>
            </div>

            <ul className="ed-blog-list">
                {recent.map(({ meta }) => (
                    <li className="ed-blog-item" key={meta.slug}>
                        <Link className="ed-blog-link" to={`/${meta.slug}`}>
                            <span className="ed-blog-meta">
                                <span className="ed-blog-date">{formatPostDate(meta.date)}</span>
                                <span className="ed-blog-readtime">
                                    {meta.readingMinutes} min read
                                </span>
                            </span>
                            <span className="ed-blog-titlewrap">
                                <span className="ed-blog-title">{meta.title}</span>
                                {meta.summary && (
                                    <span className="ed-blog-summary">{meta.summary}</span>
                                )}
                            </span>
                            <span className="ed-blog-arrow">↗</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <Link className="ed-blog-back" to="/writing">
                All writing →
            </Link>
        </section>
    );
}
