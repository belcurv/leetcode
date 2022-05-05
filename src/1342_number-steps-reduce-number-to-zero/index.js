/**
 * @param  {number} num
 * @param  {number} step
 * @return {number}
 */
exports.numberOfSteps = function numberOfSteps (num) {
  function recurse (num, steps = 0) {
    if (num === 0) return steps

    return recurse(
      num % 2 ? num - 1 : num / 2,
      ++steps
    )
  }

  return recurse(num)
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
 */
exports.numberOfStepsBitShift = function numberOfStepsBitShift (num) {
  function recurse (num, steps = 0) {
    return num === 0
      ? steps
      : recurse(
        num & 1 // Bitwise AND. Cheap even/odd check. Returns 1 if num is odd
          ? num - 1
          : num >> 1, // Bitwise right shift. Cheap divide by 2, rounds down if num is odd!
        ++steps
      )
  }

  return recurse(num)
}

exports.numberOfStepsLoop = function numberOfStepsLoop (num) {
  let count = 0
  while (num > 0) {
    num = num % 2 ? num - 1 : num / 2
    count++
  }
  return count
}
