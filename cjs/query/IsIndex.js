'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = IsIndex

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Check if the expression is an index.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isindex">IsIndex</a>
 */
function IsIndex(expr) {
  _common.arity.exact(1, arguments, IsIndex.name)

  return new _Expr.default({
    is_index: (0, _common.wrap)(expr),
  })
}
