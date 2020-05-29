const BigNumber = require('bignumber.js')

const PROTO_METHODS = [
  'absoluteValue', 'abs',
  'comparedTo',
  'decimalPlaces', 'dp',
  'dividedBy', 'div',
  'dividedToIntegerBy', 'idiv',
  'exponentiatedBy', 'pow',
  'isEqualTo', 'eq',
  'isFinite',
  'isGreaterThan', 'gt',
  'isGreaterThanOrEqualTo', 'gte',
  'isInteger', // 'isInt',
  'isLessThan', 'lt',
  'isLessThanOrEqualTo', 'lte',
  'isNaN',
  'isNegative', // 'isNeg',
  'isPositive',
  'isZero',
  'minus', // 'sub',
  'modulo', 'mod',
  'multipliedBy', 'times',
  'negated',
  'plus',
  'precision', 'sd',
  'shiftedBy',
  'squareRoot', 'sqrt',
  'toExponential',
  'toFixed',
  'toFormat',
  'toFraction',
  'toJSON',
  'toNumber',
  'toPrecision',
  'toString',
  'valueOf'
]

const ALIAS_PROTO = {
  add: 'plus',
  sub: 'minus',
  mul: 'times'
}

const STATIC_METHODS = [
  'maximum', 'max',
  'minimum', 'min',
  'random',
  'sum'
]

PROTO_METHODS.forEach(name => {
  exports[name] = (value, ...args) => {
    const instance = new BigNumber(value)
    const result = instance[name](...args)
    return result instanceof BigNumber
      ? result.valueOf()
      : result
  }
})

Object.keys(ALIAS_PROTO).forEach(name => {
  const alias = ALIAS_PROTO[name]
  exports[name] = (value, ...args) => {
    const instance = new BigNumber(value)
    const result = instance[alias](...args)
    return result instanceof BigNumber
      ? result.valueOf()
      : result
  }
})

STATIC_METHODS.forEach(name => {
  exports[name] = (...args) => {
    const result = BigNumber[name](...args)
    return result instanceof BigNumber
      ? result.valueOf()
      : result
  }
})
