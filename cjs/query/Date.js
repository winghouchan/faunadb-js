'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Date

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#time-and-date).
 *
 * @param {module:query~ExprArg} string
 *   A string to convert to a Date object
 * @return {Expr}
 */
function Date(string) {
  _common.arity.exact(1, arguments, Date.name)

  return new _Expr.default({
    date: (0, _common.wrap)(string),
  })
}
