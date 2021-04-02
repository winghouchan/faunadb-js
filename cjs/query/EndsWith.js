'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = EndsWith

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns true if the string ends with the given suffix value, or false if otherwise
 *
 * @param {string} value   - the string to evaluate
 * @param {string} search  - the suffix to search for
 * @return {boolean}       - does `value` end with `search`
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/endswith">FaunaDB EndsWith Function</a>
 */
function EndsWith(value, search) {
  _common.arity.exact(2, arguments, EndsWith.name)

  return new _Expr.default({
    endswith: (0, _common.wrap)(value),
    search: (0, _common.wrap)(search),
  })
}
