'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Pow

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A numbers to raise to the power.
 * @param {...module:query~ExprArg} terms
 *   An optional exponent
 * @return {Expr}
 */
function Pow(value, exponent) {
  _common.arity.min(1, arguments, Pow.name)

  exponent = (0, _util.defaults)(exponent, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        pow: (0, _common.wrap)(value),
      },
      {
        exp: (0, _common.wrap)(exponent),
      }
    )
  )
}
