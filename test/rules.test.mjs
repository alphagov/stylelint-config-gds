/* eslint-env jest */

import { relative, join } from 'node:path'

import stylelint from 'stylelint'
import cssRules from '../css.js'
import scssRules from '../scss.js'

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

it('css configuration matches snapshot', async () => {
  const config = await stylelint.resolveConfig('.', { config: cssRules })

  // Ensure consistent snapshots from one machine to another
  if (config.plugins) {
    config.plugins = config.plugins.map(removeProjectPath)
  }

  expect(config).toMatchSnapshot()
})

it('scss configuration matches snapshot', async () => {
  const config = await stylelint.resolveConfig('.', { config: scssRules })

  // Ensure consistent snapshots from one machine to another
  if (config.plugins) {
    config.plugins = config.plugins.map(removeProjectPath)
  }

  expect(config).toMatchSnapshot()
})

it("css rules don't have errors, warnings or deprecations", function () {
  const promise = stylelint.lint({ config: cssRules, code: goodCss })
  return expect(promise).resolves.toEqual(noErrors)
})

it("scss rules don't have errors, warnings or deprecations", function () {
  const promise = stylelint.lint({ config: scssRules, code: goodCss })
  return expect(promise).resolves.toEqual(noErrors)
})

/**
 * Removes the project's path from the given `absolutePath`
 *
 * When resolving configurations, Stylelint will set the plugins as absolute path.
 * To avoid snapshots differing because they're run on a different machine,
 * this strips the path of the project from absolute paths
 *
 * @param {string} absolutePath - The path to remove the project's path from
 * @returns {string} - The path relative to the root of the project
 */
function removeProjectPath (absolutePath) {
  return relative(join(import.meta.dirname, '..'), absolutePath)
}
