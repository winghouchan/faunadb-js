'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToDouble

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression to a double value, if possible.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a double.
 * @return {Expr}
 */
function ToDouble(expr) {
  _common.arity.exact(1, arguments, ToDouble.name)

  return new _Expr.default({
    to_double: (0, _common.wrap)(expr),
  })
}
