// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],

    'no-unused-expressions': ['error', {
      'allowShortCircuit': true,
      'allowTernary': true
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-underscore-dangle': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'consistent-return': 0,
    'no-bitwise': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/first': 0,
    'no-unused-vars': 1,
    'no-restricted-syntax': 1,
    'guard-for-in': 1,
    'linebreak-style': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'object-shorthand': 0,
    'no-shadow': 0,
    'prefer-default-export': 0,
    'no-plusplus': 0,
    'prefer-const': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
  }
}
