'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Degrees

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   Take radians and convert it to degrees 360 degrees = 2 * pi radians
 * @return {Expr}
 */
function Degrees(expr) {
  _common.arity.exact(1, arguments, Degrees.name)

  return new _Expr.default({
    degrees: (0, _common.wrap)(expr),
  })
}
