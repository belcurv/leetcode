
// Constraints
//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lower-case English letters.

/**
 * @param  {string[]} strs
 * @return {string}
 */
function longestCommonPrefix (strs) {
  let out = ''

  // iterations = length of smallest string
  const maxIterations = strs.reduce((acc, cur) => {
    return acc.length > cur.length ? acc.length : cur.length
  }, 0)

  for (let i = 0; i < maxIterations; i++) {
    const chars = strs.map(s => s[i])
    if (chars.every(char => char === chars[0])) {
      out += chars[0]
    } else {
      break
    }
  }

  return out
}

exports.longestCommonPrefix = longestCommonPrefix
