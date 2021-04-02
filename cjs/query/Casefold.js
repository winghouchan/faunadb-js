'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Casefold

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} string - The string to casefold.
 * @param {string} normalizer - The algorithm to use. One of: NFKCCaseFold, NFC, NFD, NFKC, NFKD.
 * @return {string} a normalized string
 */
function Casefold(string, normalizer) {
  _common.arity.min(1, arguments, Casefold.name)

  return new _Expr.default(
    (0, _common.params)(
      {
        casefold: (0, _common.wrap)(string),
      },
      {
        normalizer: (0, _common.wrap)(normalizer),
      }
    )
  )
}
