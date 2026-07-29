import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import App from '../App';

// Guards App.tsx's route table: / is the portfolio, /writing is the feed. Renders
// the real <App> at each path and asserts on a marker unique to that page.
function renderAppAt(path: string) {
    window.history.pushState({}, '', path);
    return render(<App />);
}

describe('Front-door routing', () => {
    beforeEach(() => {
        window.history.pushState({}, '', '/');
    });

    it('serves the portfolio (hero) at /', async () => {
        renderAppAt('/');

        // "Portfolio - 2026" is the WorkPage hero eyebrow; the feed masthead
        // eyebrow ("Writing · Singapore") must not be on the page.
        expect(await screen.findByText(/Portfolio - 2026/)).toBeInTheDocument();
        expect(screen.queryByText(/Writing · Singapore/)).not.toBeInTheDocument();
    });

    it('serves the writing feed (masthead) at /writing', async () => {
        renderAppAt('/writing');

        // "Writing · Singapore" is the Home masthead eyebrow; the portfolio hero
        // eyebrow must not be on the page.
        expect(await screen.findByText(/Writing · Singapore/)).toBeInTheDocument();
        expect(screen.queryByText(/Portfolio - 2026/)).not.toBeInTheDocument();
    });
});
