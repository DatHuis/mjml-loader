module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: 'off',
    'no-console': ['error'],
    semi: ['error', 'always'],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    'jest/expect-expect': 'off',
  },
};
