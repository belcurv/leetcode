/**
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 *     Example: 121 is a palindrome while 123 is not.
 *     Example: -121 becomes 121-, which is not a palindrome
 *
 * @param  {number} x
 * @return {boolean}
 */
exports.isPalindrome = function isPalindrome (x) { // personal fav
  // negative numbers cannot be palindromic
  if (x < 0) return false
  // single-digit integers < 10 are always palindromes
  if (x < 10) return true

  // build array of x's numbers in reverse order.
  // NOTE: order doesn't matter when comparig w/ 2 pointers
  const numsArray = []
  while (x > 0) {
    numsArray.push(x % 10) // push remainder of x / 10, aka last digit of x
    x = (x / 10) | 0 // divide x by 10; keep only whole number
  }

  // two pointers
  let left = 0
  let right = numsArray.length - 1

  while (left < right) {
    if (numsArray[left] !== numsArray[right]) return false
    left++
    right--
  }

  return true
}

/**
 * Based on
 * https://leetcode.com/problems/palindrome-number/discuss/387961/No-String-or-Array-conversion-4-Lines-99.66-beat
 */
exports.isPalindromeNoArrays = function isPalindromeNoArrays (x) {
  // negative numbers cannot be palindromic
  if (x < 0) return false
  // single-digit integers < 10 are always palindromes
  if (x < 10) return true

  let reversed = 0
  // incrementally build reversed number, starting from the full number & lopping off the 10's digit
  // on each iteration
  for (let i = x; i >= 1; i = i / 10 | 0) {
    // i is the whittled-away input number x
    // need to mult the current reversed by 10 and add the remainder of i / 10
    reversed = (reversed * 10) + i % 10
  }

  return x === reversed
}

/**
 * Using Array join, cast to Number. Probably easiest to read
 */
exports.isPalindromeSimplified = function isPalindromeSimplified (x) {
  // negative numbers cannot be palindromic
  if (x < 0) return false
  // single-digit integers < 10 are always palindromes
  if (x < 10) return true

  // build array of x's numbers in reverse order
  let n = x
  const numsArray = []
  while (n > 0) {
    numsArray.push(n % 10) // push remainder of n / 10
    n = (n / 10) | 0 // divide n by 10; keep only whole number
  }

  return x === Number(numsArray.join(''))
}
