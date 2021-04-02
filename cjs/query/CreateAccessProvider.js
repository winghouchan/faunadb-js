'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = CreateAccessProvider

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a new access provider.
 *     - name: A valid schema name
 *     - issuer: A unique string
 *     - jwks_uri: A valid HTTPS URI
 *     - roles: An array of role/predicate pairs where the predicate returns a boolean.
 *                   The array can also contain Role references.
 * @return {Expr}
 */
function CreateAccessProvider(params) {
  _common.arity.exact(1, arguments, CreateAccessProvider.name)

  return new _Expr.default({
    create_access_provider: (0, _common.wrap)(params),
  })
}
