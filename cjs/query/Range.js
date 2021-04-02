'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Range

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/range).
 *
 * @param {module:query~ExprArg} set
 *   A SetRef of the source set
 * @param {module:query~ExprArg} from
 *   The lower bound
 * @param {module:query~ExprArg} to
 *   The upper bound
 * @return {Expr}
 */
function Range(set, from, to) {
  _common.arity.exact(3, arguments, Range.name)

  return new _Expr.default({
    range: (0, _common.wrap)(set),
    from: (0, _common.wrap)(from),
    to: (0, _common.wrap)(to),
  })
}
