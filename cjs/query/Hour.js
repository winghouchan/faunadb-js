'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Hour

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns a time expression's second of the minute, from 0 to 59.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a hour.
 * @return {Expr}
 */
function Hour(expr) {
  _common.arity.exact(1, arguments, Hour.name)

  return new _Expr.default({
    hour: (0, _common.wrap)(expr),
  })
}
