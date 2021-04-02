'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Do

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {...module:query~ExprArg} args
 *   A series of expressions to run.
 * @return {Expr}
 * */
function Do() {
  _common.arity.min(1, arguments, Do.name)

  var args = (0, _common.argsToArray)(arguments)
  return new _Expr.default({
    do: (0, _common.wrap)(args),
  })
}
