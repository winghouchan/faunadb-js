'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Logout

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @param {module:query~ExprArg} delete_tokens
 *   If true, log out all tokens associated with the current session.
 * @return {Expr}
 */
function Logout(delete_tokens) {
  _common.arity.exact(1, arguments, Logout.name)

  return new _Expr.default({
    logout: (0, _common.wrap)(delete_tokens),
  })
}
