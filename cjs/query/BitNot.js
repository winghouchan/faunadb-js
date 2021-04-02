'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = BitNot

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A numbers to provide the bitwise not.
 * @return {Expr}
 */
function BitNot(expr) {
  _common.arity.exact(1, arguments, BitNot.name)

  return new _Expr.default({
    bitnot: (0, _common.wrap)(expr),
  })
}
