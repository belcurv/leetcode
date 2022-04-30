
const dictionary = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

/**
 * Constraints:
 *   0 <= digits.length <= 4
 *   digits[i] is a digit in the range ['2', '9'].
 *
 * @param  {string}  digits
 * @return {string[]}
 */
exports.letterCombinations = function letterCombinations (digits) {
  // guard against empty strings
  if (digits == null || digits.length === 0) return []

  // split string into array of integers
  const digitsArr = digits.split('')

  // initialize output = first number's corresponding letters
  let out = dictionary[digitsArr[0]]

  // if we only have 1 digit, return the output immediately
  if (digitsArr.length === 1) return out

  // else, start looping from the 2nd digit
  for (let i = 1; i < digitsArr.length; i++) {
    // get digit's letters from dictionary
    const newLetters = dictionary[digitsArr[i]]
    // generate new array from current output; replace output with new array
    out = out.reduce((temp, currentLetter) => {
      return temp.concat(newLetters.map(newLetter => currentLetter + newLetter))
    }, [])
  }

  return out
}

/**
 * Recursive, deptch first search solution.
 * This is actually slower than the above non-DFS solution on leetcode
 * @param  {string}  digits
 * @return {string[]}
 */
exports.letterCombinationsDfs = function letterCombinationsDfs (digits) {
  const out = []

  // guard against empty strings
  if (digits == null || digits.length === 0) return out

  /**
   * recursive DFS function
   * @param   {number} index The index of n in digits
   * @param   {string} letterCombination The string being built up iteratively
   * @returns {void}
   */
  function depthFirstSearch (index, letterCombination) {
    // escape & store letterCombination when we reach the end of digits
    if (index === digits.length) return out.push(letterCombination)

    // get new letters at index
    const newLetters = dictionary[digits[index]]

    // for each new letter ...
    for (let i = 0; i < newLetters.length; i++) {
      // recurse, passing next digit index and accumulated letter combination
      depthFirstSearch(index + 1, letterCombination + newLetters[i])
    }
  }

  depthFirstSearch(0, '')
  return out
}
