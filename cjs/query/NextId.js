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
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @deprecated use NewId instead
 * @return {Expr}
 */
var _default = (0, _utilDeprecate.default)(function() {
  _common.arity.exact(0, arguments, 'NextId')

  return new _Expr.default({
    next_id: null,
  })
}, 'NextId() is deprecated, use NewId() instead')

exports.default = _default
