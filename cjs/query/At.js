'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = At

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} timestamp
 *   An Expr that will evaluate to a Time.
 * @param {module:query~ExprArg} expr
 *   The Expr to run at the given snapshot time.
 * @return {Expr}
 * */
function At(timestamp, expr) {
  _common.arity.exact(2, arguments, At.name)

  return new _Expr.default({
    at: (0, _common.wrap)(timestamp),
    expr: (0, _common.wrap)(expr),
  })
}
