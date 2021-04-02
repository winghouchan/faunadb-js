'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = HasCurrentIdentity

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
function HasCurrentIdentity() {
  _common.arity.exact(0, arguments, HasCurrentIdentity.name)

  return new _Expr.default({
    has_current_identity: null,
  })
}
