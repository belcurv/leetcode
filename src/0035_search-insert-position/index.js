/**
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Constraints:
 *   1 <= nums.length <= 104
 *   -104 <= nums[i] <= 104
 *   nums contains distinct values sorted in ascending order.
 *   -104 <= target <= 104
 *
 * @param   {number[]} nums
 * @param   {number}   target
 * @returns {number}
 */
exports.searchInsert = function searchInsert (nums, target) {
  if (!Array.isArray(nums) || nums.length === 0) return 0

  let lowLimit = 0
  let highLimit = nums.length

  while (lowLimit <= highLimit) {
    const searchPosition = Math.floor((lowLimit + highLimit) / 2)
    const num = nums[searchPosition]

    // if we land right on target, return the current search index
    if (num === target) return searchPosition

    if (num < target) {
      // if found num is less then target, restrict search space by moving lower limit
      lowLimit = searchPosition + 1
    } else {
      // else found num is more then target, restrict search space by moving high limit
      highLimit = searchPosition - 1
    }
  }

  // if we didn't find target within the loop above, determine what index to retun.
  // if the num @ final lowIndex is less than target, return 1 greater than low index
  return nums[lowLimit] < target
    ? lowLimit + 1
    : lowLimit
}
