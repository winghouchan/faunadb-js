'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = IsDoc

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Check if the expression is a document (either a reference or an instance).
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isdoc">IsDoc</a>
 */
function IsDoc(expr) {
  _common.arity.exact(1, arguments, IsDoc.name)

  return new _Expr.default({
    is_doc: (0, _common.wrap)(expr),
  })
}
