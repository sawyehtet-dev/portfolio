import { useEffect, useState } from 'react';
import { PROFILE } from '../config/profile';
import { getInitialTheme, applyTheme, Theme } from '../utils/theme';
import { SunIcon, MoonIcon } from '../components/Icons';

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
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}

export function Nav() {
    return (
        <header className="ed-nav">
            <div className="ed-nav-inner ed-container">
                <a className="ed-wordmark" href="#top">
                    {PROFILE.name}
                </a>
                <div className="ed-nav-right">
                    <nav className="ed-nav-links" aria-label="Primary navigation">
                        <a className="ed-nav-link" href="#work">
                            Work
                        </a>
                        <a className="ed-nav-link" href="#experience">
                            Experience
                        </a>
                        <a className="ed-nav-link" href="#skills">
                            Skills
                        </a>
                        <a className="ed-nav-link" href="#contact">
                            Contact
                        </a>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
