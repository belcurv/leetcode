
const { naiveFindMedianSortedArrays, findMedianSortedArrays } = require('./index')

describe('naiveFindMedianSortedArrays (brute force)', () => {
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

  // Explanation: merged array = [1, 3, 4, 6, 8, 9, 10, 11] and median is (6 + 8) / 2 = 7
  it('should return 7', () => {
    const nums1 = [1, 4, 6, 10]
    const nums2 = [3, 8, 9, 11]
    const expected = 7
    const actual = naiveFindMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })
})

describe('findMedianSortedArrays (binary search)', () => {
  // Explanation: merged array = [1,2,3] and median is 2.
  it('should return 2', () => {
    const nums1 = [1, 3]
    const nums2 = [2]
    const expected = 2
    const actual = findMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })

  // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
  it('should return 2.5', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    const expected = 2.5
    const actual = findMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })

  it('should return 7', () => {
    const nums1 = [1, 4, 6, 10]
    const nums2 = [3, 8, 9, 11]
    const expected = 7
    const actual = findMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })

  /**
   * Partitioning steps:
   *
   * nums1 sets [ 1, 3 ] [ 8, 9, 15 ]
   * nums2 sets [ 7, 11, 18, 19 ] [ 21, 25 ]
   *
   * nums1 sets [ 1, 3, 8, 9 ] [ 15 ]
   * nums2 sets [ 7, 11 ] [ 18, 19, 21, 25 ]
   */
  it('should return 11', () => {
    const nums1 = [1, 3, 8, 9, 15]
    const nums2 = [7, 11, 18, 19, 21, 25]
    const expected = 11 // [1, 3, 7, 8, 9, 11, 15, 18, 19, 21, 25]
    const actual = findMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })

  /**
   * Partitioning scenario: all nums1 > all nums2
   *
   * nums1 sets [ 26 ] [ 27, 28 ]
   * nums2 sets [ 7, 11, 18 ] [ 19 ]
   *
   * nums1 sets [] [ 26, 27, 28 ]
   * nums2 sets [ 7, 11, 18, 19 ] []
   */
  it('should return 19', () => {
    const nums1 = [26, 27, 28]
    const nums2 = [7, 11, 18, 19]
    const expected = 19 // [7, 11, 18, 19, 26, 27, 28]
    const actual = findMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })

  /**
   * Partitioning scenario: all nums1 < all nums2
   *
   * { lowLimit: 0, highLimit: 3 }
   * nums1 sets [ 1 ] [ 3, 5 ]
   * nums2 sets [ 7, 11, 18 ] [ 19 ]
   *
   * { lowLimit: 2, highLimit: 3 }
   * nums1 sets [ 1, 3 ] [ 5 ]
   * nums2 sets [ 7, 11 ] [ 18, 19 ]
   *
   * { lowLimit: 3, highLimit: 3 }
   * nums1 sets [ 1, 3, 5 ] []
   * nums2 sets [ 7 ] [ 11, 18, 19 ]
   */
  it('should return 19', () => {
    const nums1 = [1, 3, 5]
    const nums2 = [7, 11, 18, 19]
    const expected = 7 // [1, 3, 5, 7, 11, 18, 19]
    const actual = findMedianSortedArrays(nums1, nums2)
    expect(actual).toBe(expected)
  })
})
