'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = CurrentIdentity

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @return {Expr}
 */
function CurrentIdentity() {
  _common.arity.exact(0, arguments, CurrentIdentity.name)

  return new _Expr.default({
    current_identity: null,
  })
}
