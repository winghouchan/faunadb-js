'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = AccessProviders

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * @param {module:query~ExprArg} scope
 *   The Ref of the database set's scope.
 * @return {Expr}
 */
function AccessProviders(scope) {
  _common.arity.max(1, arguments, AccessProviders.name)

  scope = (0, _util.defaults)(scope, null)
  return new _Expr.default({
    access_providers: (0, _common.wrap)(scope),
  })
}
