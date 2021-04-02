'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Tanh

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The hyberbolic tangent of a number
 * @return {Expr}
 */
function Tanh(expr) {
  _common.arity.exact(1, arguments, Tanh.name)

  return new _Expr.default({
    tanh: (0, _common.wrap)(expr),
  })
}
