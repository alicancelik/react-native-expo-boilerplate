module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-return-assign': 'off',
    'react/destructuring-assignment': 'off',
    'camelcase': 'off',
    'prefer-destructuring': 'off',
    'no-throw-literal': 'off',
    'no-underscore-dangle': 'off',
    'import/no-cycle': 'off',
    'react/sort-comp': 'off',
  },
  'globals': {
    "fetch": false
  }
}
