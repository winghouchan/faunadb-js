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
 * @param {module:query~ExprArg} name
 *   The name of the class.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the class's scope.
 * @return {Expr}
 *
 * @deprecated Class is deprecated, use Collection instead
 */
var _default = (0, _utilDeprecate.default)(function(name, scope) {
  _common.arity.between(1, 2, arguments, 'Class')

  switch (arguments.length) {
    case 1:
      return new _Expr.default({
        class: (0, _common.wrap)(name),
      })

    case 2:
      return new _Expr.default({
        class: (0, _common.wrap)(name),
        scope: (0, _common.wrap)(scope),
      })
  }
}, 'Class() is deprecated, use Collection() instead')

exports.default = _default
