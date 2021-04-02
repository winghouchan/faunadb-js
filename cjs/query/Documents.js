'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Documents

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns a set of all documents in the given collection.
 * A set must be paginated in order to retrieve its values.
 *
 * @param collection a reference to the collection. Type: Ref
 * @return a new {@link Expr} instance
 * @see #Paginate(Expr)
 */
function Documents(collection) {
  _common.arity.exact(1, arguments, Documents.name)

  return new _Expr.default({
    documents: (0, _common.wrap)(collection),
  })
}
