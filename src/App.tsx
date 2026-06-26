import { lazy, Suspense, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useParams,
    useLocation,
    useNavigationType,
} from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { WorkPage } from './site/WorkPage';

// The portfolio is the front door (eager) at /. The writing feed lives at
// /writing and posts at clean root slugs - both lazy-loaded so the front door
// ships lean. WorkPage's Contact form is itself lazy (see WorkPage.tsx) so
// react-hook-form/zod stay off the initial bundle; react-markdown rides with
// BlogPost.
const Home = lazy(() => import('./site/Home').then(m => ({ default: m.Home })));
const NotFound = lazy(() => import('./site/NotFound').then(m => ({ default: m.NotFound })));

// Posts render at clean root slugs (/<slug>). BlogPost carries react-markdown, so
// it stays lazy to keep that weight off the front-door bundle.
const BlogPost = lazy(() => import('./site/BlogPost').then(m => ({ default: m.BlogPost })));

// Legacy /blog/:slug → /:slug, preserving the slug (paired with a netlify 301 for
// direct hits). The old /blog index redirects to the writing feed at /writing.
function BlogRedirect() {
    const { slug } = useParams<{ slug: string }>();
    return <Navigate to={`/${slug ?? ''}`} replace />;
}

// Client-side <Link> navigation keeps the previous scroll offset, so opening a
// post from the foot of the page (e.g. the Writing section) drops you at the
// bottom of the article instead of its title. Reset to the top on forward
// navigation. Skip POP so the browser still restores scroll on back/forward, and
// skip hash targets so in-page anchors (e.g. /#about) still jump to their section.
function ScrollToTop() {
    const { pathname, hash } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType === 'POP') return;
        if (hash) return;
        window.scrollTo(0, 0);
    }, [pathname, hash, navigationType]);

    return null;
}

function App() {
    return (
        <ErrorBoundary level="app">
            <BrowserRouter>
                <ScrollToTop />
                <Suspense fallback={null}>
                    <Routes>
                        {/* Explicit routes first, then the dynamic post slug,
                            then the 404. */}
                        <Route path="/" element={<WorkPage />} />
                        <Route path="/writing" element={<Home />} />
                        <Route path="/work" element={<Navigate to="/" replace />} />
                        <Route path="/blog" element={<Navigate to="/writing" replace />} />
                        <Route path="/blog/:slug" element={<BlogRedirect />} />
                        <Route path="/:slug" element={<BlogPost />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
