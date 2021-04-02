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
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a class.
 *     - name (required): the name of the class to create
 * @return {Expr}
 *
 * @deprecated use CreateCollection instead
 */
var _default = (0, _utilDeprecate.default)(function(params) {
  _common.arity.exact(1, arguments, 'CreateClass')

  return new _Expr.default({
    create_class: (0, _common.wrap)(params),
  })
}, 'CreateClass() is deprecated, use CreateCollection() instead')

exports.default = _default
