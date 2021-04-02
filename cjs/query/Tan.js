'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Tan

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The Tangent of a number
 * @return {Expr}
 */
function Tan(expr) {
  _common.arity.exact(1, arguments, Tan.name)

  return new _Expr.default({
    tan: (0, _common.wrap)(expr),
  })
}
