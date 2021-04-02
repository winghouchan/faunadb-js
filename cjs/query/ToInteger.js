'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToInteger

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression to an integer value, if possible.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to an integer.
 * @return {Expr}
 */
function ToInteger(expr) {
  _common.arity.exact(1, arguments, ToInteger.name)

  return new _Expr.default({
    to_integer: (0, _common.wrap)(expr),
  })
}
