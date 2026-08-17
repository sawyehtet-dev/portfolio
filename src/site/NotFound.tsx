import './editorial.css';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './sections/Footer';

// The one editorial 404. Rendered by the catch-all route.
export function NotFound() {
    return (
        <div className="ed">
            <title>Saw Ye Htet</title>
            <Nav />
            <main id="main-content">
                <section className="ed-section ed-container" id="top">
                    <div className="ed-section-head">
                        <span className="ed-section-num">404</span>
                        <h1 className="ed-section-title">Not found</h1>
                        <span className="ed-section-meta">No such page</span>
                    </div>
                    <p className="ed-notfound-text">
                        That page doesn&apos;t exist. Head back to the <Link to="/">home page</Link>
                        .
                    </p>
                    <Link className="ed-notfound-back" to="/">
                        ← Back home
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}
