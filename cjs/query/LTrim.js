'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = LTrim

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to trim leading white space.
 * @return {string} the string with leading white space removed
 */
function LTrim(value) {
  _common.arity.exact(1, arguments, LTrim.name)

  return new _Expr.default({
    ltrim: (0, _common.wrap)(value),
  })
}
