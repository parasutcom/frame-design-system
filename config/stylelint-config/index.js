'use strict';

module.exports = {
  extends: [
    require.resolve('stylelint-config-standard-scss'),
    require.resolve('stylelint-config-idiomatic-order'),
    require.resolve('./rules/rules'),
    require.resolve('./plugins/scss'),
    require.resolve('./plugins/prettier'),
    require.resolve('./plugins/browserslist'),
  ],
};
