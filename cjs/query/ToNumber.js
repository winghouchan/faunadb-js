'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToNumber

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression to a number literal.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a number.
 * @return {Expr}
 */
function ToNumber(expr) {
  _common.arity.exact(1, arguments, ToNumber.name)

  return new _Expr.default({
    to_number: (0, _common.wrap)(expr),
  })
}
