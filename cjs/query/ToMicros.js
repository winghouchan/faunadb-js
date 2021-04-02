'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToMicros

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts a time expression to microseconds since the UNIX epoch.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to microsecond numeric value.
 * @return {Expr}
 */
function ToMicros(expr) {
  _common.arity.exact(1, arguments, ToMicros.name)

  return new _Expr.default({
    to_micros: (0, _common.wrap)(expr),
  })
}
