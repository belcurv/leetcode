/**
 * Given an array of integers nums and an integer target, return indices
 * of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and
 * you may not use the same element twice.
 *
 * Note: For 3sum, we returned the numbers we were summing. Not the indicies! We could
 * pre-sort the input nums in 3sum. For 2sum, we cannot sort the input array of nums
 * because we need to find the indicies of nums that sum to target. Can't mess with
 * the input indices!
 *
 * Constraints:
 *   2 <= nums.length <= 104
 *   -109 <= nums[i] <= 109
 *   -109 <= target <= 109
 *   Only one valid answer exists.
 */

/**
 * O(n^2) solution - nested loops = geometric time
 * @param   {number[]} nums    Array of positive or negative integers
 * @param   {numenr}   target  Defaults to 0
 * @returns {number[]}
 */
exports.twoSum = function twoSum (nums, target = 0) {
  const out = []

  // guard: can't sum less than 2 numbers
  if (nums.length < 2) return out

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]
      if (sum === target) return [i, j]
    }
  }

  return out
}

/**
 * O(n) solution - single loop = linear time
 * @param   {number[]} nums    Array of positive or negative integers
 * @param   {numenr}   target  Defaults to 0
 * @returns {number[]}
 */
exports.twoSumMap = function twoSumMap (nums, target = 0) {
  // guard: can't sum less than 2 numbers
  if (nums.length < 2) return []

  // for storing previous attempts as [ nums[index] : index ]
  // Maps/Dictionaries have constant O(1) search time complexity
  const attempts = new Map()

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries#iterating_with_index_and_element
  for (const [i, number] of nums.entries()) {
    // once the attempts Map has a key that sums with new number to = target, we're done
    if (attempts.has(target - number)) {
      // the value at Map[target - number] is the index of the other num we need
      // return that index, plus the new number's index
      return [attempts.get(target - number), i]
    } else {
      // add attempt to Map
      attempts.set(number, i)
    }
  }
}
