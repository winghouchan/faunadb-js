'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Singleton

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref of the document for which to retrieve the singleton set.
 * @return {Expr}
 */
function Singleton(ref) {
  _common.arity.exact(1, arguments, Singleton.name)

  return new _Expr.default({
    singleton: (0, _common.wrap)(ref),
  })
}
