'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Cosh

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The hyperbolic cosine of the number
 * @return {Expr}
 */
function Cosh(expr) {
  _common.arity.exact(1, arguments, Cosh.name)

  return new _Expr.default({
    cosh: (0, _common.wrap)(expr),
  })
}
