'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Sign

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The sign of the number is returned as positive 1, zero 0 , negative -1
 * @return {Expr}
 */
function Sign(expr) {
  _common.arity.exact(1, arguments, Sign.name)

  return new _Expr.default({
    sign: (0, _common.wrap)(expr),
  })
}
