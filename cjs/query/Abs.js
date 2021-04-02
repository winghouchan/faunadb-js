'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Abs

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A numbers to provide the absolute value.
 * @return {Expr}
 */
function Abs(expr) {
  _common.arity.exact(1, arguments, Abs.name)

  return new _Expr.default({
    abs: (0, _common.wrap)(expr),
  })
}
