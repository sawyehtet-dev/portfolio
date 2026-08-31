import { ErrorBoundary } from './components/ErrorBoundary';
import { WorkPage } from './site/WorkPage';

// One page, so no router. Legacy URLs (/work, /writing, /blog) are 301'd by
// Netlify and unmatched paths fall through to the static 404.html - see
// netlify.toml. Section links are plain #anchors; html { scroll-behavior:
// smooth } in editorial.css does the scrolling the old ScrollToTop hook did.
function App() {
    return (
        <ErrorBoundary>
            <WorkPage />
        </ErrorBoundary>
    );
}

export default App;
