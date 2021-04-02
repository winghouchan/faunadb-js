'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToSeconds

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression evaluating to a time to seconds since epoch.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to seconds numeric value.
 * @return {Expr}
 */
function ToSeconds(expr) {
  _common.arity.exact(1, arguments, ToSeconds.name)

  return new _Expr.default({
    to_seconds: (0, _common.wrap)(expr),
  })
}
