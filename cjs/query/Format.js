'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Format

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Format values into a string.
 *
 * @param  {string}  string string with format specifiers
 * @param  {array}   values list of values to format
 * @return {string}         a string
 */
function Format(string) {
  _common.arity.min(1, arguments, Format.name)

  var args = (0, _common.argsToArray)(arguments)
  args.shift()
  return new _Expr.default({
    format: (0, _common.wrap)(string),
    values: (0, _common.wrap)((0, _common.varargs)(args)),
  })
} // Time and date functions
