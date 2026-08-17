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

function ScrollToTop() {
    const { pathname, hash } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType === 'POP') return;
        if (hash) {
            const id = hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
            const timer = setTimeout(() => {
                const target = document.getElementById(id);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }, 50);
            return () => clearTimeout(timer);
        }
        if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
            window.scrollTo(0, 0);
        }
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
                        <Route path="/writing/*" element={<Navigate to="/" replace />} />
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
