'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = CreateRole

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a new role.
 *     - name: The name of the role
 *     - privileges: An array of privileges
 *     - membership: An array of membership bindings
 * @return {Expr}
 */
function CreateRole(params) {
  _common.arity.exact(1, arguments, CreateRole.name)

  return new _Expr.default({
    create_role: (0, _common.wrap)(params),
  })
}
