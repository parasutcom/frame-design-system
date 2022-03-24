module.exports = {
  rules: {
    'property-no-unknown': true,
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-duplicate-selectors': true,
    'color-named': 'never',
    'length-zero-no-unit': true,
    'declaration-no-important': true,
    'string-quotes': 'single',
    'font-weight-notation': 'numeric',
    'selector-class-pattern': null,
    'font-family-name-quotes': 'always-unless-keyword',
    'max-line-length': [
      80,
      {
        ignore: ['comments'],
      },
    ],
  },
};
