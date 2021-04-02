'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {...module:query~ExprArg} fields
 *   The object to be escaped.
 * @return {Expr}
 * */
const FaunaObject = function(fields) {
  _common.arity.exact(1, arguments, FaunaObject.name)

  return new _Expr.default({
    object: (0, _common.wrapValues)(fields),
  })
}

var _default = FaunaObject
exports.default = _default
