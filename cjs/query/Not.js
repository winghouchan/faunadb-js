'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Not

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {module:query~ExprArg} boolean
 *   A boolean to produce the negation of.
 * @return {Expr}
 */
function Not(boolean) {
  _common.arity.exact(1, arguments, Not.name)

  return new _Expr.default({
    not: (0, _common.wrap)(boolean),
  })
}
