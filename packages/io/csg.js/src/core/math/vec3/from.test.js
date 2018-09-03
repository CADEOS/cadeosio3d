const test = require('ava')
const {fromScalar, fromValues, fromVec2, toString} = require('./index')

const {compareVectors} = require('../../../../test/helpers/index')

test('vec3: fromScalar() should return a new vec3 with correct values', t => {
  const obs1 = fromScalar(0)
  t.true(compareVectors(obs1, [0, 0, 0]))

  const obs2 = fromScalar(-5)
  t.true(compareVectors(obs2, [-5, -5, -5]))
})

test('vec3: fromVec2() should return a new vec3 with correct values', t => {
  const obs1 = fromVec2([0, 0])
  t.true(compareVectors(obs1, [0, 0, 0]))

  const obs2 = fromVec2([0, 1], -5)
  t.true(compareVectors(obs2, [0, 1, -5]))

  const str1 = toString(obs2)
})
