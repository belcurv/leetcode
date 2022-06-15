
const { isPalindrome, isPalindromeNoArrays, isPalindromeSimplified } = require('./index')

describe('isPalindrome', () => {
  it('should return true for 121', () => {
    // Explanation: 121 reads as 121 from left to right and from right to left.
    const x = 121
    const expected = true
    const actual = isPalindrome(x)
    expect(actual).toBe(expected)
  })

  it('should return false for negative numbers', () => {
    // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    const x = -121
    const expected = false
    const actual = isPalindrome(x)
    expect(actual).toBe(expected)
  })

  it('should return false for 10', () => {
    // Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
    const x = 10
    const expected = false
    const actual = isPalindrome(x)
    expect(actual).toBe(expected)
  })

  it('should return false for 1000021', () => {
    const x = 1000021
    const expected = false
    const actual = isPalindrome(x)
    expect(actual).toBe(expected)
  })

  it('should return true for single integers >= 0', () => {
    for (let i = 0; i < 10; i++) {
      expect(isPalindrome(i)).toBe(true)
    }
  })
})

describe('isPalindromeNoArrays', () => {
  it('should return true for 121', () => {
    // Explanation: 121 reads as 121 from left to right and from right to left.
    const x = 121
    const expected = true
    const actual = isPalindromeNoArrays(x)
    expect(actual).toBe(expected)
  })

  it('should return false for negative numbers', () => {
    // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    const x = -121
    const expected = false
    const actual = isPalindromeNoArrays(x)
    expect(actual).toBe(expected)
  })

  it('should return false for 10', () => {
    // Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
    const x = 10
    const expected = false
    const actual = isPalindromeNoArrays(x)
    expect(actual).toBe(expected)
  })

  it('should return false for 1000021', () => {
    const x = 1000021
    const expected = false
    const actual = isPalindromeNoArrays(x)
    expect(actual).toBe(expected)
  })

  it('should return true for single integers >= 0', () => {
    for (let i = 0; i < 10; i++) {
      expect(isPalindromeNoArrays(i)).toBe(true)
    }
  })
})

describe('isPalindromeSimplified', () => {
  it('should return true for 121', () => {
    // Explanation: 121 reads as 121 from left to right and from right to left.
    const x = 121
    const expected = true
    const actual = isPalindromeSimplified(x)
    expect(actual).toBe(expected)
  })

  it('should return false for negative numbers', () => {
    // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    const x = -121
    const expected = false
    const actual = isPalindromeSimplified(x)
    expect(actual).toBe(expected)
  })

  it('should return false for 10', () => {
    // Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
    const x = 10
    const expected = false
    const actual = isPalindromeSimplified(x)
    expect(actual).toBe(expected)
  })

  it('should return false for 1000021', () => {
    const x = 1000021
    const expected = false
    const actual = isPalindromeSimplified(x)
    expect(actual).toBe(expected)
  })

  it('should return true for single integers >= 0', () => {
    for (let i = 0; i < 10; i++) {
      expect(isPalindromeSimplified(i)).toBe(true)
    }
  })
})
