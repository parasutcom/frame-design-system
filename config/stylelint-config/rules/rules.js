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
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['Font Awesome 6 Pro', 'Font Awesome 6 Duotone']
      },
    ],
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': null,
    'selector-class-pattern': null,
    'max-line-length': [
      80,
      {
        ignore: ['comments'],
      },
    ],
  },
};
