'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = FindStrRegex

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
 * @param {string} pattern - Find the first position of this pattern in the search string using a java regular expression syntax
 * @param {int} start - An optional start offset into the search string
 * @param {int} numResults - An optional number of results to return, max 1024
 * @return {Array} an array of object describing where the search pattern was located
 */
function FindStrRegex(value, pattern, start, numResults) {
  _common.arity.between(2, 4, arguments, FindStrRegex.name)

  start = (0, _util.defaults)(start, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        findstrregex: (0, _common.wrap)(value),
        pattern: (0, _common.wrap)(pattern),
      },
      {
        start: (0, _common.wrap)(start),
        num_results: (0, _common.wrap)(numResults),
      }
    )
  )
}
