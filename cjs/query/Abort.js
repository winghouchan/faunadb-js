'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Abort

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} msg
 *   The message to send back to the client.
 * @return {Expr}
 * */
function Abort(msg) {
  _common.arity.exact(1, arguments, Abort.name)

  return new _Expr.default({
    abort: (0, _common.wrap)(msg),
  })
}
