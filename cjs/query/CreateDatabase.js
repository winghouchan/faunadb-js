'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = CreateDatabase

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a database.
 *     - name (required): the name of the database to create
 * @return {Expr}
 */
function CreateDatabase(params) {
  _common.arity.exact(1, arguments, CreateDatabase.name)

  return new _Expr.default({
    create_database: (0, _common.wrap)(params),
  })
}
