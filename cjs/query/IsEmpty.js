'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = IsEmpty

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 */
function IsEmpty(collection) {
  _common.arity.exact(1, arguments, IsEmpty.name)

  return new _Expr.default({
    is_empty: (0, _common.wrap)(collection),
  })
}
