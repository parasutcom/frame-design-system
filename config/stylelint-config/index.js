module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
    './rules',
    './plugins/scss',
    './plugins/prettier',
  ],
};
