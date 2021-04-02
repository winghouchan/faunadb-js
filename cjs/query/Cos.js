'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Cos

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The cosine of a number
 * @return {Expr}
 */
function Cos(expr) {
  _common.arity.exact(1, arguments, Cos.name)

  return new _Expr.default({
    cos: (0, _common.wrap)(expr),
  })
}
