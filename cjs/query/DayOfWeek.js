'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = DayOfWeek

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns a time expression's day of the week following ISO-8601 convention, from 1 (Monday) to 7 (Sunday).
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to day of week.
 * @return {Expr}
 */
function DayOfWeek(expr) {
  _common.arity.exact(1, arguments, DayOfWeek.name)

  return new _Expr.default({
    day_of_week: (0, _common.wrap)(expr),
  })
}
