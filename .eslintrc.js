module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
    'plugin:flowtype/recommended'
  ],
  env: {
    jest: true
  },
  plugins: [
    flowtype-errors,
    react,
    react-native,
    flowtype
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'flowtype/define-flow-type': 2,
    'react-native/no-unused-styles': 2,
    'camelcase': off,
    'react/no-array-index-key': 0,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'flowtype-errors/show-errors': 0,
    'no-console': 0,
    'react/no-deprecated': 0,
    'react/no-unknown-property': 2,
    'react/react-in-jsx-scope': 2,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/no-string-refs': 2,
    'indent': [
      2,
      2
    ],
    'space-before-function-paren': [
      error,
      always
    ],
    'template-tag-spacing': [
      error,
      never
    ],
    'max-len': [
      error,
      {
        code: 80, 
        ignoreComments: true
      }
    ],
    'linebreak-style': [
      error,
      unix
    ],
    'arrow-body-style': warn,
    'import/no-extraneous-dependencies': [
      error,
      {
        devDependencies: true
      }
    ],
    'no-duplicate-case': 2,
    'no-redeclare': 2,
    'semi': [2, 'never'],
    'singleQuote': true,
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }]
  },
  globals: {
    fetch: true,
    enquire: true,
    FontFaceObserver: true,
    imagesloaded: true,
    Modernizr: true,
    __DEV__: readonly
  }
}
