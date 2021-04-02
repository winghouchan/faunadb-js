'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = FaunaFunction

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the user defined function.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the user defined function's scope.
 * @return {Expr}
 */
function FaunaFunction(name, scope) {
  _common.arity.between(1, 2, arguments, FaunaFunction.name)

  switch (arguments.length) {
    case 1:
      return new _Expr.default({
        function: (0, _common.wrap)(name),
      })

    case 2:
      return new _Expr.default({
        function: (0, _common.wrap)(name),
        scope: (0, _common.wrap)(scope),
      })
  }
}
