'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = CreateKey

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a new key
 *     - database: Ref of the database the key will be scoped to. Optional.
 *     - role: The role of the new key
 * @return {Expr}
 */
function CreateKey(params) {
  _common.arity.exact(1, arguments, CreateKey.name)

  return new _Expr.default({
    create_key: (0, _common.wrap)(params),
  })
}
