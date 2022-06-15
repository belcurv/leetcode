
const { naiveFindMedianSortedArrays } = require('./index')

describe('naiveFindMedianSortedArrays', () => {
  // Explanation: merged array = [1,2,3] and median is 2.
  it('should return 2', () => {
    const nums1 = [1, 3]
    const nums2 = [2]
    const expected = 2
    const actual = naiveFindMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })

  // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
  it('should return 2.5', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    const expected = 2.5
    const actual = naiveFindMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })
})
