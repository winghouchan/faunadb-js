'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Ref

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * If one parameter is provided, constructs a literal Ref value.
 * The string `collections/widget/123` will be equivalent to `new values.Ref('123', new values.Ref('widget', values.Native.COLLECTIONS))`
 *
 * If two are provided, constructs a Ref() function that, when evaluated, returns a Ref value.
 *
 * @param {string|module:query~ExprArg} ref|cls
 *   Alone, the ref in path form. Combined with `id`, must be a collection ref.
 * @param {module:query~ExprArg} [id]
 *   A numeric id of the given collection.
 * @return {Expr}
 */
function Ref() {
  _common.arity.between(1, 2, arguments, Ref.name)

  switch (arguments.length) {
    case 1:
      return new _Expr.default({
        '@ref': (0, _common.wrap)(arguments[0]),
      })

    case 2:
      return new _Expr.default({
        ref: (0, _common.wrap)(arguments[0]),
        id: (0, _common.wrap)(arguments[1]),
      })
  }
}
