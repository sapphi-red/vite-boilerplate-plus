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
    'prettier'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/consistent-type-imports': 'error',
    eqeqeq: 'error',
    'vue/eqeqeq': 'error',
    'vue/multi-word-component-names': 'off' // TODO
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
