const test = require('tape')

const BigMath = require('../')

test('BigMath', function (t) {
  t.ok(BigMath, 'module is require-able')
  t.equal(BigMath.add('1', '2'), '3', '1 + 2 = 3')
  t.equal(BigMath.sub('1', '2'), '-1', '1 - 2 = -1')
  t.equal(BigMath.mul('1', '2'), '2', '1 * 2 = 2')
  t.equal(BigMath.div('1', '2'), '0.5', '1 / 2 = 0.5')
  t.end()
})
