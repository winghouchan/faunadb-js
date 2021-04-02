'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = IsNull

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Check if the expression is null.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isnull">IsNull</a>
 */
function IsNull(expr) {
  _common.arity.exact(1, arguments, IsNull.name)

  return new _Expr.default({
    is_null: (0, _common.wrap)(expr),
  })
}
