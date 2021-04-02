'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Join

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} source
 *   A SetRef of the source set
 * @param {module:query~ExprArg|function} target
 *   A Lambda that will accept each element of the source Set and return a Set
 * @return {Expr}
 */
function Join(source, target) {
  _common.arity.exact(2, arguments, Join.name)

  return new _Expr.default({
    join: (0, _common.wrap)(source),
    with: (0, _common.wrap)(target),
  })
}
