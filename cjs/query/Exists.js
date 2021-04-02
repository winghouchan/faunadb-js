'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Exists

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#read-functions).
 *
 * @param {module:query~ExprArg} ref
 *   An expression resulting in a Ref.
 * @param {?module:query~ExprArg} ts
 *   The snapshot time at which to check for the document's existence.
 * @return {Expr}
 */
function Exists(ref, ts) {
  _common.arity.between(1, 2, arguments, Exists.name)

  ts = (0, _util.defaults)(ts, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        exists: (0, _common.wrap)(ref),
      },
      {
        ts: (0, _common.wrap)(ts),
      }
    )
  )
} // Write functions
