'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Subtract

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to compute the difference of.
 * @return {Expr}
 */
function Subtract() {
  _common.arity.min(1, arguments, Subtract.name)

  return new _Expr.default({
    subtract: (0, _common.wrap)((0, _common.varargs)(arguments)),
  })
}
