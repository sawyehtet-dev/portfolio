/**
 * CI security gate. Replaces `npm audit --audit-level=high` because npm has no
 * way to ignore a single advisory, and one unfixable-but-inapplicable advisory
 * would otherwise force the whole gate down to --audit-level=critical.
 *
 * Fails on any high/critical advisory EXCEPT the ones listed in ALLOWED below.
 * Warns (does not fail) when an ALLOWED entry stops matching, so the list gets
 * pruned instead of rotting.
 */

import { execFileSync } from 'child_process';

/**
 * GHSA id -> why it is accepted, and what makes it removable. Every entry needs
 * both: an exception with no exit condition never leaves.
 */
const ALLOWED = {
    'GHSA-qwww-vcr4-c8h2':
        'react-router RSC-mode CSRF. No patched release exists (7.12.0 - 8.2.0 is affected and ' +
        '7.18.2 is latest), and downgrading to the unaffected 7.11.0 trades this for 14 high ' +
        'advisories, several of which DO apply here. This site uses no RSC APIs. ' +
        'Remove once react-router ships a fixed release.',
};

const BLOCKING = new Set(['high', 'critical']);

// npm audit exits nonzero whenever it finds anything, so the JSON arrives via stderr's sibling.
let raw;
try {
    raw = execFileSync('npm', ['audit', '--json'], { encoding: 'utf8' });
} catch (err) {
    if (!err.stdout) throw err;
    raw = err.stdout;
}

const { vulnerabilities = {} } = JSON.parse(raw);

const blocking = [];
const seen = new Set();

for (const vuln of Object.values(vulnerabilities)) {
    for (const via of vuln.via) {
        // String entries are transitive pointers; the advisory object is counted at its source.
        if (typeof via === 'string' || !BLOCKING.has(via.severity)) continue;
        const id = via.url?.split('/').pop() ?? via.title;
        seen.add(id);
        if (id in ALLOWED) continue;
        blocking.push(
            `  ${via.severity.padEnd(8)} ${vuln.name}: ${via.title}\n           ${via.url}`
        );
    }
}

for (const [id, reason] of Object.entries(ALLOWED)) {
    if (!seen.has(id)) {
        console.warn(
            `Stale audit exception: ${id} no longer reported. Delete it from ${import.meta.url}.\n  was: ${reason}`
        );
    }
}

if (blocking.length) {
    console.error(
        `\n${blocking.length} unaccepted high/critical advisor${blocking.length === 1 ? 'y' : 'ies'}:\n`
    );
    console.error([...new Set(blocking)].join('\n'));
    console.error(
        '\nFix them, or add a GHSA id + reason + exit condition to ALLOWED in scripts/audit-ci.mjs.\n'
    );
    process.exit(1);
}

const accepted = Object.keys(ALLOWED).filter(id => seen.has(id));
console.log(
    `Security audit clean${accepted.length ? ` (${accepted.length} accepted exception: ${accepted.join(', ')})` : ''}.`
);
