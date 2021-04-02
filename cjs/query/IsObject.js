'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = IsObject

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Check if the expression is an object.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isobject">IsObject</a>
 */
function IsObject(expr) {
  _common.arity.exact(1, arguments, IsObject.name)

  return new _Expr.default({
    is_object: (0, _common.wrap)(expr),
  })
}
