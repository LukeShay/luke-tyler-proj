/* eslint-disable strict */
module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['scripts/*'],
      rules: {
        strict: 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    camelcase: 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'func-names': ['error', 'never'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', { code: 100, tabWidth: 2 }],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-implicit-globals': 'error',
    'no-invalid-this': 'error',
    'no-label-var': 'warn',
    'no-loop-func': 'error',
    'no-param-reassign': 'error',
    'no-void': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'sort-keys': 'error',
    'sort-vars': 'error',
    strict: 'error',
    yoda: 'error',
  },
};
