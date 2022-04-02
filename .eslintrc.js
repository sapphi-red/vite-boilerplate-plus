module.exports = {
  root: true,
  ignorePatterns: ['dist/**', '**/node_modules/**'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/consistent-type-imports': 'error',
    eqeqeq: 'error',
    'vue/eqeqeq': 'error'
  },
  overrides: [
    {
      // root files
      files: ['*.{js,mjs}'],
      excludedFiles: ['*/**/*.{js,mjs}'],
      env: {
        node: true
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  reportUnusedDisableDirectives: true
}
