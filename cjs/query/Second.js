'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Second

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns a time expression's second of the minute, from 0 to 59.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a month.
 * @return {Expr}
 */
function Second(expr) {
  _common.arity.exact(1, arguments, Second.name)

  return new _Expr.default({
    second: (0, _common.wrap)(expr),
  })
}
