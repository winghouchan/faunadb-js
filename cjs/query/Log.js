'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Log

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The log base 10 of a number
 * @return {Expr}
 */
function Log(expr) {
  _common.arity.exact(1, arguments, Log.name)

  return new _Expr.default({
    log: (0, _common.wrap)(expr),
  })
}
