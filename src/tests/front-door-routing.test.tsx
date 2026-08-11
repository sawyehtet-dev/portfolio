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
        expect(screen.queryByText(/Writing · Singapore/)).not.toBeInTheDocument();
    });

    it('serves the writing feed (masthead) at /writing', async () => {
        renderAppAt('/writing');

        expect(await screen.findByText(/Writing · Singapore/)).toBeInTheDocument();
        expect(screen.queryByText(/PORTFOLIO · SINGAPORE/)).not.toBeInTheDocument();
    });
});
