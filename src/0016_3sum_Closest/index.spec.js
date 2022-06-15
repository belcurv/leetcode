
const { threeSumClosest } = require('./index')

describe('threeSum', () => {
  it('should return correct arrays', () => {
    const nums = [1, 1, -1, -1, 3]
    const target = -1
    const expected = -1
    const actual = threeSumClosest(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const nums = [1, 1, 1, 0]
    const target = -100
    const expected = 2
    const actual = threeSumClosest(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const nums = [1, 1, 1, 1]
    const target = 0
    const expected = 3
    const actual = threeSumClosest(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const nums = [-1, 2, 1, -4]
    const target = 1
    const expected = 2
    const actual = threeSumClosest(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const nums = [0, 0, 0]
    const target = 1
    const expected = 0
    const actual = threeSumClosest(nums, target)
    expect(actual).toEqual(expected)
  })
})
