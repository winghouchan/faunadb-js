'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToArray

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression to an Array.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to an Array.
 * @return {Expr}
 */
function ToArray(expr) {
  _common.arity.exact(1, arguments, ToArray.name)

  return new _Expr.default({
    to_array: (0, _common.wrap)(expr),
  })
}
