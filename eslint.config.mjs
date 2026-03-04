import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Ignore build outputs
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  },

  // Base JS recommended
  js.configs.recommended,

  // TypeScript recommended (flat config)
  ...tseslint.configs.recommended,

  // Your project rules
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      // ✅ import ordering
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Backend-ish defaults
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'prefer-const': 'error',
    },
  },

  // Prettier last (turns off conflicting formatting rules)
  eslintConfigPrettier,
];
