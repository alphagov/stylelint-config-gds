# Changelog

- We follow [Semantic Versioning](https://semver.org/) conventions for
  numbering releases
- Don't include changes that are purely internal. The CHANGELOG should be a
  useful summary for people upgrading their application, not a replication
  of the commit log.

## Unreleased

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
