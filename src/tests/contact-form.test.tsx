import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contact } from '../site/sections/Contact';

// The contact form is the only interactive thing on the site, and the only place
// a visitor can lose work. These cover the paths that matter: validation gates
// the request, the honeypot swallows bots, and a failed POST tells the truth
// rather than claiming success.

const OK = { ok: true } as Response;
const FAILED = { ok: false } as Response;

function mockFetch(result: Response | Error) {
    const fn = vi.fn(() =>
        result instanceof Error ? Promise.reject(result) : Promise.resolve(result)
    );
    vi.stubGlobal('fetch', fn);
    return fn;
}

async function fillValid(user: ReturnType<typeof userEvent.setup>) {
    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace');
    await user.type(screen.getByLabelText('Email'), 'ada@example.com');
    await user.type(screen.getByLabelText('Message'), 'I would like to talk about a role.');
}

const submit = () => screen.getByRole('button', { name: /send message/i });

beforeEach(() => {
    vi.stubGlobal(
        'fetch',
        vi.fn(() => Promise.resolve(OK))
    );
});

afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
});

describe('Contact form', () => {
    it('blocks submission and reports every empty field', async () => {
        const fetchMock = mockFetch(OK);
        const user = userEvent.setup();
        render(<Contact />);

        await user.click(submit());

        expect(await screen.findByText('Name is required')).toBeInTheDocument();
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Message must be at least 10 characters')).toBeInTheDocument();
        expect(fetchMock).not.toHaveBeenCalled();
    });

    it('treats whitespace-only input as empty', async () => {
        const fetchMock = mockFetch(OK);
        const user = userEvent.setup();
        render(<Contact />);

        await user.type(screen.getByLabelText('Name'), '   ');
        await user.type(screen.getByLabelText('Email'), '   ');
        await user.click(submit());

        expect(await screen.findByText('Name is required')).toBeInTheDocument();
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(fetchMock).not.toHaveBeenCalled();
    });

    it('rejects a malformed email', async () => {
        const fetchMock = mockFetch(OK);
        const user = userEvent.setup();
        render(<Contact />);

        await user.type(screen.getByLabelText('Name'), 'Ada');
        await user.type(screen.getByLabelText('Email'), 'ada@nope');
        await user.type(screen.getByLabelText('Message'), 'A long enough message here.');
        await user.click(submit());

        expect(await screen.findByText('Enter a valid email')).toBeInTheDocument();
        expect(fetchMock).not.toHaveBeenCalled();
    });

    it('rejects a message under the minimum length', async () => {
        const fetchMock = mockFetch(OK);
        const user = userEvent.setup();
        render(<Contact />);

        await user.type(screen.getByLabelText('Name'), 'Ada');
        await user.type(screen.getByLabelText('Email'), 'ada@example.com');
        await user.type(screen.getByLabelText('Message'), 'too short');
        await user.click(submit());

        expect(
            await screen.findByText('Message must be at least 10 characters')
        ).toBeInTheDocument();
        expect(fetchMock).not.toHaveBeenCalled();
    });

    it('marks invalid fields for assistive tech', async () => {
        const user = userEvent.setup();
        render(<Contact />);

        await user.click(submit());

        const name = await screen.findByLabelText('Name');
        expect(name).toHaveAttribute('aria-invalid', 'true');
        expect(name).toHaveAttribute('aria-describedby', 'ed-name-error');
    });

    it('posts trimmed values and confirms on success', async () => {
        const fetchMock = mockFetch(OK);
        const user = userEvent.setup();
        render(<Contact />);

        await user.type(screen.getByLabelText('Name'), '  Ada Lovelace  ');
        await user.type(screen.getByLabelText('Email'), 'ada@example.com');
        await user.type(screen.getByLabelText('Message'), 'I would like to talk about a role.');
        await user.click(submit());

        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

        const [, init] = fetchMock.mock.calls.at(0) as unknown as [string, RequestInit];
        const body = init.body as FormData;
        expect(body.get('name')).toBe('Ada Lovelace');
        expect(body.get('email')).toBe('ada@example.com');

        expect(await screen.findByRole('status')).toHaveTextContent(/message sent/i);
    });

    it('clears the fields after a successful send', async () => {
        mockFetch(OK);
        const user = userEvent.setup();
        render(<Contact />);

        await fillValid(user);
        await user.click(submit());

        await screen.findByRole('status');
        expect(screen.getByLabelText('Name')).toHaveValue('');
        expect(screen.getByLabelText('Message')).toHaveValue('');
    });

    it('reports a rejected POST instead of claiming success', async () => {
        mockFetch(FAILED);
        const user = userEvent.setup();
        render(<Contact />);

        await fillValid(user);
        await user.click(submit());

        expect(await screen.findByRole('status')).toHaveTextContent(/something went wrong/i);
    });

    it('reports a network failure instead of hanging', async () => {
        mockFetch(new Error('offline'));
        const user = userEvent.setup();
        render(<Contact />);

        await fillValid(user);
        await user.click(submit());

        expect(await screen.findByRole('status')).toHaveTextContent(/something went wrong/i);
        expect(submit()).not.toBeDisabled();
    });

    it('silently drops a submission that filled the honeypot', async () => {
        const fetchMock = mockFetch(OK);
        const user = userEvent.setup();
        const { container } = render(<Contact />);

        await fillValid(user);
        const honeypot = container.querySelector<HTMLInputElement>('input[name="website_url"]');
        expect(honeypot).not.toBeNull();
        // Bots type into it; it is off-screen rather than display:none, so a real
        // user never reaches it and userEvent cannot either.
        if (honeypot) honeypot.value = 'https://spam.example';

        await user.click(submit());

        expect(fetchMock).not.toHaveBeenCalled();
        expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });

    it('counts message characters as you type', async () => {
        const user = userEvent.setup();
        render(<Contact />);

        expect(screen.getByText('0 / 2000')).toBeInTheDocument();
        await user.type(screen.getByLabelText('Message'), 'hello');
        expect(screen.getByText('5 / 2000')).toBeInTheDocument();
    });
});
