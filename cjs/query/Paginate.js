'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Paginate

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#read-functions).
 * You may want to utilize {@link Client#paginate} to obtain a {@link PageHelper},
 * rather than using this query function directly.
 *
 * @param {module:query~ExprArg} set
 *   An expression resulting in a SetRef to page over.
 * @param {?Object} opts
 *  An object representing options for pagination.
 *    - size: Maximum number of results to return.
 *    - after: Return the next page of results after this cursor (inclusive).
 *    - before: Return the previous page of results before this cursor (exclusive).
 *    - sources: If true, include the source sets along with each element.
 * @return {Expr}
 */
function Paginate(set, opts) {
  _common.arity.between(1, 2, arguments, Paginate.name)

  opts = (0, _util.defaults)(opts, {})
  return new _Expr.default(
    Object.assign(
      {
        paginate: (0, _common.wrap)(set),
      },
      (0, _common.wrapValues)(opts)
    )
  )
}
