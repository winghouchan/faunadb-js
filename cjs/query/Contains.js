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
 * @param {module:query~ExprArg} path
 *   An array representing a path to check for the existence of.
 * @param {module:query~ExprArg} in
 *   An object to search against.
 * @return {Expr}
 *
 * @deprecated use ContainsPath instead
 */
var _default = (0, _utilDeprecate.default)(function(path, _in) {
  _common.arity.exact(2, arguments, 'Contains')

  return new _Expr.default({
    contains: (0, _common.wrap)(path),
    in: (0, _common.wrap)(_in),
  })
}, 'Contains() is deprecated, use ContainsPath() instead')

exports.default = _default
