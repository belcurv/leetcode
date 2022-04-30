
/**
 * Constraints:
 *    3 <= nums.length <= 1000
 *    -1000 <= nums[i] <= 1000
 *    -104 <= target <= 104
 *
 * Two pointer solution - fix i & walk pointers j & k toward each other
 * @param   {number[]} nums    Array of positive or negative integers
 * @param   {numenr}   target  Defaults to 0
 * @returns {number[][]
 */
function threeSumClosest (nums, target = 0) {
  let closestSum = Number.MAX_SAFE_INTEGER

  // guard: can't sum less than 3 numbers
  if (nums.length < 3) return closestSum

  // sort ascending
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // i is anchored within the for loop
    let j = i + 1 // j will walk up toward k
    let k = nums.length - 1 // k begins anchored at the last index, will walk down toward j

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]

      // when the sum is exactly = the target, we're done
      if (sum === target) return sum

      // compare deltas
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum
      }

      if (sum < target) {
        j++ // move j 'right' up the ascending array of nums; next sum will be larger
      } else {
        k-- // move k 'left' down the ascending array of nums; next sum will be smaller
      }
    }
  }

  return closestSum
}

exports.threeSumClosest = threeSumClosest
