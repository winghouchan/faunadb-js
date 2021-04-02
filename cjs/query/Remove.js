'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Remove

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref of the document whose event should be removed.
 * @param {module:query~ExprArg} ts
 *   The valid time of the event.
 * @param {module:query~ExprArg} action
 *   The event action (Create, Update, or Delete) that should be removed.
 * @return {Expr}
 */
function Remove(ref, ts, action) {
  _common.arity.exact(3, arguments, Remove.name)

  return new _Expr.default({
    remove: (0, _common.wrap)(ref),
    ts: (0, _common.wrap)(ts),
    action: (0, _common.wrap)(action),
  })
}
