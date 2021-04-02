'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Let

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

var _Var = _interopRequireDefault(require('./Var'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} bindings
 *   A set of bindings to use within the given expression.
 * @param {module:query~ExprArg} in
 *   The expression to run with the given bindings.
 * @return {Expr}
 * */
function Let(vars, expr) {
  _common.arity.exact(2, arguments, Let.name)

  var bindings = []

  if (Array.isArray(vars)) {
    bindings = vars.map(function(item) {
      return (0, _common.wrapValues)(item)
    })
  } else {
    bindings = Object.keys(vars).map(function(k) {
      var b = {}
      b[k] = (0, _common.wrap)(vars[k])
      return b
    })
  }

  if (typeof expr === 'function') {
    if (Array.isArray(vars)) {
      var expr_vars = []
      vars.forEach(function(item) {
        Object.keys(item).forEach(function(name) {
          expr_vars.push((0, _Var.default)(name))
        })
      })
      expr = expr.apply(null, expr_vars)
    } else {
      expr = expr.apply(
        null,
        Object.keys(vars).map(function(name) {
          return (0, _Var.default)(name)
        })
      )
    }
  }

  return new _Expr.default({
    let: bindings,
    in: (0, _common.wrap)(expr),
  })
}
