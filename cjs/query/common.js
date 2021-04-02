'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.wrap = wrap
exports.wrapValues = wrapValues
exports.varargs = varargs
exports.params = params
exports.arity = arity
exports.argsToArray = argsToArray

var _errors = require('../errors')

var _Expr = _interopRequireDefault(require('../Expr'))

var _values = require('../values')

var _util = require('../_util')

var _Lambda = _interopRequireDefault(require('./Lambda'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Wraps an object as an Expression. This will automatically wrap any bare objects with
 * the appropriate {@link object} escaping.
 * @param {Object} obj
 *  The object to be wrapped as an Expression.
 * @returns {Expr}
 *   The expression wrapping the provided object.
 * @private
 */
function wrap(obj) {
  arity.exact(1, arguments, wrap.name)

  if (obj === null) {
    return null
  } else if (
    obj instanceof _Expr.default ||
    (0, _util.checkInstanceHasProperty)(obj, '_isFaunaExpr')
  ) {
    return obj
  } else if (typeof obj === 'symbol') {
    return obj.toString().replace(/Symbol\((.*)\)/, function(str, symbol) {
      return symbol
    })
  } else if (typeof obj === 'function') {
    return (0, _Lambda.default)(obj)
  } else if (Array.isArray(obj)) {
    return new _Expr.default(
      obj.map(function(elem) {
        return wrap(elem)
      })
    )
  } else if (obj instanceof Uint8Array || obj instanceof ArrayBuffer) {
    return new _values.Bytes(obj)
  } else if (typeof obj === 'object') {
    return new _Expr.default({
      object: wrapValues(obj),
    })
  } else {
    return obj
  }
}
/**
 * Wraps all of the values of a provided Object, while leaving the parent object unwrapped.
 * @param {Object} obj
 *  The object whose values are to be wrapped as Expressions.
 * @returns {Object}
 *  A copy of the provided object, with the values wrapped as Expressions.
 * @private
 */

function wrapValues(obj) {
  if (obj !== null) {
    var rv = {}
    Object.keys(obj).forEach(function(key) {
      rv[key] = wrap(obj[key])
    })
    return rv
  } else {
    return null
  }
}
/**
 * Called on rest arguments.
 * This ensures that a single value passed is not put in an array, so
 * `query.add([1, 2])` will work as well as `query.add(1, 2)`.
 *
 * @ignore
 */

function varargs(values) {
  var valuesAsArr = Array.isArray(values)
    ? values
    : Array.prototype.slice.call(values)
  return values.length === 1 ? values[0] : valuesAsArr
}
/**
 Adds optional parameters to the query.
 *
 * @ignore
 * */

function params(mainParams, optionalParams) {
  for (var key in optionalParams) {
    var val = optionalParams[key]

    if (val !== null && val !== undefined) {
      mainParams[key] = val
    }
  }

  return mainParams
}
/**
 * @ignore
 */

function arity(min, max, args, callerFunc) {
  if (
    (min !== null && args.length < min) ||
    (max !== null && args.length > max)
  ) {
    throw new _errors.InvalidArity(min, max, args.length, callerFunc)
  }
}

arity.exact = function(n, args, callerFunc) {
  arity(n, n, args, callerFunc)
}

arity.max = function(n, args, callerFunc) {
  arity(null, n, args, callerFunc)
}

arity.min = function(n, args, callerFunc) {
  arity(n, null, args, callerFunc)
}

arity.between = function(min, max, args, callerFunc) {
  arity(min, max, args, callerFunc)
}
/**
 * @ignore
 */

function argsToArray(args) {
  var rv = []
  rv.push.apply(rv, args)
  return rv
}
