'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = If

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} condition
 *   An expression that returns a boolean.
 * @param {module:query~ExprArg} then
 *   The expression to run if condition is true.
 * @param {module:query~ExprArg} else
 *   The expression to run if the condition is false.
 * @return {Expr}
 * */
function If(condition, then, _else) {
  _common.arity.exact(3, arguments, If.name)

  return new _Expr.default({
    if: (0, _common.wrap)(condition),
    then: (0, _common.wrap)(then),
    else: (0, _common.wrap)(_else),
  })
}
