'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = NGram

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {module:query~ExprArg} terms
 *   A document from which to produce ngrams.
 * @param {?Object} opts
 *   An object of options
 *     - min: The minimum ngram size.
 *     - max: The maximum ngram size.
 * @return {Array|Value}
 */
function NGram(terms, min, max) {
  _common.arity.between(1, 3, arguments, NGram.name)

  min = (0, _util.defaults)(min, null)
  max = (0, _util.defaults)(max, null)
  return new _Expr.default(
    (0, _common.params)(
      {
        ngram: (0, _common.wrap)(terms),
      },
      {
        min: (0, _common.wrap)(min),
        max: (0, _common.wrap)(max),
      }
    )
  )
}
