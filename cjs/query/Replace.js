'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Replace

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to replace.
 * @param {module:query~ExprArg} params
 *   An object representing the parameters of the document.
 * @return {Expr}
 */
function Replace(ref, params) {
  _common.arity.exact(2, arguments, Replace.name)

  return new _Expr.default({
    replace: (0, _common.wrap)(ref),
    params: (0, _common.wrap)(params),
  })
}
