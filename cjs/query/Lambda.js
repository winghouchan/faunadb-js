'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Lambda

var _fnAnnotate = _interopRequireDefault(require('fn-annotate'))

var _errors = require('../errors')

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

var _Var = _interopRequireDefault(require('./Var'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * Takes a Javascript function, and will transform it
 * into the appropriate FaunaDB query. For example:
 *
 * ```
 * Lambda(function(a) { return Add(a, a); });
 * // Returns { lambda: 'a', expr: { add: [{ var: a }, { var: a }] } }
 * ```
 * Note that the driver will handle wrapping all usages of the lambda's bound
 * variables with the {@link modules:query~Var} function.
 *
 * @param {function} func
 *   Takes the provided function and produces the appropriate FaunaDB query expression.
 * @return {Expr}
 *
 */
function Lambda() {
  _common.arity.between(1, 2, arguments, Lambda.name)

  switch (arguments.length) {
    case 1:
      var value = arguments[0]

      if (typeof value === 'function') {
        return lambdaFunc(value)
      } else if (
        value instanceof _Expr.default ||
        (0, _util.checkInstanceHasProperty)(value, '_isFaunaExpr')
      ) {
        return value
      } else {
        throw new _errors.InvalidValue(
          'Lambda function takes either a Function or an Expr.'
        )
      }

    case 2:
      var var_name = arguments[0]
      var expr = arguments[1]
      return lambdaExpr(var_name, expr)
  }
}
/**
 * @private
 */

function lambdaFunc(func) {
  var vars = (0, _fnAnnotate.default)(func)

  switch (vars.length) {
    case 0:
      throw new _errors.InvalidValue(
        'Provided Function must take at least 1 argument.'
      )

    case 1:
      return lambdaExpr(vars[0], func((0, _Var.default)(vars[0])))

    default:
      return lambdaExpr(
        vars,
        func.apply(
          null,
          vars.map(function(name) {
            return (0, _Var.default)(name)
          })
        )
      )
  }
}
/**
 * @private
 */

function lambdaExpr(var_name, expr) {
  return new _Expr.default({
    lambda: (0, _common.wrap)(var_name),
    expr: (0, _common.wrap)(expr),
  })
}
