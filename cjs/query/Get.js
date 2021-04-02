'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Get

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
 *   An expression resulting in either a Ref or SetRef.
 * @param {?module:query~ExprArg} ts
 *   The snapshot time at which to get the document.
 * @return {Expr}
 */
function Get(ref, ts) {
  _common.arity.between(1, 2, arguments, Get.name)

  ts = (0, _util.defaults)(ts, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        get: (0, _common.wrap)(ref),
      },
      {
        ts: (0, _common.wrap)(ts),
      }
    )
  )
}
