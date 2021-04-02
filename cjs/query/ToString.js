'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToString

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression to a string literal.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a string.
 * @return {Expr}
 */
function ToString(expr) {
  _common.arity.exact(1, arguments, ToString.name)

  return new _Expr.default({
    to_string: (0, _common.wrap)(expr),
  })
}
