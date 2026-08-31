import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import netlifyConfig from '../../netlify.toml?raw';
import App from '../App';

// The app has no client router: / is the only page, and the legacy URLs are
// redirected by Netlify before the bundle loads. So there are two things worth
// guarding - that the front door still renders, and that those 301s still exist
// in netlify.toml (deleting them would silently break every old inbound link).
describe('Front door', () => {
    it('renders the portfolio hero', async () => {
        render(<App />);

        expect(await screen.findByText(/PORTFOLIO · SINGAPORE/)).toBeInTheDocument();
    });
});

describe('Legacy URL redirects (netlify.toml)', () => {
    it.each([
        ['/work', /from = "\/work"\s+to = "\/"\s+status = 301/],
        ['/writing', /from = "\/writing"\s+to = "\/"\s+status = 301/],
        ['/writing/*', /from = "\/writing\/\*"\s+to = "\/"\s+status = 301/],
        ['/blog', /from = "\/blog"\s+to = "\/"\s+status = 301/],
        ['/blog/*', /from = "\/blog\/\*"\s+to = "\/"\s+status = 301/],
    ])('301s %s to /', (_from, pattern) => {
        expect(netlifyConfig).toMatch(pattern);
    });

    it('has no SPA catch-all, so unmatched paths get a real 404', () => {
        expect(netlifyConfig).not.toMatch(/from = "\/\*"/);
    });
});
