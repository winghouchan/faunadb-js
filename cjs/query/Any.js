'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Any

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * Evaluates to true if any element of the collection is true.
 *
 * @param {array} - collection the collection
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/any">Any function</a>
 */
function Any(collection) {
  _common.arity.exact(1, arguments, Any.name)

  return new _Expr.default({
    any: (0, _common.wrap)(collection),
  })
}
