'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ReplaceStrRegex

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - A string to search.
 * @param {string} pattern - The pattern to find in the search string using a java regular expression syntax
 * @param {string} replace - The string to replace in the search string
 * @param {boolean} first - Replace all or just the first
 * @return {string} all the occurrences of find pattern substituted with replace string
 */
function ReplaceStrRegex(value, pattern, replace, first) {
  _common.arity.between(3, 4, arguments, ReplaceStrRegex.name)

  first = (0, _util.defaults)(first, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        replacestrregex: (0, _common.wrap)(value),
        pattern: (0, _common.wrap)(pattern),
        replace: (0, _common.wrap)(replace),
      },
      {
        first: (0, _common.wrap)(first),
      }
    )
  )
}
