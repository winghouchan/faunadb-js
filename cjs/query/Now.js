'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Now

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Returns the current snapshot time.
 *
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/now">Now function</a>
 */
function Now() {
  _common.arity.exact(0, arguments, Now.name)

  return new _Expr.default({
    now: (0, _common.wrap)(null),
  })
} // Miscellaneous functions
