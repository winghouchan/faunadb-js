'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ContainsStrRegex

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns true if the string contains the given pattern, or false if otherwise
 *
 * @param {string} value   - the string to evaluate
 * @param {string} pattern - the pattern to search for
 * @return {boolean}       - was the regex search result found
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/containsstrregex">FaunaDB ContainsStrRegex Function</a>
 */
function ContainsStrRegex(value, pattern) {
  _common.arity.exact(2, arguments, ContainsStrRegex.name)

  return new _Expr.default({
    containsstrregex: (0, _common.wrap)(value),
    pattern: (0, _common.wrap)(pattern),
  })
}
