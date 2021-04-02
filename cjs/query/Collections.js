'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Collections

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `collections` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the collection set's scope.
 * @return {Expr}
 */
function Collections(scope) {
  _common.arity.max(1, arguments, Collections.name)

  scope = (0, _util.defaults)(scope, null)
  return new _Expr.default({
    collections: (0, _common.wrap)(scope),
  })
}
