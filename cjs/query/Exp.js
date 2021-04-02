'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Exp

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The e raised to an exponent number
 * @return {Expr}
 */
function Exp(expr) {
  _common.arity.exact(1, arguments, Exp.name)

  return new _Expr.default({
    exp: (0, _common.wrap)(expr),
  })
}
