import eslint from '@eslint/js';
import cypress from 'eslint-plugin-cypress';
import tsEslint from 'typescript-eslint';
import n from 'eslint-plugin-n';
import tsParser from '@typescript-eslint/parser';

export default tsEslint.config(
  eslint.configs.recommended,
  // ...cypress.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    ignores: [
      '**/*.css',
      '**/*.scss',
      '**/*.html',
      '**/*.png',
      '**/*.json',
      '**/*.js',
      '**/*.mjs',
      '**/*/*.d.ts',
      '**/*.map',
      '**/*.md',
      '**.zip',
      '**/*.json',
      '**/*.js',
      '**/__tests__/*',
      '**/dist',
      '**/*.d.ts',
    ],
  },
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      cypress,
      n
    },
    files: ['**/*.ts'],

    languageOptions: {
      globals: {
        // ...globals,
        flatpickr: true,
        Slick: true,
        Sortable: true,
      },
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    settings: {
      node: {
        tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
        resolvePaths: ['node_modules/@types']
      }
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': [
        'error',
        {
          'types': {
            // accept Function type
            'Function': false
          },
          'extendDefaults': true
        }
      ],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'destructuredArrayIgnorePattern': '^_' }],
      '@typescript-eslint/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      '@typescript-eslint/semi': 'error',
      'curly': 'error',
      'cypress/no-assigning-return-values': 'off',
      'cypress/no-unnecessary-waiting': 'off',
      'cypress/unsafe-to-chain-command': 'off',
      'eqeqeq': 'error',
      'object-shorthand': 'error',
      'no-async-promise-executor': 'off',
      'no-case-declarations': 'off',
      'no-cond-assign': 'off',
      'no-prototype-builtins': 'off',
      'no-extra-boolean-cast': 'off',
      'semi': 'off',
      'keyword-spacing': 'error',
      'space-before-blocks': 'error'
    }
  });
