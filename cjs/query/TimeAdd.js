'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = TimeAdd

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/timeadd).
 *
 * Returns a new time or date with the offset in terms of the unit
 * added.
 *
 * @param base the base time or data
 * @param offset the number of units
 * @param unit the unit type
 * @return {Expr}
 */
function TimeAdd(base, offset, unit) {
  _common.arity.exact(3, arguments, TimeAdd.name)

  return new _Expr.default({
    time_add: (0, _common.wrap)(base),
    offset: (0, _common.wrap)(offset),
    unit: (0, _common.wrap)(unit),
  })
}
