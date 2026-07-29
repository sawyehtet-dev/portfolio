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

// WorkPage is the eager front door; everything else is lazy so it ships lean.
// react-markdown rides with BlogPost, and Contact is lazy inside WorkPage itself.
const Home = lazy(() => import('./site/Home').then(m => ({ default: m.Home })));
const NotFound = lazy(() => import('./site/NotFound').then(m => ({ default: m.NotFound })));
const BlogPost = lazy(() => import('./site/BlogPost').then(m => ({ default: m.BlogPost })));

// Legacy /blog/:slug → /:slug, preserving the slug (paired with a netlify 301 for
// direct hits). The old /blog index redirects to the writing feed at /writing.
function BlogRedirect() {
    const { slug } = useParams<{ slug: string }>();
    return <Navigate to={`/${slug ?? ''}`} replace />;
}

// <Link> navigation keeps the previous scroll offset. Reset on forward nav only:
// POP keeps the browser's own restore, and hash targets keep in-page anchors.
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
        <ErrorBoundary>
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
