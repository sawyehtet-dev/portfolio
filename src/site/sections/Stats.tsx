import { STATS } from '../../config/editorial-data';

// Un-numbered ribbon between the hero and About. Surfaces the headline figures
// that are otherwise buried inside Experience bullets and the Tokey write-up.
export function Stats() {
    if (STATS.length === 0) return null;

    return (
        <section className="ed-stats ed-container" aria-label="By the numbers">
            <dl className="ed-stats-grid">
                {STATS.map(stat => (
                    <div className="ed-stat" key={stat.label}>
                        <dt className="ed-stat-value">
                            {stat.value}
                            {stat.unit && <span className="ed-stat-unit">{stat.unit}</span>}
                        </dt>
                        <dd className="ed-stat-label">{stat.label}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
