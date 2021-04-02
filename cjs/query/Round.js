'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Round

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
 *   A numbers to round.
 * @param {...module:query~ExprArg} terms
 *   An optional precision
 * @return {Expr}
 */
function Round(value, precision) {
  _common.arity.min(1, arguments, Round.name)

  precision = (0, _util.defaults)(precision, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        round: (0, _common.wrap)(value),
      },
      {
        precision: (0, _common.wrap)(precision),
      }
    )
  )
}
