'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = MoveDatabase

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Move database to a new hierarchy.
 *
 * @param {string}  from database reference to be moved.
 * @param {string}  to new parent database reference.
 * @return {Expr}   The expression wrapping the provided object.
 * @see <a href="https://app.fauna.com/documentation/reference/queryapi#write-functions">FaunaDB Write Functions</a>
 */
function MoveDatabase(from, to) {
  _common.arity.exact(2, arguments, MoveDatabase.name)

  return new _Expr.default({
    move_database: (0, _common.wrap)(from),
    to: (0, _common.wrap)(to),
  })
}
