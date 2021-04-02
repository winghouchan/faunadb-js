'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = SubString

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value  The string to SubString.
 * @param {int} start  The position the first character of the return string begins at
 * @param {int} length  An optional length, if omitted then returns to the end of string
 * @return {string}
 */
function SubString(value, start, length) {
  _common.arity.between(1, 3, arguments, SubString.name)

  start = (0, _util.defaults)(start, null)
  length = (0, _util.defaults)(length, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        substring: (0, _common.wrap)(value),
      },
      {
        start: (0, _common.wrap)(start),
        length: (0, _common.wrap)(length),
      }
    )
  )
}
