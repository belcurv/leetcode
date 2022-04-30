
const { romanToInt } = require('./index')

describe('romanToInt', () => {
  it('should output 3, given "III"', () => {
    const input = 'III'
    const expected = 3
    // Explanation: III = 3.
    expect(romanToInt(input)).toBe(expected)
  })

  it('should output 58, given "LVIII"', () => {
    const input = 'LVIII'
    const expected = 58
    // Explanation: L = 50, V= 5, III = 3.
    expect(romanToInt(input)).toBe(expected)
  })

  it('should output 1994, given "MCMXCIV"', () => {
    const input = 'MCMXCIV'
    const expected = 1994
    // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
    expect(romanToInt(input)).toBe(expected)
  })
})
