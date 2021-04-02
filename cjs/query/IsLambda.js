'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = IsLambda

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Check if the expression is a lambda.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/islambda">IsLambda</a>
 */
function IsLambda(expr) {
  _common.arity.exact(1, arguments, IsLambda.name)

  return new _Expr.default({
    is_lambda: (0, _common.wrap)(expr),
  })
}
