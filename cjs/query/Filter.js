'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Filter

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection to be filtered.
 * @param {module:query~ExprArg|function} lambda
 *   A function that returns a boolean used to filter unwanted values.
 * @return {Expr}
 * */
function Filter(collection, lambda_expr) {
  _common.arity.exact(2, arguments, Filter.name)

  return new _Expr.default({
    filter: (0, _common.wrap)(lambda_expr),
    collection: (0, _common.wrap)(collection),
  })
}
