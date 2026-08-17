import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Explicitly clean up rendered trees between tests
afterEach(() => {
    cleanup();
});
