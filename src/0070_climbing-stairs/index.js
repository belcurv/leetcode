/**
 * @param  {number} n
 * @return {number}
 */
exports.climbStairs = function climbStairs (n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2

  let steps = 0

  let prev = 2 //     init as value when n = 2
  let prevPrev = 1 // init as value when n = 1

  // All we need to do is sum the previous two results.
  // Start looping at i=2; we already know i=0 (prevPrev) and i=1 (prev)
  for (let i = 2; i < n; i++) {
    steps = prev + prevPrev
    prevPrev = prev
    prev = steps
  }

  return steps
}
