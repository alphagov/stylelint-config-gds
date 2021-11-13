'use strict'

module.exports = {
  extends: ['stylelint-config-standard-scss', './css'],
  rules: {
    // Disallow @debug
    // https://stylelint.io/user-guide/rules/at-rule-disallowed-list
    // Originates from: https://github.com/alphagov/govuk-frontend/blob/e248b4027102b2684f592a0501630075bdfa1fab/config/.sass-lint.yml#L166
    'at-rule-disallowed-list': ['debug'],
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-function-pattern
    // Originates from: https://github.com/alphagov/govuk-frontend/blob/e248b4027102b2684f592a0501630075bdfa1fab/config/.sass-lint.yml#L88
    'scss/at-function-pattern': [
      /^_?([a-z0-9-])*$/, {
        message: 'Function names may only contain [a-z0-9-] characters and ' +
          'may start with an underscore'
      }
    ],
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-mixin-pattern
    // Originates from: https://github.com/alphagov/govuk-frontend/blob/e248b4027102b2684f592a0501630075bdfa1fab/config/.sass-lint.yml#L125
    'scss/at-mixin-pattern': [
      /^_?([a-z0-9-])*$/, {
        message: 'Mixin names may only contain [a-z0-9-] characters and ' +
          'may start with an underscore'
      }
    ],
    // Disable CSS style comments in SCSS
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-loud
    // Originates from: https://github.com/alphagov/govuk-frontend/blob/e248b4027102b2684f592a0501630075bdfa1fab/config/.sass-lint.yml#L162
    'scss/comment-no-loud': true,
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/dollar-variable-pattern
    // Originates from: https://github.com/alphagov/govuk-frontend/blob/e248b4027102b2684f592a0501630075bdfa1fab/config/.sass-lint.yml#L507
    'scss/dollar-variable-pattern': [
      /^_?([a-z0-9-])*$/, {
        message: 'Variable names may only contain [a-z0-9-] characters and ' +
          'may start with an underscore'
      }
    ],
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern
    // Originates from: https://github.com/alphagov/govuk-frontend/blob/e248b4027102b2684f592a0501630075bdfa1fab/config/.sass-lint.yml#L246
    'scss/percent-placeholder-pattern': [
      /^[a-z0-9-]*$/, {
        message: 'Placeholders may only contain [a-z0-9-] characters'
      }
    ],
    // Disable @import needing to be first declarations
    // @import has a different usage in SCSS to CSS and may be scoped or follow SCSS conditionals
    // https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule/
    'no-invalid-position-at-import-rule': null
  }
}
