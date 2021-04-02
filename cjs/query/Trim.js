'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Trim

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to Trim.
 * @return {string} a string with leading and trailing whitespace removed
 */
function Trim(value) {
  _common.arity.exact(1, arguments, Trim.name)

  return new _Expr.default({
    trim: (0, _common.wrap)(value),
  })
}
