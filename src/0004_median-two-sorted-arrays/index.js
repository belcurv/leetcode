/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 */

/**
 * Naive O(n + m) solution. Not what problem asked for
 *
 * @param  {number[]} nums1
 * @param  {number[]} nums2
 * @return {number}
 */
exports.naiveFindMedianSortedArrays = function naiveFindMedianSortedArrays (nums1, nums2) {
  let index1 = 0
  let index2 = 0

  const merged = Array.from({ length: nums1.length + nums2.length }, () => {
    if (nums2[index2] == null || nums1[index1] <= nums2[index2]) return nums1[index1++]
    return nums2[index2++]
  })

  // odd number of elements is easy
  if (merged.length % 2 === 1) {
    return merged[Math.floor(merged.length / 2)]
  }

  // even number of elements ...
  const n1 = merged[Math.floor(merged.length / 2) - 1]
  const n2 = merged[Math.floor(merged.length / 2)]

  return (n1 + n2) / 2
}

/**
 * Binary search O(log (n + m))
 *
 * @param  {number[]} nums1
 * @param  {number[]} nums2
 * @return {number}
 */
exports.findMedianSortedArrays = function findMedianSortedArrays (nums1, nums2) {
  // TODO - https://www.youtube.com/watch?v=LPFhl65R7ww
}
