
const { removeDuplicates } = require('./index')

describe('removeDuplicates', () => {
  // Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  // It does not matter what you leave beyond the returned k (hence they are underscores).
  it('Example 1', () => {
    const nums = [1, 1, 2]
    const expected = 2 // nums = [1,2,_]
    const actual = removeDuplicates(nums)
    expect(actual).toBe(expected)
  })

  // Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  // It does not matter what you leave beyond the returned k (hence they are underscores).
  it('Example 2', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const expected = 5 // nums = [0,1,2,3,4,_,_,_,_,_]
    const actual = removeDuplicates(nums)
    expect(actual).toBe(expected)
  })

  // Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  // It does not matter what you leave beyond the returned k (hence they are underscores).
  it('Example 3', () => {
    const nums = [1, 2]
    const expected = 2 // nums = [1, 2]
    const actual = removeDuplicates(nums)
    expect(actual).toBe(expected)
  })

  it('Example 4', () => {
    const nums = [1, 2, 3]
    const expected = 3 // nums = [1, 2, 3]
    const actual = removeDuplicates(nums)
    expect(actual).toBe(expected)
  })
})
