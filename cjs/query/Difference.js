'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Difference

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {...module:query~ExprArg} sets
 *   A list of SetRefs to diff.
 * @return {Expr}
 * */
function Difference() {
  _common.arity.min(1, arguments, Difference.name)

  return new _Expr.default({
    difference: (0, _common.wrap)((0, _common.varargs)(arguments)),
  })
}
