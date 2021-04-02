'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Intersection

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {...module:query~ExprArg} sets
 *   A list of SetRefs to intersect.
 * @return {Expr}
 * */
function Intersection() {
  _common.arity.min(1, arguments, Intersection.name)

  return new _Expr.default({
    intersection: (0, _common.wrap)((0, _common.varargs)(arguments)),
  })
}
