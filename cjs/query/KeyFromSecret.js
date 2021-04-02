'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = KeyFromSecret

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#read-functions).
 *
 * @param {module:query~ExprArg} secret
 *   The key or token secret to lookup.
 * @return {Expr}
 */
function KeyFromSecret(secret) {
  _common.arity.exact(1, arguments, KeyFromSecret.name)

  return new _Expr.default({
    key_from_secret: (0, _common.wrap)(secret),
  })
}
