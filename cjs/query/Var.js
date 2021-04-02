'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Var

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} varName
 *   The name of the bound var.
 * @return {Expr}
 * */
function Var(varName) {
  _common.arity.exact(1, arguments, Var.name)

  return new _Expr.default({
    var: (0, _common.wrap)(varName),
  })
}
