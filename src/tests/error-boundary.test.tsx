import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { ErrorBoundary } from '../components/ErrorBoundary';

function ThrowOnce({ shouldThrow }: { shouldThrow: boolean }) {
    if (shouldThrow) throw new Error('Test crash');
    return <p>App content</p>;
}

describe('ErrorBoundary', () => {
    beforeEach(() => {
        vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('renders the crash screen when a child throws', () => {
        render(
            <ErrorBoundary>
                <ThrowOnce shouldThrow={true} />
            </ErrorBoundary>
        );

        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Reload' })).toBeInTheDocument();
    });

    // No "clicking Reload reloads" case: jsdom allows neither redefining
    // window.location nor spying on location.reload, and the handler is a
    // one-line call straight to the browser. Not worth a shim.

    it('logs the error for debugging', () => {
        render(
            <ErrorBoundary>
                <ThrowOnce shouldThrow={true} />
            </ErrorBoundary>
        );

        expect(console.error).toHaveBeenCalledWith(
            '[ErrorBoundary]',
            expect.objectContaining({ message: 'Test crash' }),
            expect.anything()
        );
    });

    it('passes children through when no error occurs', () => {
        render(
            <ErrorBoundary>
                <p>Normal content</p>
            </ErrorBoundary>
        );

        expect(screen.getByText('Normal content')).toBeInTheDocument();
        expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    });
});
