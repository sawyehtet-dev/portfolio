import './editorial.css';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './sections/Footer';

// The one editorial 404. Rendered by the catch-all route, and by BlogPost when a
// /:slug miss turns out to be a mistyped page rather than a post.
export function NotFound() {
    return (
        <div className="ed">
            <title>Not found - Saw Ye Htet</title>
            <Nav />
            <main id="main-content">
                <section className="ed-section ed-container" id="top">
                    <div className="ed-section-head">
                        <span className="ed-section-num">404</span>
                        <h1 className="ed-section-title">Not found</h1>
                        <span className="ed-section-meta">No such page</span>
                    </div>
                    <p className="ed-blog-empty">
                        That page doesn&apos;t exist. Head to the <Link to="/">home page</Link> or
                        browse the <Link to="/writing">writing</Link>.
                    </p>
                    <Link className="ed-blog-back" to="/">
                        ← Back home
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}
