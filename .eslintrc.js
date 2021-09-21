module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:testing-library/react', 'plugin:jest-dom/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': [
      'error',
      {
        allow: ['tron'],
      },
    ],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': [
      0,
      {
        exceptions: ['Image', 'img', 'SvgIcon'],
      },
    ],
    'no-plusplus': [
      1,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_embedded', '_links'],
      },
    ],
    camelcase: [
      'error',
      {
        allow: ['jwt_decode'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
