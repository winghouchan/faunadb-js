'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Length

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to calculate the length in codepoints.
 * @return {int} the length of the string in codepoints
 */
function Length(value) {
  _common.arity.exact(1, arguments, Length.name)

  return new _Expr.default({
    length: (0, _common.wrap)(value),
  })
}
