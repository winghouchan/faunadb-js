'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = NewId

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @return {Expr}
 */
function NewId() {
  _common.arity.exact(0, arguments, NewId.name)

  return new _Expr.default({
    new_id: null,
  })
}
