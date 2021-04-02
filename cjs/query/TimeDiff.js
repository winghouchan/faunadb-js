'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = TimeDiff

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/timediff).
 *
 * Returns the number of intervals in terms of the unit between
 * two times or dates. Both start and finish must be of the same
 * type.
 *
 * @param start the starting time or date, inclusive
 * @param finish the ending time or date, exclusive
 * @param unit the unit type
 * @return {Expr}
 */
function TimeDiff(start, finish, unit) {
  _common.arity.exact(3, arguments, TimeDiff.name)

  return new _Expr.default({
    time_diff: (0, _common.wrap)(start),
    other: (0, _common.wrap)(finish),
    unit: (0, _common.wrap)(unit),
  })
}
