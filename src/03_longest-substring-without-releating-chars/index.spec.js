
const {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringSlidingWindow,
  lengthOfLongestSubstringQuasiSlidingWindow
} = require('./index')

describe('lengthOfLongestSubstring', () => {
  it('should work', () => {
    const s = 'abcabcbb'
    const expected = 3 // Explanation: The answer is "abc", with the length of 3.
    expect(lengthOfLongestSubstring(s)).toBe(expected)
  })

  it('should work', () => {
    const s = 'bbbbb'
    const expected = 1 // Explanation: The answer is "b", with the length of 1.
    expect(lengthOfLongestSubstring(s)).toBe(expected)
  })

  it('should work', () => {
    const s = 'pwwkew'
    const expected = 3 // Explanation: The answer is "wke", with the length of 3.
    expect(lengthOfLongestSubstring(s)).toBe(expected)
  })
})

describe('lengthOfLongestSubstringSlidingWindow', () => {
  it('should work', () => {
    const s = 'abcabcbb'
    const expected = 3 // Explanation: The answer is "abc", with the length of 3.
    expect(lengthOfLongestSubstringSlidingWindow(s)).toBe(expected)
  })

  it('should work', () => {
    const s = 'bbbbb'
    const expected = 1 // Explanation: The answer is "b", with the length of 1.
    expect(lengthOfLongestSubstringSlidingWindow(s)).toBe(expected)
  })

  it('should work', () => {
    const s = 'pwwkew'
    const expected = 3 // Explanation: The answer is "wke", with the length of 3.
    expect(lengthOfLongestSubstringSlidingWindow(s)).toBe(expected)
  })
})

describe('lengthOfLongestSubstringQuasiSlidingWindow', () => {
  it('should work', () => {
    const s = 'abcabcbb'
    const expected = 3 // Explanation: The answer is "abc", with the length of 3.
    expect(lengthOfLongestSubstringQuasiSlidingWindow(s)).toBe(expected)
  })

  it('should work', () => {
    const s = 'bbbbb'
    const expected = 1 // Explanation: The answer is "b", with the length of 1.
    expect(lengthOfLongestSubstringQuasiSlidingWindow(s)).toBe(expected)
  })

  it('should work', () => {
    const s = 'pwwkew'
    const expected = 3 // Explanation: The answer is "wke", with the length of 3.
    expect(lengthOfLongestSubstringQuasiSlidingWindow(s)).toBe(expected)
  })
})
