module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  rules: {
    // 'react-hooks': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
  }
};
