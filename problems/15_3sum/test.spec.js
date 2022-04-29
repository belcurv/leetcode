
const { threeSum } = require('./index')

describe('threeSum', () => {
  it('should return correct arrays', () => {
    const nums = [12, 3, 1, 2, -6, 5, -8, 6]
    const expected = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
    const actual = threeSum(nums)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const nums = [-1, 0, 1, 2, -1, -4]
    const expected = [[-1, -1, 2], [-1, 0, 1]]
    const actual = threeSum(nums)
    expect(actual).toEqual(expected)
  })

  it('should return []', () => {
    const nums = []
    const expected = []
    const actual = threeSum(nums)
    expect(actual).toEqual(expected)
  })

  it('should return []', () => {
    const nums = [0]
    const expected = []
    const actual = threeSum(nums)
    expect(actual).toEqual(expected)
  })
})
