import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                browser: true, // Global variables for browser environments
                es2021: true, // ES2021 global variables
                require: 'readonly', // Node.js global
                process: 'readonly', // Node.js global
                console: 'readonly', // Node.js global
                module: 'readonly', // Node.js global
            },
        },
        rules: {
            indent: ['error', 2],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'prettier/prettier': 'error',
        },
    },
    {
        files: ['**/__tests__/**/*.js'],
        rules: {
            'no-console': 'off',
        },
    },
    prettier,
    {
        plugins: {
            prettier: eslintPluginPrettier,
        },
    },
    // Add ignores at the root level
    {
        ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],
    },
];
