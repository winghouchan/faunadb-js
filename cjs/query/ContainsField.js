'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = ContainsField

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * @param {string} field
 *   A field name we want to confirm exists.
 * @param {module:query~ExprArg} obj
 *   An object to search against.
 * @return {Expr}
 */
function ContainsField(field, obj) {
  _common.arity.exact(2, arguments, ContainsField.name)

  return new _Expr.default({
    contains_field: (0, _common.wrap)(field),
    in: (0, _common.wrap)(obj),
  })
}
