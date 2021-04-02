'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Equals

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of expressions to check for equivalence.
 * @return {Expr}
 */
function Equals() {
  _common.arity.min(1, arguments, Equals.name)

  return new _Expr.default({
    equals: (0, _common.wrap)((0, _common.varargs)(arguments)),
  })
}
