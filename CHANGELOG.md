# Changelog

- We follow [Semantic Versioning](https://semver.org/) conventions for
  numbering releases
- Don't include changes that are purely internal. The CHANGELOG should be a
  useful summary for people upgrading their application, not a replication
  of the commit log.

## Unreleased

### Breaking change: Requires Stylelint 17 and [Node.js](http://Node.js) v20.19.0+

This release upgrades Stylelint to version 17, which requires a minimum Node.js version of v20.19.0.

If you use Stylelint JavaScript API, note that Stylelint 17 now only supports ES Modules and no longer supports CommonJS.

Read about breaking changes in the Stylelint [Migrating to v17.0.0](https://stylelint.io/migration-guide/to-17/) guide.

### Breaking change: New or re-configured Stylelint rules

This release also upgrades the configuration packages used by stylelint-config-gds:

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard/tree/40.0.0) to version 40.0.0 and the [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended/tree/18.0.0) it depends on to version 18.0.0  
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss/tree/v17.0.0) to version 17.0.0 and the [stylelint-config-recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss/tree/v17.0.0) it depends on to version 17.0.0

You may see new errors when linting from the following new rules:

- [block-no-redundant-nested-style-rules](https://stylelint.io/user-guide/rules/block-no-redundant-nested-style-rules/)  
- [color-function-alias-notation](https://stylelint.io/user-guide/rules/color-function-alias-notation/) (automatically fixable by running `stylelint --fix`)  
- [container-name-pattern](https://stylelint.io/user-guide/rules/container-name-pattern/)   
- [layer-name-pattern](https://stylelint.io/user-guide/rules/layer-name-pattern/)  
- [media-type-no-deprecated](https://stylelint.io/user-guide/rules/media-type-no-deprecated/)  
- [nesting-selector-no-missing-scoping-root](https://stylelint.io/user-guide/rules/nesting-selector-no-missing-scoping-root/)  
- [no-invalid-position-declaration](https://stylelint.io/user-guide/rules/no-invalid-position-declaration/)  
- [property-no-deprecated](https://stylelint.io/user-guide/rules/property-no-deprecated/)  
- [syntax-string-no-invalid](https://stylelint.io/user-guide/rules/syntax-string-no-invalid/)  
- [at-rule-descriptor-no-unknown](https://stylelint.io/user-guide/rules/at-rule-descriptor-no-unknown/)  
- [at-rule-descriptor-value-no-unknown](https://stylelint.io/user-guide/rules/at-rule-descriptor-value-no-unknown/)  
- [at-rule-no-deprecated](https://stylelint.io/user-guide/rules/at-rule-no-deprecated/)  
- [declaration-property-value-keyword-no-deprecated](https://stylelint.io/user-guide/rules/declaration-property-value-keyword-no-deprecated/)  
- [declaration-property-value-no-unknown](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown/)  
- [media-feature-name-value-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown/)

You may also see new errors from the [string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline/) rule, now configured with `{ ignore: ['at-rule-preludes', 'declaration-values'] }`.

We recommend you update your code to fix the errors and only override the rule in your own stylelint configuration if you have a strong reason to (for example, adding exceptions for `property-no-deprecated` because of the browsers you need to support).

### Removed rules

The upgrades of the configuration packages also remove some rules or options. While this won’t trigger new linting errors, this means some verifications will no longer happen on your code.

This release also removes the following rules:

- [color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)   
- [function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)  
- [function-no-unknown](https://stylelint.io/user-guide/rules/function-no-unknown/)  
- [unit-no-unknown](https://stylelint.io/user-guide/rules/function-no-unknown/)

If you find these rules useful for your project, you can add them back in your own stylelint configuration file.

If you use the SCSS configuration, this release also removes the following rules:

- [no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity/)  
- [no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors/)

Those have been disabled due to false positives since Sass started following standard CSS nesting and we recommend you keep them disabled.

## 2.0.0

This release upgrades to Stylelint 16 and [removes rules deprecated in Stylelint 15](#breaking-change-removal-of-stylistic-rules)

### Breaking change: Requires Node.js v18.12.0+

The minimum Node.js version is now v18.12.0 but note the following changes for Stylelint API users:

* Supports ES module plugins, custom syntaxes and formatters
* Updates rules, formatters and utilities to return Promises
* Deprecates the CommonJS Node.js API
* Requires Node.js v18.12.0+

Read about breaking changes in the Stylelint [**Migrating to v16.0.0**](https://github.com/stylelint/stylelint/blob/main/docs/migration-guide/to-16.md#breaking-changes) guide.

## 1.1.1

This release includes:

* [pull request #59: Fix rule `media-feature-range-notation` to use `'prefix'` notation](https://github.com/alphagov/stylelint-config-gds/pull/59)

## 1.1.0

This release includes:

* [pull request #53: Update Stylelint minimum version to `stylelint@15.11.0`](https://github.com/alphagov/stylelint-config-gds/pull/53)
* [pull request #57: Update bundled Sass config to `stylelint-config-standard-scss@11.1.0`](https://github.com/alphagov/stylelint-config-gds/pull/57)

## 1.0.0

This release upgrades to Stylelint 15 and now includes:

* Checks for media query syntax, rules and values
* Checks for number precision inside CSS functions
* Fixes for duplicate rules with intentionally different units

Read about breaking changes in the Stylelint [**Migrating to v15.0.0**](https://github.com/stylelint/stylelint/blob/main/docs/migration-guide/to-15.md#breaking-changes) guide.

### Breaking change: Removal of stylistic rules

We have removed all stylistic rules (such as tabs/spaces, indentation, etc) as they're no longer included in Stylelint common configurations as part of their [deprecation in Stylelint 15]((https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules)).

As per Stylelint's own documentation, we recommend that projects adopt [Prettier](https://prettier.io/) for formatting instead.

If this is not possible for your project, you can [configure](https://stylelint.io/user-guide/configure/) your projects' Stylelint configuration to use the [`stylelint-stylistic`](https://github.com/elirasza/stylelint-stylistic) or [`stylelint-codeguide`](https://github.com/firefoxic/stylelint-codeguide) plugins to restore the deprecated rules instead.

This change was made in [pull request #44: Remove deprecated stylistic rules](https://github.com/alphagov/stylelint-config-gds/pull/44).

### Removal of rule enforcing single-colon pseudo elements

We removed the rule [`selector-pseudo-element-colon-notation`](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/) preventing double-colon `::before` and `::after` pseudo elements.

Internet Explorer 8, 9 and 10 require single-colon `:before` and `:after` pseudo elements, but supporting these old browsers has not been a requirement for services since June 2018. If you wish to keep support you can [configure your Stylelint](https://stylelint.io/user-guide/configure/) to re-enable it.

This change was made in [pull request #36: Remove `selector-pseudo-element-colon-notation`](https://github.com/alphagov/stylelint-config-gds/pull/36).

## 0.3.0

This release updates all bundled configs to the maximum version supported by Stylelint 14. This work is in preparation for [Stylelint 15 deprecating all stylistic rules](https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules) with a recommendation to use Prettier for formatting.

Updates to bundled configs include new rule changes to maintain compatibility:

* New rule `selector-not-notation` (added in `stylelint@14.7.0`) configured with simple `:not()` notation from CSS Selectors Level 3, maintaining [support for older browsers](https://caniuse.com/css-not-sel-list)
* New rule `annotation-no-unknown` (added in `stylelint@14.10.0`) configured to maintain support for Sass flags such as `!default` and `!global`

## 0.2.0

* Utilise stylelint-config-standard-scss as base rules for SCSS
* Upgrade to Stylelint 14

## 0.1.0

* Initial release
