module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    // 'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    // // '@typescript-eslint/rule-name': 'error',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'brace-style': ['error', '1tbs'],
    // '@typescript-eslint/no-explicit-any': 0,
    'no-multi-spaces': 'warn',
    // 'comma-spacing': ['warn', { before: false, after: true }],
    'require-atomic-updates': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['warn', 'always'],
    'no-console': 'off',
    // // 'no-unused-vars': 'off',
    indent: ['error', 2, { SwitchCase: 1, ignoreComments: true }],
    // 'switch-colon-spacing': ['error', { after: true, before: false }],
    semi: ['error', 'never'],
    'space-in-parens': ['warn', 'never'],
    // 'new-cap': ['error', { capIsNewExceptions: ['Record', 'Router'] }],
    camelcase: ['warn'],
    'no-whitespace-before-property': 2,
    'arrow-spacing': 'error',
    // 'sort-imports': 'error',
  },
}
