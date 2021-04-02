'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Map

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection to be mapped over.
 * @param {module:query~ExprArg|function} lambda
 *   A function to be called for each element of the collection.
 * @return {Expr}
 * */
function Map(collection, lambda_expr) {
  _common.arity.exact(2, arguments, Map.name)

  return new _Expr.default({
    map: (0, _common.wrap)(lambda_expr),
    collection: (0, _common.wrap)(collection),
  })
}
