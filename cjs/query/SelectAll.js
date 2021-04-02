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
 *   An array representing a path to pull from an object.
 * @param {module:query~ExprArg} from
 *   The object to select from
 * @return {Expr}
 *
 * @deprecated avoid using
 */
var _default = (0, _utilDeprecate.default)(function(path, from) {
  _common.arity.exact(2, arguments, 'SelectAll')

  return new _Expr.default({
    select_all: (0, _common.wrap)(path),
    from: (0, _common.wrap)(from),
  })
}, 'SelectAll() is deprecated. Avoid use.')

exports.default = _default
