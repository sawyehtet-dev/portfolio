import { lazy, Suspense, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
    useNavigationType,
} from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { WorkPage } from './site/WorkPage';

// WorkPage is the eager front door; NotFound is lazy so it ships lean.
const NotFound = lazy(() => import('./site/NotFound').then(m => ({ default: m.NotFound })));

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
                        <Route path="/" element={<WorkPage />} />
                        <Route path="/work" element={<Navigate to="/" replace />} />
                        <Route path="/writing" element={<Navigate to="/" replace />} />
                        <Route path="/blog" element={<Navigate to="/" replace />} />
                        <Route path="/blog/*" element={<Navigate to="/" replace />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
