'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Delete

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to delete.
 * @return {Expr}
 */
function Delete(ref) {
  _common.arity.exact(1, arguments, Delete.name)

  return new _Expr.default({
    delete: (0, _common.wrap)(ref),
  })
}
