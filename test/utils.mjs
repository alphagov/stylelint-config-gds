import { relative, join } from 'node:path'

/**
 * Removes the project's path from the given `absolutePath`
 *
 * When resolving configurations, Stylelint will set the plugins as absolute paths.
 * To avoid snapshots differing because they're run on a different machine,
 * this strips the path of the project from absolute paths
 *
 * @param {string} absolutePath - The path to remove the project's path from
 * @returns {string} - The path relative to the root of the project
 */
export function removeProjectPath (absolutePath) {
  return relative(join(import.meta.dirname, '..'), absolutePath)
}
