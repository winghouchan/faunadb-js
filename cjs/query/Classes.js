'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _utilDeprecate = _interopRequireDefault(require('util-deprecate'))

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `classes` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the class set's scope.
 * @return {Expr}
 */
var _default = (0, _utilDeprecate.default)(function(scope) {
  _common.arity.max(1, arguments, 'Classes')

  scope = (0, _util.defaults)(scope, null)
  return new _Expr.default({
    classes: (0, _common.wrap)(scope),
  })
}, 'Classes() is deprecated, use Collections() instead')

exports.default = _default
