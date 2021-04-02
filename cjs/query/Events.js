'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Events

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} ref
 *   A Ref or SetRef to retrieve an event set from.
 * @return {Expr}
 */
function Events(ref_set) {
  _common.arity.exact(1, arguments, Events.name)

  return new _Expr.default({
    events: (0, _common.wrap)(ref_set),
  })
}
