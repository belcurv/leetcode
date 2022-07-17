
const { climbStairs } = require('./index')

describe('climbStairs', () => {
  it('should return 2 when n = 2', () => {
    const n = 2
    const expected = 2
    expect(climbStairs(n)).toBe(expected)
  })

  it('should return 3 when n = 3', () => {
    const n = 3
    const expected = 3
    expect(climbStairs(n)).toBe(expected)
  })

  it('should return 5 when n = 4', () => {
    const n = 4
    const expected = 5
    expect(climbStairs(n)).toBe(expected)
  })

  it('should return 8 when n = 5', () => {
    const n = 5
    const expected = 8
    expect(climbStairs(n)).toBe(expected)
  })

  it('should return 13 when n = 6', () => {
    const n = 6
    const expected = 13
    expect(climbStairs(n)).toBe(expected)
  })

  it('should return 21 when n = 7', () => {
    const n = 7
    const expected = 21
    expect(climbStairs(n)).toBe(expected)
  })

  it('should return 34 when n = 8', () => {
    const n = 8
    const expected = 34
    expect(climbStairs(n)).toBe(expected)
  })
})
