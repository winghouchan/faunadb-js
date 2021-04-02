'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Concat

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} strings - A list of strings to concatenate.
 * @param {string} separator  - The separator to use between each string.
 * @return {string} a single combined string
 */
function Concat(strings, separator) {
  _common.arity.min(1, arguments, Concat.name)

  separator = (0, _util.defaults)(separator, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        concat: (0, _common.wrap)(strings),
      },
      {
        separator: (0, _common.wrap)(separator),
      }
    )
  )
}
