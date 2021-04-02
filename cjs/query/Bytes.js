'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Bytes

var _values = require('../values')

var _common = require('./common')

/**
 * @param {Uint8Array|ArrayBuffer|module:query~ExprArg} bytes
 *   A base64 encoded string or a byte array
 * @return {Expr}
 */
function Bytes(bytes) {
  _common.arity.exact(1, arguments, Bytes.name)

  return new _values.Bytes(bytes)
}
