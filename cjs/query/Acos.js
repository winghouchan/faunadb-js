'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Acos

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The arc cosine of the number
 * @return {Expr}
 */
function Acos(expr) {
  _common.arity.exact(1, arguments, Acos.name)

  return new _Expr.default({
    acos: (0, _common.wrap)(expr),
  })
}
