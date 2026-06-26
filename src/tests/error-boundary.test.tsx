import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { ErrorBoundary } from '../components/ErrorBoundary';

function ThrowOnce({ shouldThrow }: { shouldThrow: boolean }) {
    if (shouldThrow) throw new Error('Test crash');
    return <p>App recovered</p>;
}

function WindowErrorHarness() {
    const [broken, setBroken] = useState(true);

    return (
        <>
            <ErrorBoundary level="window" appId="about">
                <ThrowOnce shouldThrow={broken} />
            </ErrorBoundary>
            <button type="button" data-testid="fix" onClick={() => setBroken(false)}>
                Fix
            </button>
        </>
    );
}

describe('ErrorBoundary', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('renders window-level error UI when a child throws', () => {
        render(
            <ErrorBoundary level="window" appId="about">
                <ThrowOnce shouldThrow={true} />
            </ErrorBoundary>
        );

        expect(screen.getByText('This app encountered an error')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
    });

    it('renders app-level crash screen with Reload button', () => {
        render(
            <ErrorBoundary level="app">
                <ThrowOnce shouldThrow={true} />
            </ErrorBoundary>
        );

        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Reload' })).toBeInTheDocument();
    });

    it('recovers when Retry is clicked after fixing the error source', async () => {
        const user = userEvent.setup();

        render(<WindowErrorHarness />);

        expect(screen.getByText('This app encountered an error')).toBeInTheDocument();

        await user.click(screen.getByTestId('fix'));
        await user.click(screen.getByRole('button', { name: 'Retry' }));

        await waitFor(() => {
            expect(screen.getByText('App recovered')).toBeInTheDocument();
        });
    });

    it('passes children through when no error occurs', () => {
        render(
            <ErrorBoundary level="window" appId="terminal">
                <p>Normal content</p>
            </ErrorBoundary>
        );

        expect(screen.getByText('Normal content')).toBeInTheDocument();
        expect(screen.queryByText('This app encountered an error')).not.toBeInTheDocument();
    });
});
