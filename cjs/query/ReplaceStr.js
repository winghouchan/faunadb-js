'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ReplaceStr

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - A string to search.
 * @param {string} find - The string to find in the search string
 * @param {string} replace - The string to replace in the search string
 * @return {String} all the occurrences of find substituted with replace string
 */
function ReplaceStr(value, find, replace) {
  _common.arity.exact(3, arguments, ReplaceStr.name)

  return new _Expr.default({
    replacestr: (0, _common.wrap)(value),
    find: (0, _common.wrap)(find),
    replace: (0, _common.wrap)(replace),
  })
}
