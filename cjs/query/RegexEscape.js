'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = RegexEscape

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * It takes a string and returns a regex which matches the input string verbatim.
 *
 * @param value      - the string to analyze
 * @return {string}  - a regex which matches the input string verbatim
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/regexescape">FaunaDB RegexEscape Function</a>
 */
function RegexEscape(value) {
  _common.arity.exact(1, arguments, RegexEscape.name)

  return new _Expr.default({
    regexescape: (0, _common.wrap)(value),
  })
}
