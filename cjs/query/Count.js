'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Count

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * Count the number of elements in the collection.
 *
 * @param {array}    - array of items
 * @return {integer} - number of items in the collection
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/count">Count function</a>
 */
function Count(collection) {
  _common.arity.exact(1, arguments, Count.name)

  return new _Expr.default({
    count: (0, _common.wrap)(collection),
  })
}
