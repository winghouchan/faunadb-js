'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = FindStr

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
 * @param {string} find - Find the first position of this string in the search string
 * @param {int} start - An optional start offset into the search string
 * @return {int} location of the found string or -1 if not found
 */
function FindStr(value, find, start) {
  _common.arity.between(2, 3, arguments, FindStr.name)

  start = (0, _util.defaults)(start, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        findstr: (0, _common.wrap)(value),
        find: (0, _common.wrap)(find),
      },
      {
        start: (0, _common.wrap)(start),
      }
    )
  )
}
