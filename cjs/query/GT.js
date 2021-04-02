'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = GT

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of terms to compare.
 * @return {Expr}
 */
function GT() {
  _common.arity.min(1, arguments, GT.name)

  return new _Expr.default({
    gt: (0, _common.wrap)((0, _common.varargs)(arguments)),
  })
}
