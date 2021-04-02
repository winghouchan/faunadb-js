'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Union

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {...module:query~ExprArg} sets
 *   A list of SetRefs to union together.
 * @return {Expr}
 */
function Union() {
  _common.arity.min(1, arguments, Union.name)

  return new _Expr.default({
    union: (0, _common.wrap)((0, _common.varargs)(arguments)),
  })
}
