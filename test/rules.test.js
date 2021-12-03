/* eslint-env jest */

const cssRules = require('../css')
const scssRules = require('../scss')
const stylelint = require('stylelint')
const goodCss = '.class-name {\n  content: "";\n}\n'
const noErrors = expect.objectContaining({
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
  const promise = stylelint.lint({ config: cssRules, code: goodCss })
  return expect(promise).resolves.toEqual(noErrors)
})

it("scss rules don't have errors, warnings or deprecations", function () {
  const promise = stylelint.lint({ config: scssRules, code: goodCss })
  return expect(promise).resolves.toEqual(noErrors)
})
