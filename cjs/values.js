'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.Value = Value
exports.Ref = Ref
exports.SetRef = SetRef
exports.FaunaTime = FaunaTime
exports.FaunaDate = FaunaDate
exports.Bytes = Bytes
exports.Query = Query
exports.Native = void 0

var base64 = _interopRequireWildcard(require('base64-js'))

var _util = require('util')

var _utilDeprecate = _interopRequireDefault(require('util-deprecate'))

var _errors = require('./errors')

var _Expr = _interopRequireDefault(require('./Expr'))

var _util2 = require('./_util')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

const customInspect = _util.inspect && _util.inspect.custom
const stringify = _util.inspect ? _util.inspect : JSON.stringify
/**
 * FaunaDB value types. Generally, these collections do not need to be instantiated
 * directly; they can be constructed through helper methods in {@link module:query}.
 *
 * Instances of these collections will be returned in responses if the response object
 * contains these values. For example, a FaunaDB response containing
 *`{ "@ref": { "id": "123", "collection": { "@ref": { "id": "frogs", "collection": { "@ref": { "id": "collectiones" } } } } } }`
 * will be returned as `new values.Ref("123", new values.Ref("frogs", values.Native.COLLECTIONS))`.
 *
 * See the [FaunaDB Query API Documentation](https://app.fauna.com/documentation/reference/queryapi#simple-type)
 * for more information.
 *
 * @module values
 */

/**
 * Base type for FaunaDB value objects.
 *
 * @extends Expr
 * @abstract
 * @constructor
 */

function Value() {}

Value.prototype._isFaunaValue = true
;(0, _util2.inherits)(Value, _Expr.default)
/**
 * FaunaDB ref.
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {string} id
 *   The id portion of the ref.
 * @param {Ref} [collection]
 *   The collection portion of the ref.
 * @param {Ref} [database]
 *   The database portion of the ref.
 *
 * @extends module:values~Value
 * @constructor
 */

function Ref(id, collection, database) {
  if (!id) throw new _errors.InvalidValue('id cannot be null or undefined')
  this.value = {
    id: id,
  }
  if (collection) this.value['collection'] = collection
  if (database) this.value['database'] = database
}

Ref.prototype._isFaunaRef = true
;(0, _util2.inherits)(Ref, Value)
/**
 * Gets the collection part out of the Ref.
 *
 * @member {string}
 * @name module:values~Ref#collection
 */

Object.defineProperty(Ref.prototype, 'collection', {
  get: function() {
    return this.value['collection']
  },
})
/**
 * DEPRECATED. Gets the class part out of the Ref.
 *
 * @member {string}
 * @name module:values~Ref#class
 */

Object.defineProperty(Ref.prototype, 'class', {
  get: (0, _utilDeprecate.default)(function() {
    return this.value['collection']
  }, 'class is deprecated, use collection instead'),
})
/**
 * Gets the database part out of the Ref.
 *
 * @member {Ref}
 * @name module:values~Ref#database
 */

Object.defineProperty(Ref.prototype, 'database', {
  get: function() {
    return this.value['database']
  },
})
/**
 * Gets the id part out of the Ref.
 *
 * @member {Ref}
 * @name module:values~Ref#id
 */

Object.defineProperty(Ref.prototype, 'id', {
  get: function() {
    return this.value['id']
  },
})
/** @ignore */

Ref.prototype.toJSON = function() {
  return {
    '@ref': this.value,
  }
}

wrapToString(Ref, function() {
  var constructors = {
    collections: 'Collection',
    databases: 'Database',
    indexes: 'Index',
    functions: 'Function',
    roles: 'Role',
    access_providers: 'AccessProvider',
  }

  var isNative = function(ref) {
    return ref.collection === undefined
  }

  var toString = function(ref) {
    if (isNative(ref)) {
      var db = ref.database !== undefined ? ref.database.toString() : ''
      if (ref.id === 'access_providers') return 'AccessProviders(' + db + ')'
      return ref.id.charAt(0).toUpperCase() + ref.id.slice(1) + '(' + db + ')'
    }

    if (isNative(ref.collection)) {
      var constructor = constructors[ref.collection.id]

      if (constructor !== undefined) {
        var db =
          ref.database !== undefined ? ', ' + ref.database.toString() : ''
        return constructor + '("' + ref.id + '"' + db + ')'
      }
    }

    return 'Ref(' + toString(ref.collection) + ', "' + ref.id + '")'
  }

  return toString(this)
})
/** @ignore */

Ref.prototype.valueOf = function() {
  return this.value
}
/**
 * Whether these are both Refs and have the same value.
 * @param {any} other
 * @returns {boolean}
 */

Ref.prototype.equals = function(other) {
  return (
    (other instanceof Ref ||
      (0, _util2.checkInstanceHasProperty)(other, '_isFaunaRef')) &&
    this.id === other.id &&
    ((this.collection === undefined && other.collection === undefined) ||
      this.collection.equals(other.collection)) &&
    ((this.database === undefined && other.database === undefined) ||
      this.database.equals(other.database))
  )
}

