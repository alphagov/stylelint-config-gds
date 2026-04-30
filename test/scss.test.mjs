/* eslint-env jest */

import stylelint from 'stylelint'

import scssRules from '../scss.js'
import { removeProjectPath } from './utils.mjs'

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

describe('Scss rules', () => {
  it('matches snapshots', async () => {
    const config = await stylelint.resolveConfig('.', { config: scssRules })

    // Ensure consistent snapshots from one machine to another
    if (config.plugins) {
      config.plugins = config.plugins.map(removeProjectPath)
    }

    expect(config).toMatchSnapshot()
  })

  it('outputs no warnings, error or deprecations', () => {
    const promise = stylelint.lint({ config: scssRules, code: goodCss })
    return expect(promise).resolves.toEqual(noErrors)
  })
})
