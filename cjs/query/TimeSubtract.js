'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = TimeSubtract

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/timesubtract).
 *
 * Returns a new time or date with the offset in terms of the unit
 * subtracted.
 *
 * @param base the base time or data
 * @param offset the number of units
 * @param unit the unit type
 * @return {Expr}
 */
function TimeSubtract(base, offset, unit) {
  _common.arity.exact(3, arguments, TimeSubtract.name)

  return new _Expr.default({
    time_subtract: (0, _common.wrap)(base),
    offset: (0, _common.wrap)(offset),
    unit: (0, _common.wrap)(unit),
  })
}
