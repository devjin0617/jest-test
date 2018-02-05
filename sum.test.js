const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

test('object assignment', () => {
  const data = {one: 1}
  data['two'] = 2
  expect(data).toEqual({one: 1, two: 2})
})

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

/*
  toBeNull: null인 경우 통과
  toBeUndefined: undefined인 경우 통과
  toBeDefined: undefined의 반대상황일 경우 통과
  toBeTruthy: 값이 if조건에 따라 true일 경우 통과
  toBeFalsy: 값이 if조건에 따라 false일 경우 통과
*/

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test ('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)          // n <
  expect(value).toBeGreaterThanOrEqual(3.5) // n <=
  expect(value).toBeLessThan(5)             // n >
  expect(value).toBeLessThanOrEqual(4.5)    // n >=

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})