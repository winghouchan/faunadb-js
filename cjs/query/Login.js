'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Login

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @param {module:query~ExprArg} ref
 *   A Ref with credentials to authenticate against
 * @param {module:query~ExprArg} params
 *   An object of parameters to pass to the login function
 *     - password: The password used to login
 * @return {Expr}
 * */
function Login(ref, params) {
  _common.arity.exact(2, arguments, Login.name)

  return new _Expr.default({
    login: (0, _common.wrap)(ref),
    params: (0, _common.wrap)(params),
  })
}
