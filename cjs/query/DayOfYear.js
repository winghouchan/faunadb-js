'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = DayOfYear

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns a time expression's day of the year, from 1 to 365, or 366 in a leap year.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to day of year.
 * @return {Expr}
 */
function DayOfYear(expr) {
  _common.arity.exact(1, arguments, DayOfYear.name)

  return new _Expr.default({
    day_of_year: (0, _common.wrap)(expr),
  })
}
