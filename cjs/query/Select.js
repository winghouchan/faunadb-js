'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Select

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} path
 *   An array representing a path to pull from an object.
 * @param {module:query~ExprArg} from
 *   The object to select from
 * @param {?module:query~ExprArg} default
 *   A default value if the path does not exist.
 * @return {Expr}
 */
function Select(path, from, _default) {
  _common.arity.between(2, 3, arguments, Select.name)

  var exprObj = {
    select: (0, _common.wrap)(path),
    from: (0, _common.wrap)(from),
  }

  if (_default !== undefined) {
    exprObj.default = (0, _common.wrap)(_default)
  }

  return new _Expr.default(exprObj)
}