var Native = {
  COLLECTIONS: new Ref('collections'),
  INDEXES: new Ref('indexes'),
  DATABASES: new Ref('databases'),
  FUNCTIONS: new Ref('functions'),
  ROLES: new Ref('roles'),
  KEYS: new Ref('keys'),
  ACCESS_PROVIDERS: new Ref('access_providers'),
}
exports.Native = Native

Native.fromName = function(name) {
  switch (name) {
    case 'collections':
      return Native.COLLECTIONS

    case 'indexes':
      return Native.INDEXES

    case 'databases':
      return Native.DATABASES

    case 'functions':
      return Native.FUNCTIONS

    case 'roles':
      return Native.ROLES

    case 'keys':
      return Native.KEYS

    case 'access_providers':
      return Native.ACCESS_PROVIDERS
  }

  return new Ref(name)
}
/**
 * FaunaDB Set.
 * This represents a set returned as part of a response.
 * This looks like `{"@set": set_query}`.
 * For query sets see {@link match}, {@link union},
 * {@link intersection}, {@link difference}, and {@link join}.
 *
 * @extends module:values~Value
 * @constructor
 */

function SetRef(value) {
  /** Raw query object. */
  this.value = value
}

;(0, _util2.inherits)(SetRef, Value)
wrapToString(SetRef, function() {
  return _Expr.default.toString(this.value)
})
/** @ignore */

SetRef.prototype.toJSON = function() {
  return {
    '@set': this.value,
  }
}
/** FaunaDB time. See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {string|Date} value If a Date, this is converted to a string.
 * @extends module:values~Value
 * @constructor
 */

function FaunaTime(value) {
  if (value instanceof Date) {
    value = value.toISOString()
  } else if (!(value.charAt(value.length - 1) === 'Z')) {
    throw new _errors.InvalidValue(
      "Only allowed timezone is 'Z', got: " + value
    )
  }

  this.value = value
}

;(0, _util2.inherits)(FaunaTime, Value)
/**
 * Returns the date wrapped by this object.
 * This is lossy as Dates have millisecond rather than nanosecond precision.
 *
 * @member {Date}
 * @name module:values~FaunaTime#date
 */

Object.defineProperty(FaunaTime.prototype, 'date', {
  get: function() {
    return new Date(this.value)
  },
})
wrapToString(FaunaTime, function() {
  return 'Time("' + this.value + '")'
})
/** @ignore */

FaunaTime.prototype.toJSON = function() {
  return {
    '@ts': this.value,
  }
}
/** FaunaDB date. See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {string|Date} value
 *   If a Date, this is converted to a string, with time-of-day discarded.
 * @extends module:values~Value
 * @constructor
 */

function FaunaDate(value) {
  if (value instanceof Date) {
    // The first 10 characters 'YYYY-MM-DD' are the date portion.
    value = value.toISOString().slice(0, 10)
  }
  /**
   * ISO8601 date.
   * @type {string}
   */

  this.value = value
}

;(0, _util2.inherits)(FaunaDate, Value)
/**
 * @member {Date}
 * @name module:values~FaunaDate#date
 */

Object.defineProperty(FaunaDate.prototype, 'date', {
  get: function() {
    return new Date(this.value)
  },
})
wrapToString(FaunaDate, function() {
  return 'Date("' + this.value + '")'
})
/** @ignore */

FaunaDate.prototype.toJSON = function() {
  return {
    '@date': this.value,
  }
}
/** FaunaDB bytes. See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {Uint8Array|ArrayBuffer|string} value
 *    If ArrayBuffer it's converted to Uint8Array
 *    If string it must be base64 encoded and it's converted to Uint8Array
 * @extends module:values~Value
 * @constructor
 */

function Bytes(value) {
  if (value instanceof ArrayBuffer) {
    this.value = new Uint8Array(value)
  } else if (typeof value === 'string') {
    this.value = base64.toByteArray(value)
  } else if (value instanceof Uint8Array) {
    this.value = value
  } else {
    throw new _errors.InvalidValue(
      'Bytes type expect argument to be either Uint8Array|ArrayBuffer|string, got: ' +
        stringify(value)
    )
  }
}

;(0, _util2.inherits)(Bytes, Value)
wrapToString(Bytes, function() {
  return 'Bytes("' + base64.fromByteArray(this.value) + '")'
})
/** @ignore */

Bytes.prototype.toJSON = function() {
  return {
    '@bytes': base64.fromByteArray(this.value),
  }
}
/** FaunaDB query. See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {any} value
 * @extends module:values~Value
 * @constructor
 */

function Query(value) {
  this.value = value
}

;(0, _util2.inherits)(Query, Value)
wrapToString(Query, function() {
  return 'Query(' + _Expr.default.toString(this.value) + ')'
})
/** @ignore */

Query.prototype.toJSON = function() {
  return {
    '@query': this.value,
  }
}
/** @ignore */

function wrapToString(type, fn) {
  type.prototype.toString = fn
  type.prototype.inspect = fn

  if (customInspect) {
    type.prototype[customInspect] = fn
  }
}
