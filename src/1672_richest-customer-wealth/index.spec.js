
const { maximumWealth } = require('./index')

describe('maximumWealth', () => {
  it('should return 6', () => {
    const accounts = [[1, 2, 3], [3, 2, 1]]
    const expected = 6
    expect(maximumWealth(accounts)).toBe(expected)
  })

  it('should return 10', () => {
    const accounts = [[1, 5], [7, 3], [3, 5]]
    const expected = 10
    expect(maximumWealth(accounts)).toBe(expected)
  })

  it('should return 17', () => {
    const accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]
    const expected = 17
    expect(maximumWealth(accounts)).toBe(expected)
  })
})
