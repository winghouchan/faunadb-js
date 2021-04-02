'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = UpperCase

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to Uppercase.
 * @return {string} An uppercase string
 */
function UpperCase(value) {
  _common.arity.exact(1, arguments, UpperCase.name)

  return new _Expr.default({
    uppercase: (0, _common.wrap)(value),
  })
}
