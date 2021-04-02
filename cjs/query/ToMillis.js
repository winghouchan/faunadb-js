'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToMillis

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts a time expression to milliseconds since the UNIX epoch.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to millisecond numeric value.
 * @return {Expr}
 */
function ToMillis(expr) {
  _common.arity.exact(1, arguments, ToMillis.name)

  return new _Expr.default({
    to_millis: (0, _common.wrap)(expr),
  })
}
