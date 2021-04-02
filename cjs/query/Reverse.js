'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Reverse

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * @param {module:query~ExprArg} expr
 *  An expression (i.e. Set, Page, or Array) to reverse
 * @return {Expr}
 */
function Reverse(expr) {
  _common.arity.exact(1, arguments, Reverse.name)

  return new _Expr.default({
    reverse: (0, _common.wrap)(expr),
  })
}
