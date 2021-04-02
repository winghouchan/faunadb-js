'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Role

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the role.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the role's scope.
 * @return {Expr}
 */
function Role(name, scope) {
  _common.arity.between(1, 2, arguments, Role.name)

  scope = (0, _util.defaults)(scope, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        role: (0, _common.wrap)(name),
      },
      {
        scope: (0, _common.wrap)(scope),
      }
    )
  )
}
