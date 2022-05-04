/**
 * Given an integer n, return a string array answer (1-indexed) where:
 *     answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 *     answer[i] == "Fizz" if i is divisible by 3.
 *     answer[i] == "Buzz" if i is divisible by 5.
 *     answer[i] == i (as a string) if none of the above conditions are true.
 *
 * Constraints:
 *    1 <= n <= 104
 */

/**
 * O(n) solution. IMO reads the cleanest
 * @param  {number}  n
 * @return {string[]}
 */
exports.fizzBuzzArrayFrom = function fizzBuzzArrayFrom (n) {
  return Array.from({ length: n }, (_, i) => {
    if ((i + 1) % 15 === 0) return 'FizzBuzz'
    if ((i + 1) % 3 === 0) return 'Fizz'
    if ((i + 1) % 5 === 0) return 'Buzz'
    return String(i + 1)
  })
}

/**
 * @param  {number}  n
 * @return {string[]}
 */
exports.fizzBuzzArrayPush = function fizzBuzzArrayPush (n) {
  const out = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      out.push('FizzBuzz')
      continue
    }
    if (i % 5 === 0) {
      out.push('Buzz')
      continue
    }
    if (i % 3 === 0) {
      out.push('Fizz')
      continue
    }
    out.push(String(i))
  }
  return out
}
