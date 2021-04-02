'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = TitleCase

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to TitleCase.
 * @return {string}  A string converted to titlecase
 */
function TitleCase(value) {
  _common.arity.exact(1, arguments, TitleCase.name)

  return new _Expr.default({
    titlecase: (0, _common.wrap)(value),
  })
}
