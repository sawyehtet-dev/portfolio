import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Relative imports only. Adding an `@` alias here needs a matching `paths` in
// tsconfig.json or typecheck won't see it.
export default defineConfig({
    plugins: [react()],
    test: {
        pool: 'vmForks',
        environment: 'jsdom',
        setupFiles: ['src/tests/setup.ts'],
        include: ['src/tests/**/*.test.{ts,tsx}'],
        globals: true,
    },
});
