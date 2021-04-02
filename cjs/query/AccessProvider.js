'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = AccessProvider

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 *
 * @param {module:query~ExprArg} name
 * A string representing an AccessProvider's name
 * @return {Expr}
 */
function AccessProvider(name) {
  _common.arity.exact(1, arguments, AccessProvider.name)

  return new _Expr.default({
    access_provider: (0, _common.wrap)(name),
  })
}
