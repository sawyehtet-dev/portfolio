import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { PROFILE, SOCIAL_LINKS } from '../../config/profile';
import { ArrowUpRight, CheckIcon, CopyIcon } from '../../components/Icons';

const MESSAGE_MAX = 2000;
const MESSAGE_MIN = 10;
const NAME_MAX = 100;
// The live form endpoint, hardcoded on purpose. A Formspree form ID is public by
// design (it ships in the client bundle either way), so an env var bought no
// secrecy - it just created a second place for the value to live, and the two
// drifted: .env pointed at a dead form while this default was the real one.
const FORMSPREE_URL = 'https://formspree.io/f/xbdenqnb';

type Field = 'name' | 'email' | 'message';
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const EMPTY: Values = { name: '', email: '', message: '' };

// Validated on trimmed values, so a field of spaces fails like an empty one. The
// inputs carry the matching HTML constraints as well (required, type=email,
// maxlength) - that is what mobile keyboards and autofill read.
function validate({ name, email, message }: Values): Errors {
    const errors: Errors = {};

    const trimmedName = name.trim();
    if (!trimmedName) errors.name = 'Name is required';
    else if (trimmedName.length > NAME_MAX) errors.name = 'Name is too long';

    const trimmedEmail = email.trim();
    if (!trimmedEmail) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errors.email = 'Enter a valid email';

    const trimmedMessage = message.trim();
    if (trimmedMessage.length < MESSAGE_MIN)
        errors.message = `Message must be at least ${MESSAGE_MIN} characters`;
    else if (trimmedMessage.length > MESSAGE_MAX) errors.message = 'Message is too long';

    return errors;
}

export function Contact() {
    const [values, setValues] = useState<Values>(EMPTY);
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<{ type: 'ok' | 'err'; msg: string } | null>(null);
    const [isSubmitting, setSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);
    const honeypotRef = useRef<HTMLInputElement>(null);

    const set = (field: Field) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setValues(prev => ({ ...prev, [field]: value }));
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus(null);

        // Bots fill every field they can reach; this one is off-screen, not
        // display:none, because that is the version they detect.
        if (honeypotRef.current?.value) {
            setValues(EMPTY);
            return;
        }

        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length > 0) return;

        setSubmitting(true);
        try {
            const body = new FormData();
            body.append('name', values.name.trim());
            body.append('email', values.email.trim());
            body.append('message', values.message.trim());

            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                body,
                headers: { Accept: 'application/json' },
            });

            if (res.ok) {
                setStatus({ type: 'ok', msg: "Message sent - I'll get back to you soon." });
                setValues(EMPTY);
            } else {
                setStatus({ type: 'err', msg: 'Something went wrong - try emailing me directly.' });
            }
        } catch {
            setStatus({ type: 'err', msg: 'Something went wrong - try emailing me directly.' });
        } finally {
            setSubmitting(false);
        }
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(PROFILE.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            /* clipboard unavailable */
        }
    };

    return (
        <section className="ed-section ed-container" id="contact">
            <div className="ed-section-head">
                <span className="ed-section-tag">05 / GET IN TOUCH</span>
                <h2 className="ed-section-title">Contact</h2>
            </div>

            <div className="ed-contact-grid">
                <div>
                    <p className="ed-contact-lead">Let&apos;s work together.</p>
                    <div className="ed-contact-email-row">
                        <a className="ed-contact-email" href={`mailto:${PROFILE.email}`}>
                            {PROFILE.email}
                        </a>
                        <button
                            type="button"
                            className={`ed-copy-btn${copied ? ' is-copied' : ''}`}
                            onClick={copyEmail}
                            aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
                            title="Copy email address"
                        >
                            {copied ? (
                                <>
                                    <CheckIcon size={12} />
                                    <span>Copied</span>
                                </>
                            ) : (
                                <>
                                    <CopyIcon size={12} />
                                    <span>Copy</span>
                                </>
                            )}
                        </button>
                    </div>

                    <nav className="ed-contact-socials" aria-label="Social links">
                        {SOCIAL_LINKS.map(link => (
                            <a
                                key={link.label}
                                className="ed-social-link"
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="label">{link.label}</span>
                                <span className="handle">
                                    <span>{link.handle}</span>
                                    <ArrowUpRight className="ed-social-icon" size={13} />
                                </span>
                            </a>
                        ))}
                    </nav>
                </div>

                <form className="ed-form" onSubmit={onSubmit} noValidate>
                    <input
                        ref={honeypotRef}
                        type="text"
                        name="website_url"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="ed-honeypot"
                    />

                    <div className={`ed-field${errors.name ? ' has-error' : ''}`}>
                        <label htmlFor="ed-name">Name</label>
                        <input
                            id="ed-name"
                            name="name"
                            className="ed-input"
                            type="text"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                            maxLength={NAME_MAX}
                            disabled={isSubmitting}
                            value={values.name}
                            onChange={set('name')}
                            aria-invalid={errors.name ? 'true' : 'false'}
                            aria-describedby={errors.name ? 'ed-name-error' : undefined}
                        />
                        {errors.name && (
                            <span id="ed-name-error" className="ed-error" aria-live="polite">
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className={`ed-field${errors.email ? ' has-error' : ''}`}>
                        <label htmlFor="ed-email">Email</label>
                        <input
                            id="ed-email"
                            name="email"
                            className="ed-input"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                            disabled={isSubmitting}
                            value={values.email}
                            onChange={set('email')}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'ed-email-error' : undefined}
                        />
                        {errors.email && (
                            <span id="ed-email-error" className="ed-error" aria-live="polite">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className={`ed-field${errors.message ? ' has-error' : ''}`}>
                        <div className="ed-field-top">
                            <label htmlFor="ed-message">Message</label>
                            <span className="ed-counter" aria-live="polite">
                                {values.message.length} / {MESSAGE_MAX}
                            </span>
                        </div>
                        <textarea
                            id="ed-message"
                            name="message"
                            className="ed-textarea"
                            rows={5}
                            required
                            minLength={MESSAGE_MIN}
                            maxLength={MESSAGE_MAX}
                            placeholder="Role, timeline, and what you'd like me to look at."
                            disabled={isSubmitting}
                            value={values.message}
                            onChange={set('message')}
                            aria-invalid={errors.message ? 'true' : 'false'}
                            aria-describedby={errors.message ? 'ed-message-error' : undefined}
                        />
                        {errors.message && (
                            <span id="ed-message-error" className="ed-error" aria-live="polite">
                                {errors.message}
                            </span>
                        )}
                    </div>

                    {status && (
                        <div className={`ed-form-status ${status.type}`} role="status">
                            <span>{status.msg}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="ed-btn ed-btn-primary"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting ? 'true' : 'false'}
                    >
                        {isSubmitting ? 'Sending…' : 'Send message'}
                        {!isSubmitting && <ArrowUpRight className="ed-btn-icon" size={15} />}
                    </button>
                </form>
            </div>
        </section>
    );
}
