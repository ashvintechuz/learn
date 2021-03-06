module.exports = {
  extends: [
    'airbnb/legacy'
  ],
  rules: {
    'camelcase': 0,
    'comma-dangle': [0, 'never'],
    'comma-spacing': [0, { before: false, after: true }],
    'consistent-return': 0,
    'curly': 0,
    'default-case': 0,
    'eqeqeq': [0, 'smart'],
    'func-names': 0,
    'guard-for-in': 0,
    'key-spacing': [0, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [0, { before: true, after: true }],
    'max-len': 0,
    'new-cap': [0, { newIsCapExceptions: ['acl.memoryBackend', 'acl'] }],
    'no-bitwise': 0,
    'no-caller': 0,
    'no-console': 0,
    'no-else-return': 0,
    'no-empty-class': 0,
    'no-multi-spaces': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-spaced-func': 0,
    'no-throw-literal': 0,
    'no-trailing-spaces': 0,
    'no-undef': 2,
    'no-unneeded-ternary': 0,
    'no-unreachable': 2,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 1,
    'no-unused-vars': 2,
    'no-use-before-define': [0, 'nofunc'],
    'no-var': 2,
    'object-curly-spacing': [0, 'always'],
    'object-curly-newline': [0, 'always'],
    'one-var': [0, 'never'],
    'one-var-declaration-per-line': [0, 'always'],
    'padded-blocks': 0,
    'space-before-function-paren': 0,
    'space-in-parens': [0, 'never'],
    'spaced-comment': [0, 'always'],
    'strict': 2,
    'quote-props': 0,
    'quotes': [0, 'single'],
    'wrap-iife': [0, 'outside'],
    'vars-on-top': 0,
    'no-loop-func': 0, // Added by Ashvin
    "no-useless-escape": 0, // Added by Ashvin
    "newline-per-chained-call": 0, // Added by Ashvin
    'no-tabs': 0,
    'indent': 0,
    'space-before-blocks': 0,
    'space-infix-ops': 0,
    'no-multiple-empty-lines': [2, { "max": 1, "maxBOF": 1 }],
    'eol-last': 0,
    'array-bracket-spacing': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-redeclare': 2,
    'semi': 2,
    'global-require': 1,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    'no-lonely-if': 0
  },
  env: {
    node: true,
    es6: true
  }
};
