'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Repeat

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - A string to repeat.
 * @param {int} number - The number of times to repeat the string
 * @return {string} a string which was repeated
 */
function Repeat(value, number) {
  _common.arity.between(1, 2, arguments, Repeat.name)

  number = (0, _util.defaults)(number, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        repeat: (0, _common.wrap)(value),
      },
      {
        number: (0, _common.wrap)(number),
      }
    )
  )
}
