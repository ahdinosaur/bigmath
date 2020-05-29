const BigNumber = require('bignumber.js')

const PROTO_METHODS = [
  'absoluteValue', 'abs',
  'ceil',
  'comparedTo', 'cmp',
  'decimalPlaces', 'dp',
  'dividedBy', 'div',
  'dividedToIntegerBy', 'divToInt',
  'floor',
  'greaterThan', 'gt',
  'greaterThanOrEqualTo', 'gte',
  'isEqualTo', 'eq',
  'isFinite',
  'isInteger', // 'isInt',
  'isNaN',
  'isNegative', // 'isNeg',
  'isZero',
  'lessThan', 'lt',
  'lessThanOrEqualTo', 'lte',
  'minus', // 'sub',
  'modulo', 'mod',
  'negated', 'neg',
  'plus', // 'add',
  'precision', 'sd',
  'round',
  'shift',
  'squareRoot', 'sqrt',
  'times', // 'mul',
  'toDigits',
  'toExponential',
  'toFixed',
  'toFormat',
  'toFraction',
  'toJSON',
  'toNumber',
  'toPower', 'pow',
  'toPrecision',
  'toString',
  'truncated', // 'trunc',
  'valueOf'
]

const ALIAS_PROTO = {
  add: 'plus',
  sub: 'minus',
  mul: 'times'
}

const STATIC_METHODS = [
  'max',
  'min',
  'random'
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
