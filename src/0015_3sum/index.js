
/**
 * Two pointer solution - fix i & walk pointers j & k toward each other
 * @param   {number[]} nums    Array of positive or negative integers
 * @param   {numenr}   target  Defaults to 0
 * @returns {number[][]
 */
function threeSum (nums, target = 0) {
  const out = []

  // guard: can't sum less than 3 numbers
  if (nums.length < 3) return out

  // sort ascending
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // because we sorted nums ascending, we can check if nums[i] > target, and if true, break.
    // once nums[i] > target, all the remaiing nums will also be > target. Break out of the loop.
    if (nums[i] > target) break

    // because we sorted, we can skip nums we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // i is anchored within the for loop
    let j = i + 1 // j will walk up toward k
    let k = nums.length - 1 // k begins anchored at the last index, will walk down toward j

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]

      if (sum < target) {
        j++ // move j 'right' up the ascending array of nums; next sum will be larger
      } else if (sum > target) {
        k-- // move k 'left' down the ascending array of nums; next sum will be smaller
      } else {
        // sum = target
        out.push([nums[i], nums[j], nums[k]])

        j++ // move j 'right' up the ascending array of nums one index
        k-- // move j 'right' up the ascending array of nums one index

        // if j is duplicate num, move j 'right' until not a duplicate and not colide with k
        while (nums[j] === nums[j - 1] && j < k) j++
        // if k is duplicate num, move k 'left' until not a duplicate and not colide with k
        while (nums[k] === nums[k + 1] && j < k) k--
      }
    }
  }

  return out
}

exports.threeSum = threeSum
