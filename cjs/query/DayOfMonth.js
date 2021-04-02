'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = DayOfMonth

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns a time expression's day of the month, from 1 to 31.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to day of month.
 * @return {Expr}
 */
function DayOfMonth(expr) {
  _common.arity.exact(1, arguments, DayOfMonth.name)

  return new _Expr.default({
    day_of_month: (0, _common.wrap)(expr),
  })
}
