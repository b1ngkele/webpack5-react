const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'unicorn',
    'promise',
    // '@typescript-eslint',
  ],
  rules: {
    'import/extensions': OFF,
    'linebreak-style': ['off', 'windows'],
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'no-console': OFF,
    'no-use-before-define': OFF,
    'unicorn/prefer-module': OFF,
    'react/jsx-filename-extension': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/no-unresolved': [OFF, { ignore: ['antd'] }],
    'unicorn/filename-case': OFF,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
        ],
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      },
      node: {
        paths: ['src'],
        extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
      },
    },
  },
};
