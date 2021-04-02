'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = All

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * Evaluates to true if all elements of the collection are true.
 *
 * @param {array} - collection the collection
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/all">All function</a>
 */
function All(collection) {
  _common.arity.exact(1, arguments, All.name)

  return new _Expr.default({
    all: (0, _common.wrap)(collection),
  })
}
