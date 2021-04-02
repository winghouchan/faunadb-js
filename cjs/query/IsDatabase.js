'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = IsDatabase

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Check if the expression is a database.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isdatabase">IsDatabase</a>
 */
function IsDatabase(expr) {
  _common.arity.exact(1, arguments, IsDatabase.name)

  return new _Expr.default({
    is_database: (0, _common.wrap)(expr),
  })
}
