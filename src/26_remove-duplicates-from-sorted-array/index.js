
/**
 * Uses 2 pointers and element "swapping" to deduplicate and re-sort array in place,
 * with 'removed' elements at the end.
 * @param  {number[]} nums
 * @return {number}
 */
exports.removeDuplicates = function removeDuplicates (nums) {
  if (nums.length < 2) return nums.length

  const REMOVED = '_'

  let i = 0
  let j = 1
  let count = 0

  while (j < nums.length) {
    if (nums[j] === nums[i]) {
      // when same, set nums[j] to 'removed'; do not move i pointer
      nums[j] = REMOVED
    } else {
      // when different, and when j-1 was removed ...
      if (nums[j - 1] === REMOVED) {
        // "swap" nums[j] and nums[i+1]
        nums[i + 1] = nums[j]
        nums[j] = REMOVED
      }
      i++
      count++
    }
    j++
  }

  return count + 1
}
