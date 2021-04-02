'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Sqrt

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The square root of the number
 * @return {Expr}
 */
function Sqrt(expr) {
  _common.arity.exact(1, arguments, Sqrt.name)

  return new _Expr.default({
    sqrt: (0, _common.wrap)(expr),
  })
}
