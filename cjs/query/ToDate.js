'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToDate

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression to a date literal.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a date.
 * @return {Expr}
 */
function ToDate(expr) {
  _common.arity.exact(1, arguments, ToDate.name)

  return new _Expr.default({
    to_date: (0, _common.wrap)(expr),
  })
}
