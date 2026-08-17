import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROFILE } from '../config/profile';
import { getInitialTheme, applyTheme, Theme } from '../utils/theme';

function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        // Sync with attribute on mount
        const current = getInitialTheme();
        setTheme(current);
        applyTheme(current);

        // Listen for storage events (e.g. user changes theme in another tab)
        const handleStorage = (e: StorageEvent) => {
            if (e.key === 'theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
                setTheme(e.newValue);
                applyTheme(e.newValue);
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    const toggleTheme = () => {
        const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        applyTheme(nextTheme);
    };

    return (
        <button
            type="button"
            className="ed-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'dark' ? (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            ) : (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}

export function Nav() {
    return (
        <header className="ed-nav">
            <div className="ed-nav-inner ed-container">
                <Link className="ed-wordmark" to="/">
                    {PROFILE.name}
                </Link>
                <div className="ed-nav-right">
                    <nav className="ed-nav-links" aria-label="Primary navigation">
                        <Link className="ed-nav-link" to="/#work">
                            Work
                        </Link>
                        <Link className="ed-nav-link" to="/#experience">
                            Experience
                        </Link>
                        <Link className="ed-nav-link" to="/#skills">
                            Skills
                        </Link>
                        <Link className="ed-nav-link" to="/#resume">
                            Resume
                        </Link>
                        <Link className="ed-nav-link" to="/#contact">
                            Contact
                        </Link>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
