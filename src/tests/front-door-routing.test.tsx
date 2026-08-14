import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import App from '../App';

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

        expect(await screen.findByText(/PORTFOLIO · SINGAPORE/)).toBeInTheDocument();
    });

    it('redirects /writing to /', async () => {
        renderAppAt('/writing');

        expect(await screen.findByText(/PORTFOLIO · SINGAPORE/)).toBeInTheDocument();
    });

    it('redirects /work to /', async () => {
        renderAppAt('/work');

        expect(await screen.findByText(/PORTFOLIO · SINGAPORE/)).toBeInTheDocument();
    });

    it('redirects /blog to /', async () => {
        renderAppAt('/blog');

        expect(await screen.findByText(/PORTFOLIO · SINGAPORE/)).toBeInTheDocument();
    });
});
