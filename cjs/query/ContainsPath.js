'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ContainsPath

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} path
 *   An array representing a path to check for the existence of.
 * @param {module:query~ExprArg} in
 *   An object to search against.
 * @return {Expr}
 */
function ContainsPath(path, _in) {
  _common.arity.exact(2, arguments, ContainsPath.name)

  return new _Expr.default({
    contains_path: (0, _common.wrap)(path),
    in: (0, _common.wrap)(_in),
  })
}
