'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = LowerCase

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to LowerCase.
 * @return {string} the string converted to lowercase
 */
function LowerCase(value) {
  _common.arity.exact(1, arguments, LowerCase.name)

  return new _Expr.default({
    lowercase: (0, _common.wrap)(value),
  })
}
