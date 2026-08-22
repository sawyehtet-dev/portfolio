// Theme source of truth for the app side. index.html also carries a tiny
// pre-bundle inline script that reads the same 'theme' key to set data-theme
// before first paint (flash prevention) - keep the two in sync.
export type Theme = 'light' | 'dark';

export function getInitialTheme(): Theme {
    if (typeof document !== 'undefined') {
        const attr = document.documentElement.getAttribute('data-theme');
        if (attr === 'dark' || attr === 'light') return attr;
    }
    if (typeof localStorage !== 'undefined') {
        try {
            const saved = localStorage.getItem('theme');
            if (saved === 'dark' || saved === 'light') return saved;
        } catch {
            /* localStorage access error */
        }
    }
    if (
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return 'dark';
    }
    return 'light';
}

export function applyTheme(theme: Theme) {
    if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
    }
    if (typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem('theme', theme);
        } catch {
            /* localStorage access error */
        }
    }
}
