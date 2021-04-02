'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ToObject

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Converts an expression to an Object.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to an Object.
 * @return {Expr}
 */
function ToObject(expr) {
  _common.arity.exact(1, arguments, ToObject.name)

  return new _Expr.default({
    to_object: (0, _common.wrap)(expr),
  })
}
