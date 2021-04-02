'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Reduce

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/reduce).
 *
 * @param {module:query~ExprArg} lambda
 *   The accumulator function
 * @param {module:query~ExprArg} initial
 *   The initial value
 * @param {module:query~ExprArg} collection
 *   The colleciton to be reduced
 * @return {Expr}
 */
function Reduce(lambda, initial, collection) {
  _common.arity.exact(3, arguments, Reduce.name)

  return new _Expr.default({
    reduce: (0, _common.wrap)(lambda),
    initial: (0, _common.wrap)(initial),
    collection: (0, _common.wrap)(collection),
  })
}
