module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    // @-else
    // Require or disallow a newline after the closing brace of @else statements.
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    // Require a single space or disallow whitespace after the closing brace of @else statements.
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    // Require an empty line or disallow empty lines before @-else.
    'scss/at-else-empty-line-before': 'never',
    // Require or disallow a space before @else if parentheses.
    // Require or disallow a space before @else if parentheses.
    'scss/at-else-if-parentheses-space-before': 'never',

    // @-function
    // Require or disallow a space before @function parentheses.
    'scss/at-function-parentheses-space-before': 'never',

    // @-if
    // Require or disallow a newline after the closing brace of @if statements.
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    // Require a single space or disallow whitespace after the closing brace of @if statements.
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // @-mixin
    // Require or disallow a space before @mixin parentheses.
    'scss/at-mixin-parentheses-space-before': 'never',

    // @-rule
    // Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
    'scss/at-rule-no-unknown': true,

    // $-variable
    // Require a single space or disallow whitespace after the colon in $-variable declarations.
    'scss/dollar-variable-colon-space-after': 'always',
    // Require an empty line or disallow empty lines after $-variable declarations.
    'scss/dollar-variable-empty-line-after': null,
    // Require an empty line or disallow empty lines before $-variable declarations.
    'scss/dollar-variable-empty-line-before': null,
    // Specify a pattern for Sass-like variables.
    'scss/dollar-variable-pattern': null,

    // //-comment
    // Require or disallow //-comments to be inline comments.
    'scss/double-slash-comment-inline': 'never',

    // General
    // Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.
    'scss/no-global-function-names': null,
  },
};
