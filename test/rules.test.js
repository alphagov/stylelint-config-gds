/* eslint-env jest */

var cssRules = require('../css')
var scssRules = require('../scss')
var stylelint = require('stylelint')
var goodCss = '.class-name {\n  content: "";\n}\n'
var noErrors = expect.objectContaining({
  errored: false,
  results: expect.arrayContaining([
    expect.objectContaining({
      deprecations: [],
      invalidOptionWarnings: [],
      parseErrors: [],
      warnings: []
    })
  ])
})

it("css rules don't have errors, warnings or deprecations", function () {
  var promise = stylelint.lint({ config: cssRules, code: goodCss })
  return expect(promise).resolves.toEqual(noErrors)
})

it("scss rules don't have errors, warnings or deprecations", function () {
  var promise = stylelint.lint({ config: scssRules, code: goodCss })
  return expect(promise).resolves.toEqual(noErrors)
})
