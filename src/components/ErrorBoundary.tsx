import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
    level: 'app' | 'window';
    appId?: string;
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

// Editorial palette (mirrors src/site/editorial.css), inlined so the boundary
// has no stylesheet dependency and renders correctly even if CSS failed to load.
const PAPER = '#f7f5ef';
const INK = '#161410';
const INK_2 = '#57534a';
const LINE = '#d8d3c6';
const ACCENT = '#cc2a10';
const SANS = "'Adwaita Sans', 'Inter', system-ui, sans-serif";

export class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error(`[ErrorBoundary:${this.props.level}]`, error, info.componentStack);
    }

    render() {
        if (!this.state.hasError) return this.props.children;

        if (this.props.level === 'app') {
            return (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: PAPER,
                        color: INK,
                        fontFamily: SANS,
                    }}
                >
                    <div
                        style={{
                            textAlign: 'center',
                            maxWidth: 400,
                            background: '#fff',
                            border: `1px solid ${LINE}`,
                            borderRadius: 4,
                            padding: '48px 36px',
                            boxShadow: '0 24px 60px rgba(22, 20, 16, 0.08)',
                        }}
                    >
                        <div
                            style={{
                                width: 56,
                                height: 56,
                                borderRadius: '50%',
                                background: ACCENT,
                                color: '#fff',
                                fontSize: 28,
                                fontWeight: 800,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                            }}
                        >
                            !
                        </div>
                        <h1 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>
                            Something went wrong
                        </h1>
                        <p
                            style={{
                                fontSize: 14,
                                color: INK_2,
                                margin: '0 0 24px',
                                lineHeight: 1.5,
                            }}
                        >
                            The application encountered an unexpected error.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                padding: '10px 32px',
                                borderRadius: 8,
                                background: ACCENT,
                                color: '#fff',
                                border: 'none',
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: 'pointer',
                            }}
                        >
                            Reload
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    gap: 12,
                    padding: 24,
                    color: INK,
                    fontFamily: SANS,
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: ACCENT,
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    !
                </div>
                <p style={{ fontSize: 14, color: INK_2, textAlign: 'center' }}>
                    This app encountered an error
                </p>
                <button
                    onClick={() => this.setState({ hasError: false })}
                    style={{
                        padding: '8px 24px',
                        borderRadius: 8,
                        background: ACCENT,
                        color: '#fff',
                        border: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                    }}
                >
                    Retry
                </button>
            </div>
        );
    }
}
