import { useEffect, useState } from 'react';
import { ArrowUp } from '../components/Icons';

const SCROLL_THRESHOLD = 480;

export function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            let next = window.scrollY > SCROLL_THRESHOLD;
            if (next) {
                const totop = document.querySelector('.ed-totop');
                if (totop) {
                    const rect = totop.getBoundingClientRect();
                    next = rect.top >= window.innerHeight || rect.bottom <= 0;
                }
            }
            setShow(next);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    const scrollToTop = () => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    return (
        <button
            type="button"
            className={show ? 'ed-backtotop ed-backtotop-visible' : 'ed-backtotop'}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            tabIndex={show ? 0 : -1}
        >
            <ArrowUp className="ed-backtotop-icon" size={18} />
        </button>
    );
}
