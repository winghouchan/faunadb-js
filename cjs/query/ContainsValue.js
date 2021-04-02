'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ContainsValue

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} value
 *   Represent the value we want to search for.
 * @param {module:query~ExprArg} in
 *   An object we will search for the value passed in.
 * @return {Expr}
 */
function ContainsValue(value, _in) {
  _common.arity.exact(2, arguments, ContainsValue.name)

  return new _Expr.default({
    contains_value: (0, _common.wrap)(value),
    in: (0, _common.wrap)(_in),
  })
}
