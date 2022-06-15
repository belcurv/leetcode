const { longestCommonPrefix } = require('./index')

describe('longestCommonPrefix', () => {
  it('should whatever', () => {
    const input = ['cir', 'car']
    const expected = 'c'
    const actual = longestCommonPrefix(input)
    expect(actual).toBe(expected)
  })

  it('should return "fl"', () => {
    const input = ['flower', 'flow', 'flight']
    const expected = 'fl'
    const actual = longestCommonPrefix(input)
    expect(actual).toBe(expected)
  })

  it('should return ""', () => {
    // Explanation: There is no common prefix among the input strings.
    const input = ['dog', 'racecar', 'car']
    const expected = ''
    const actual = longestCommonPrefix(input)
    expect(actual).toBe(expected)
  })
})
