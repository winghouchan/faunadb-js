'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Insert

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to insert against
 * @param {module:query~ExprArg} ts
 *   The valid time of the inserted event
 * @param {module:query~ExprArg} action
 *   Whether the event should be a Create, Update, or Delete.
 * @param {module:query~ExprArg} params
 *   If this is a Create or Update, the parameters of the document.
 * @return {Expr}
 */
function Insert(ref, ts, action, params) {
  _common.arity.exact(4, arguments, Insert.name)

  return new _Expr.default({
    insert: (0, _common.wrap)(ref),
    ts: (0, _common.wrap)(ts),
    action: (0, _common.wrap)(action),
    params: (0, _common.wrap)(params),
  })
}
