'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Mean

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * Returns the mean of all elements in the collection.
 *
 * @param {array} - collection the numbers
 * @return {float} - the mean of all numbers in the collection
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/mean">Mean function</a>
 */
function Mean(collection) {
  _common.arity.exact(1, arguments, Mean.name)

  return new _Expr.default({
    mean: (0, _common.wrap)(collection),
  })
}
