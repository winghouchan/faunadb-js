'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = CreateCollection

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a collection.
 *     - name (required): the name of the collection to create
 * @return {Expr}
 */
function CreateCollection(params) {
  _common.arity.exact(1, arguments, CreateCollection.name)

  return new _Expr.default({
    create_collection: (0, _common.wrap)(params),
  })
}
