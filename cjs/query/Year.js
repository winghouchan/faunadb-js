'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Year

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns the time expression's year, following the ISO-8601 standard.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a year.
 * @return {Expr}
 */
function Year(expr) {
  _common.arity.exact(1, arguments, Year.name)

  return new _Expr.default({
    year: (0, _common.wrap)(expr),
  })
}
