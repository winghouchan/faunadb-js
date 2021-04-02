'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = HasCurrentToken

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
function HasCurrentToken() {
  _common.arity.exact(0, arguments, HasCurrentToken.name)

  return new _Expr.default({
    has_current_token: null,
  })
} // String functions
