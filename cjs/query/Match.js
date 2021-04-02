'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Match

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} index
 *   The Ref of the index to match against.
 * @param {...module:query~ExprArg} terms
 *   A list of terms used in the match.
 * @return {Expr}
 */
function Match(index) {
  _common.arity.min(1, arguments, Match.name)

  var args = (0, _common.argsToArray)(arguments)
  args.shift()
  return new _Expr.default({
    match: (0, _common.wrap)(index),
    terms: (0, _common.wrap)((0, _common.varargs)(args)),
  })
}
