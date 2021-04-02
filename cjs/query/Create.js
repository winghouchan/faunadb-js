'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Create

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref (usually a CollectionRef) to create.
 * @param {?module:query~ExprArg} params
 *   An object representing the parameters of the document.
 * @return {Expr}
 */
function Create(collection_ref, params) {
  _common.arity.between(1, 2, arguments, Create.name)

  return new _Expr.default({
    create: (0, _common.wrap)(collection_ref),
    params: (0, _common.wrap)(params),
  })
}
