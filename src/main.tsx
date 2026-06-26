import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// The editorial site ships only src/site/editorial.css (imported by its pages).
// There is no global stylesheet to re-add here.

if (import.meta.env.DEV) {
    import('@axe-core/react').then(axe => axe.default(React, ReactDOM, 1000));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Tear down the pre-React paint splash only after the app has mounted, so the
// real UI is already painted underneath when the overlay is removed (no bare frame).
document.getElementById('static-shell')?.remove();

// Service worker: register in production for offline support (public/sw.js,
// versioned per build), and in dev unregister any stale worker so a cached
// build never shadows the dev server. Previously lived in the desktop shell.
if ('serviceWorker' in navigator) {
    if (import.meta.env.DEV) {
        navigator.serviceWorker
            .getRegistrations()
            .then(registrations => {
                registrations.forEach(registration => {
                    registration.unregister().catch(() => {});
                });
            })
            .catch(() => {});
    } else {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
}
