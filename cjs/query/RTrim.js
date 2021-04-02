'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = RTrim

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to remove white space from the end.
 * @return {string} the string with trailing whitespaces removed
 */
function RTrim(value) {
  _common.arity.exact(1, arguments, RTrim.name)

  return new _Expr.default({
    rtrim: (0, _common.wrap)(value),
  })
}
