'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Sum

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * Sum the elements in the collection.
 *
 * @param {array} - collection of numbers
 * @return {integer} - total of all numbers in collection
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/sum">Sum function</a>
 */
function Sum(collection) {
  _common.arity.exact(1, arguments, Sum.name)

  return new _Expr.default({
    sum: (0, _common.wrap)(collection),
  })
}
