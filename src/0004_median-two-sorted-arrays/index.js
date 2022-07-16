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
 * Binary search solution
 * Time complexity: O( log(min(x,y) )
 *
 * Huge help: https://www.youtube.com/watch?v=LPFhl65R7ww
 *
 * @param  {number[]} nums1
 * @param  {number[]} nums2
 * @return {number}
 */
exports.findMedianSortedArrays = function findMedianSortedArrays (nums1, nums2) {
  /**
   * Need to ensure nums1 is the shorter array. If nums1 is LONGER, re-call with argument order swapped.
   * WHY?: We need to partition each array, and all positions are possible 'cut' locations in the shorter array.
   * Whereas, if we started with the longer array, we could possiblly cut @ a position not exists in shorter array.
  */
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

  /**
   * == Partitioning Explained ==
   *
   * Start by partitioning in the middle of 1st array (2nd array cut position is derived from 1st)
   *                 v
   *   nums1    1  4 | 6  10
   *   nums2    3  8 | 9  11
   *
   * Move partitions in opposite directions until all LEFT values are less than all RIGHT values
   *                     v
   *   nums1    1   4  6 | 10
   *   nums2    3 | 8  9   11
   *              ^
   *
   * Check: are all LEFT vals < all RIGHT vals? YES: we've found the correct cut positions
   *   nums1    1  4  6 | 10
   *   nums2          3 | 8  9  11
   */

  const nums1Length = nums1.length
  const nums2Length = nums2.length

  /**
   * Cut position limits = the extremes available to nums1 array.
   * If we ever reach these limits, it means that ALL nums in one array are more/less than the other array.
   */
  let lowLimit = 0
  let highLimit = nums1Length

  while (lowLimit <= highLimit) {
    /**
     * Halve search space in each iteration.
     * We cut nums1 in half, within search limits. nums2 position is based on nums1 cut position:
     *   Given nums1.length: m
     *   Given nums2.length: n
     *   nums1 cut position: i,
     *   nums2 cut position: (m + n + 1)/2 - i
     */
    const nums1CutPosition = Math.floor((lowLimit + highLimit) / 2)
    const nums2CutPosition = Math.floor((nums1Length + nums2Length + 1) / 2 - nums1CutPosition)

    /**
     * Find nums1 left max & right min values for later comparison checks.
     * NOTE: we will be comparing "diagonally":
     *    nums1MaxLeftValue <> nums2MinRightValue
     *    nums2MaxLeftValue <> nums1MinRightValue
     */
    const nums1MaxLeftValue = nums1CutPosition === 0 // if we reach lower bound ...
      ? Number.NEGATIVE_INFINITY // no available values to left, set to -infinity
      : nums1[nums1CutPosition - 1]
    const nums1MinRightValue = nums1CutPosition === nums1Length // if we reach upper bound ...
      ? Number.POSITIVE_INFINITY // no available values to right, set to +infinity
      : nums1[nums1CutPosition]

    // find nums2 left max & right min values
    const nums2MaxLeftValue = nums2CutPosition === 0 // if we reach lower bound ...
      ? Number.NEGATIVE_INFINITY // no available values to left, set to -infinity
      : nums2[nums2CutPosition - 1]
    const nums2MinRightValue = nums2CutPosition === nums2Length // if we reach upper bound ...
      ? Number.POSITIVE_INFINITY // no available values to right, set to +infinity
      : nums2[nums2CutPosition]

    // diagnostics
    // console.log(
    //   { lowLimit, highLimit }, '\n',
    //   'nums1 sets', nums1.slice(0, nums1CutPosition), nums1.slice(nums1CutPosition), '\n',
    //   'nums2 sets', nums2.slice(0, nums2CutPosition), nums2.slice(nums2CutPosition)
    // )

    /**
     * Comparisons
     * When solution is NOT found, we +/- the high and low limits.
     * Since the current cut positions are incorrect, we know we can move the limits to +/- 1 beyond
     * the current cut positions.
     */
    if (nums1MaxLeftValue <= nums2MinRightValue && nums2MaxLeftValue <= nums1MinRightValue) { // arrays are partitioned correctly
      if ((nums1Length + nums2Length) % 2 === 0) {
        // when total # of elements is even, sum max left + min right and divide result by two
        return (Math.max(nums1MaxLeftValue, nums2MaxLeftValue) + Math.min(nums1MinRightValue, nums2MinRightValue)) / 2
      } else {
        // when total # of elements is odd, median is just the max left value
        return Math.max(nums1MaxLeftValue, nums2MaxLeftValue)
      }
    } else if (nums1MaxLeftValue > nums2MinRightValue) { // decrement high limit
      highLimit = nums1CutPosition - 1
    } else { // increment low limit
      lowLimit = nums1CutPosition + 1
    }
  }
}
