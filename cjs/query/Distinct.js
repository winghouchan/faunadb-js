'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Distinct

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} set
 *   A SetRef to remove duplicates from.
 * @return {Expr}
 * */
function Distinct(set) {
  _common.arity.exact(1, arguments, Distinct.name)

  return new _Expr.default({
    distinct: (0, _common.wrap)(set),
  })
}
