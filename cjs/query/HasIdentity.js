'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _utilDeprecate = _interopRequireDefault(require('util-deprecate'))

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
var _default = (0, _utilDeprecate.default)(function() {
  _common.arity.exact(0, arguments, 'HasIdentity')

  return new _Expr.default({
    has_identity: null,
  })
}, 'HasIdentity() is deprecated, use HasCurrentIdentity() instead')

exports.default = _default
