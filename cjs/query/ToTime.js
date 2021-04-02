'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToTime

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression to a time literal.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a time.
 * @return {Expr}
 */
function ToTime(expr) {
  _common.arity.exact(1, arguments, ToTime.name)

  return new _Expr.default({
    to_time: (0, _common.wrap)(expr),
  })
}
