'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Identify

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to check the password against.
 * @param {module:query~ExprArg} password
 *   The credentials password to check.
 * @return {Expr}
 */
function Identify(ref, password) {
  _common.arity.exact(2, arguments, Identify.name)

  return new _Expr.default({
    identify: (0, _common.wrap)(ref),
    password: (0, _common.wrap)(password),
  })
}
