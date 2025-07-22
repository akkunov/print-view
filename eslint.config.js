import eslintJs from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    files: ['**/*.ts', '**/*.tsx'],
    // Extend recommended rule sets from:
    // 1. ESLint JS's recommended rules
    // 2. TypeScript ESLint recommended rules
    // 3. ESLint React's recommended-typescript rules
    extends: [
        eslintJs.configs.recommended,
        tseslint.configs.recommended,
        eslintReact.configs['recommended-typescript'],
    ],
    // Configure language/parsing options
    languageOptions: {
        // Use TypeScript ESLint parser for TypeScript files
        parser: tseslint.parser,
        parserOptions: {
            // Enable project service for better TypeScript integration
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    ignores: [
        'node_modules/',
        'dist/',
        'build/',
        'vite.config.ts',
        'package.json',
        'package-lock.json',
        'tsconfig.json',
        'tsconfig.node.json',
        'tsconfig.app.json',
        'eslint.config.js',
        '.gitignore',
        '.prettier',
    ],
    // Custom rule overrides (modify rule levels or disable rules)
    rules: {
        '@eslint-react/no-missing-key': 'warn',
        '@eslint-react/no-class-component': 'error',
        '@eslint-react/no-comment-textnodes': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@eslint-react/hooks-extra/no-unnecessary-use-prefix': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': 'error',
        '@eslint-react/naming-convention/component-name': ['warn', 'PascalCase'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variableLike',
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
            // 👉 Типы, интерфейсы, enum, классы — PascalCase
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            // 👉 Enum члены — UPPER_CASE
            {
                selector: 'enumMember',
                format: ['UPPER_CASE'],
            },
            // 👉 Функции — camelCase или PascalCase (если это компоненты!)
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            // 👉 JSX-компоненты — PascalCase
            {
                selector: 'function',
                modifiers: ['exported'],
                format: ['PascalCase'],
            },
        ],
    },
});
