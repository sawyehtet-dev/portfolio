import { TESTIMONIALS } from '../../config/editorial-data';

// Pull-quote after Experience: someone vouching for the work, right where a
// recruiter has just read what that work was. Renders nothing until a real,
// attributed quote exists in TESTIMONIALS - never a placeholder.
export function Testimonial() {
    if (TESTIMONIALS.length === 0) return null;
    const ref = TESTIMONIALS[0];

    return (
        <section className="ed-quote ed-container" aria-label="Reference">
            <figure className="ed-quote-fig">
                <blockquote className="ed-quote-text">
                    <p>{ref.quote}</p>
                </blockquote>
                <figcaption className="ed-quote-cite">
                    <span className="ed-quote-name">{ref.name}</span>
                    <span className="ed-quote-title">{ref.title}</span>
                    {ref.relationship && <span className="ed-quote-rel">{ref.relationship}</span>}
                </figcaption>
            </figure>
        </section>
    );
}
