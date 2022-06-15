/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *    Open brackets must be closed by the same type of brackets.
 *    Open brackets must be closed in the correct order.
 *
 * Constraints
 *  1 <= s.length <= 104
 *  s consists of parentheses only '()[]{}'.
 *
 * @param  {string}  s
 * @return {boolean}
 */
exports.isValid = function isValid (s) {
  if (s == null || typeof s !== 'string') return false
  if (s.length % 2 !== 0) return false // if string length is odd fail early

  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const stack = []

  for (const char of s) {
    // character is an opening bracket, push on to stack
    if (pairs[char]) stack.push(char)

    // else, pop last bracket from stack, check that current char is closer for opener
    else {
      const opener = stack.pop()
      if (pairs[opener] !== char) return false
    }
  }

  return stack.length === 0
}

/**
 * Pretty brilliant
 * https://leetcode.com/problems/valid-parentheses/discuss/1535849
 */
exports.isValidRegex = function isValidRegex (s) {
  // Matches on opening & closing pairs: {} | [] | ()
  const rex = /(\{\})|(\[\])|(\(\))/g

  // replace pairs with empty strings
  while (s.match(rex)) {
    s = s.replace(rex, '')
  }

  // if is valid, string will be completed empty
  return s === ''
}
