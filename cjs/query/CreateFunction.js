'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = CreateFunction

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a new user defined function.
 *     - name: The name of the function
 *     - body: A lambda function (escaped with `query`).
 * @return {Expr}
 */
function CreateFunction(params) {
  _common.arity.exact(1, arguments, CreateFunction.name)

  return new _Expr.default({
    create_function: (0, _common.wrap)(params),
  })
}
