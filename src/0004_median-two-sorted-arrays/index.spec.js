
const { twoSum, twoSumMap } = require('./index')

describe('twoSum', () => {
  it('should return array of correct indicies', () => {
    const nums = [3, 2, 3]
    const target = 6
    const expected = [0, 2]
    const actual = twoSum(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return array of correct indicies', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const expected = [0, 1]
    const actual = twoSum(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return array of correct indicies', () => {
    const nums = [3, 2, 4]
    const target = 6
    const expected = [1, 2]
    const actual = twoSum(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return array of correct indicies', () => {
    const nums = [3, 3]
    const target = 6
    const expected = [0, 1]
    const actual = twoSum(nums, target)
    expect(actual).toEqual(expected)
  })
})

describe('twoSumMap', () => {
  it('should return array of correct indicies', () => {
    const nums = [3, 2, 3]
    const target = 6
    const expected = [0, 2]
    const actual = twoSumMap(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return array of correct indicies', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const expected = [0, 1]
    const actual = twoSumMap(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return array of correct indicies', () => {
    const nums = [3, 2, 4]
    const target = 6
    const expected = [1, 2]
    const actual = twoSumMap(nums, target)
    expect(actual).toEqual(expected)
  })

  it('should return array of correct indicies', () => {
    const nums = [3, 3]
    const target = 6
    const expected = [0, 1]
    const actual = twoSumMap(nums, target)
    expect(actual).toEqual(expected)
  })
})
