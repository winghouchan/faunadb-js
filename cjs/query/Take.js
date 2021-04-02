'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Take

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} number
 *   An expression resulting in the number of elements to take from the collection.
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 * */
function Take(number, collection) {
  _common.arity.exact(2, arguments, Take.name)

  return new _Expr.default({
    take: (0, _common.wrap)(number),
    collection: (0, _common.wrap)(collection),
  })
}
