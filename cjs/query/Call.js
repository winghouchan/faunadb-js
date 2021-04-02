'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Call

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * Invokes a given function passing in the provided arguments
 *
 * ```
 * Call(Ref("functions/a_function"), 1, 2)
 * ```
 *
 * @param {module:query~ExprArg} ref
 *   The ref of the UserDefinedFunction to call
 * @param {...module:query~ExprArg} args
 *   A series of values to pass as arguments to the UDF.
 * @return {Expr}
 * */
function Call(ref) {
  _common.arity.min(1, arguments, Call.name)

  var args = (0, _common.argsToArray)(arguments)
  args.shift()
  return new _Expr.default({
    call: (0, _common.wrap)(ref),
    arguments: (0, _common.wrap)((0, _common.varargs)(args)),
  })
}
