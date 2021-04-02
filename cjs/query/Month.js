'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Month

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns a time expression's month of the year, from 1 to 12.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a month.
 * @return {Expr}
 */
function Month(expr) {
  _common.arity.exact(1, arguments, Month.name)

  return new _Expr.default({
    month: (0, _common.wrap)(expr),
  })
}
