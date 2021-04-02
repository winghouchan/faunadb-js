'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = FaunaIndex

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the index.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the index's scope.
 * @return {Expr}
 */
function FaunaIndex(name, scope) {
  _common.arity.between(1, 2, arguments, FaunaIndex.name)

  switch (arguments.length) {
    case 1:
      return new _Expr.default({
        index: (0, _common.wrap)(name),
      })

    case 2:
      return new _Expr.default({
        index: (0, _common.wrap)(name),
        scope: (0, _common.wrap)(scope),
      })
  }
}
