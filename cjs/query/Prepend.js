'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Prepend

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} elements
 *   An expression resulting in a collection of elements to prepend to the given collection.
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 */
function Prepend(elements, collection) {
  _common.arity.exact(2, arguments, Prepend.name)

  return new _Expr.default({
    prepend: (0, _common.wrap)(elements),
    collection: (0, _common.wrap)(collection),
  })
}
