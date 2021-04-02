'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Time

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#time-and-date).
 *
 * @param {module:query~ExprArg} string
 *   A string to converted to a time object.
 * @return {Expr}
 */
function Time(string) {
  _common.arity.exact(1, arguments, Time.name)

  return new _Expr.default({
    time: (0, _common.wrap)(string),
  })
}
