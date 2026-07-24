// ESLint Configuration - React / TypeScript flat config
// @ts-check

import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import pluginSecurity from 'eslint-plugin-security';

// No `globals` declarations anywhere below. `no-undef` is off (TypeScript
// already catches undefined identifiers, and it does it better), which makes a
// globals list inert - it existed here for browser and vitest names that nothing
// was checking. Don't add one back without turning `no-undef` on first.
export default [
    js.configs.recommended,
    pluginSecurity.configs.recommended,
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2024,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            'no-undef': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],

            // --- Security-hardened rules ---
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-new-func': 'error',
        },
    },
    {
        // Ignore patterns
        ignores: ['node_modules/**', 'dist/**', 'coverage/**', '**/*.min.js'],
    },
];
