'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Merge

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Merge two or more objects..
 *
 * @param {...module:query~ExprArg} merge merge the first object.
 * @param {...module:query~ExprArg} _with the second object or a list of objects
 * @param {...module:query~ExprArg} lambda a lambda to resolve possible conflicts
 * @return {Expr}
 * */
function Merge(merge, _with, lambda) {
  _common.arity.between(2, 3, arguments, Merge.name)

  return new _Expr.default(
    (0, _common.params)(
      {
        merge: (0, _common.wrap)(merge),
        with: (0, _common.wrap)(_with),
      },
      {
        lambda: (0, _common.wrap)(lambda),
      }
    )
  )
}
