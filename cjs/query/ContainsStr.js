'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ContainsStr

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns true if the string contains the given substring, or false if otherwise
 *
 * @param {string} value  - the string to evaluate
 * @param {string} search - the substring to search for
 * @return {boolean}      - was the search result found
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/containsstr">FaunaDB ContainsStr Function</a>
 */
function ContainsStr(value, search) {
  _common.arity.exact(2, arguments, ContainsStr.name)

  return new _Expr.default({
    containsstr: (0, _common.wrap)(value),
    search: (0, _common.wrap)(search),
  })
}
