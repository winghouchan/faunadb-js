'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = StartsWith

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns true if the string starts with the given prefix value, or false if otherwise
 *
 * @param {string} value   - the string to evaluate
 * @param {string} search  - the prefix to search for
 * @return {boolean}       - does `value` start with `search`
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/startswith">FaunaDB StartsWith Function</a>
 */
function StartsWith(value, search) {
  _common.arity.exact(2, arguments, StartsWith.name)

  return new _Expr.default({
    startswith: (0, _common.wrap)(value),
    search: (0, _common.wrap)(search),
  })
}
