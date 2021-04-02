'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Hypot

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
 *   A side of the right triangle
 * @param {...module:query~ExprArg} terms
 *   The second side of a right triange, defaults to the first side
 * @return {Expr}
 */
function Hypot(value, side) {
  _common.arity.min(1, arguments, Hypot.name)

  side = (0, _util.defaults)(side, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        hypot: (0, _common.wrap)(value),
      },
      {
        b: (0, _common.wrap)(side),
      }
    )
  )
}
