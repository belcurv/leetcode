/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Constraints:
 *    0 <= s.length <= 5 * 104
 *    s consists of English letters, digits, symbols and spaces.
 */

/**
 * Naive Nested loop O(N^2)
 *
 * @param  {string}  s
 * @return {number}
 */
exports.lengthOfLongestSubstring = function lengthOfLongestSubstring (s) {
  let longest = ''

  // build dictionary
  for (let i = 0; i < s.length; i++) {
    // substring always starts with char @ i
    let substring = s[i]

    // loop over the rest of the string
    for (let j = i + 1; j < s.length; j++) {
      const char = s[j]
      if (substring.includes(char)) break
      substring += char
    }

    if (substring.length > longest.length) {
      longest = substring
    }
  }

  return longest.length
}

/**
 * Sliding window. One loop = O(N)
 *
 * If a char IS NOT in Set, add it and increment right index.
 * If a char IS     in Set, delete chars until not found in set and increment left index.
 *
 * Given s = 'pwwkew'
 *   1. 'p' is not in charSet. Add char 'p' from rightIndex 0    incr rightIndex to 1
 *   2. 'w' is not in charSet. Add char 'w' from rightIndex 1    incr rightIndex to 2
 *   3. 'w' is already in charSet. Delete 'p' at leftIndex 0     incr leftIndex  to 1
 *   4. 'w' is already in charSet. Delete 'w' at leftIndex 1     incr leftIndex  to 2
 *   5. 'w' is not in charSet. Add char 'w' from rightIndex 2    incr rightIndex to 3
 *   6. 'k' is not in charSet. Add char 'k' from rightIndex 3    incr rightIndex to 4
 *   7. 'e' is not in charSet. Add char 'e' from rightIndex 4    incr rightIndex to 5
 *   8. 'w' is already in charSet. Delete 'w' at leftIndex 2     incr leftIndex  to 3
 *   9. 'w' is not in charSet. Add char 'w' from rightIndex 5    incr rightIndex to 6  <-- stop
 *
 * @param   {string} s
 * @returns {number}
 */
exports.lengthOfLongestSubstringSlidingWindow = function lengthOfLongestSubstringSlidingWindow (s) {
  const charSet = new Set()
  let leftIndex = 0
  let rightIndex = 0
  let maxLength = 0

  while (leftIndex < s.length && rightIndex < s.length) {
    if (charSet.has(s[rightIndex])) {
      charSet.delete(s[leftIndex])
      leftIndex += 1
    } else {
      charSet.add(s[rightIndex])
      rightIndex += 1
      maxLength = Math.max(maxLength, charSet.size)
    }
  }

  return maxLength
}

/**
 * Another sliding-window solution. One loop = O(N)
 * Why "quasi"? Doesn't track a pair of left/right indexes. Deletes all previous elements at once.
 * More of a "slamming window" solution :)
 *
 * Given s = 'pwwkew'
 *    1. 'p' not in chars, push 'p'
 *                 >> chars: [p]
 *    2. 'w' not in chars, push 'w'
 *                 >> chars: [pw]
 *    3. 'w' already in chars, delete chars up to found 'w', then push new 'w'
 *                 >> chars: [w]
 *    4. 'k' not in chars, push 'k'
 *                 >> chars: [wk]
 *    5. 'e' not in chars, push 'e'
 *                 >> chars  [wke]
 *    6. 'w' already in chars, delete chars up to found 'w', then push new 'w'
 *                 >> chars: [kew]
 *
 * @param   {string} s
 * @returns {number}
 */
exports.lengthOfLongestSubstringQuasiSlidingWindow = function lengthOfLongestSubstringQuasiSlidingWindow (s) {
  const chars = []
  let maxLength = 0

  for (const char of s) {
    const indexOfChar = chars.indexOf(char)

    // if window has char, delete elements from index 0 up to found char
    if (indexOfChar !== -1) {
      chars.splice(0, indexOfChar + 1)
    }

    chars.push(char)
    maxLength = Math.max(maxLength, chars.length)
  }

  return maxLength
}
