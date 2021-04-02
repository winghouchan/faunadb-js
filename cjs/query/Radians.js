'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Radians

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   Take degrees and convert the number to radians 2 * pi = 360 degrees
 * @return {Expr}
 */
function Radians(expr) {
  _common.arity.exact(1, arguments, Radians.name)

  return new _Expr.default({
    radians: (0, _common.wrap)(expr),
  })
}
