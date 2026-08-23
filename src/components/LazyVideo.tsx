import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
    src: string;
    poster?: string;
    className?: string;
    ariaLabel?: string;
}

/**
 * Lazy-loaded video that only starts loading when scrolled into view.
 * Pauses when scrolled out of view to save battery on mobile.
 * Uses IntersectionObserver with 200px rootMargin to start loading
 * slightly before the user reaches the element.
 */
export function LazyVideo({ src, poster, className, ariaLabel }: LazyVideoProps) {
    const ref = useRef<HTMLVideoElement>(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;

        // jsdom and older browsers lack IntersectionObserver; fall back to eager load.
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    video.play().catch(() => {
                        /* autoplay blocked - that's fine */
                    });
                } else if (isVisible) {
                    video.pause();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <video
            ref={ref}
            className={className}
            loop
            muted
            playsInline
            preload="none"
            poster={poster}
            aria-label={ariaLabel}
            {...(isVisible ? { src } : {})}
        />
    );
}
