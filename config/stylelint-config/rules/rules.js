module.exports = {
  rules: {
    'color-hex-case': 'lower',
    'color-named': [
      'never',
      {
        ignore: ['inside-function'],
      },
    ],
    'color-no-invalid-hex': true,
    'selector-max-id': 1,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
    'no-duplicate-selectors': true,
    'at-rule-name-space-after': 'always-single-line',
    'declaration-block-single-line-max-declarations': 1,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'block-no-empty': true,
    'comment-no-empty': true,

    'length-zero-no-unit': true,
    'declaration-no-important': true,
    'string-quotes': 'single',
    'font-weight-notation': 'numeric',
    'selector-class-pattern': null,
    'font-family-name-quotes': 'always-where-recommended',
    'max-line-length': [
      80,
      {
        ignore: ['comments'],
      },
    ],
  },
};
