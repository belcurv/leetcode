
const { isValid, isValidRegex } = require('./index')

describe('isValid', () => {
  it('should return true for "()"', () => {
    const s = '()'
    const expected = true
    expect(isValid(s)).toBe(expected)
  })

  it('should return true for ]{}"', () => {
    const s = '()[]{}'
    const expected = true
    expect(isValid(s)).toBe(expected)
  })

  it('should return false for "(]"', () => {
    const s = '(]'
    const expected = false
    expect(isValid(s)).toBe(expected)
  })

  it('should return false for "["', () => {
    const s = '['
    const expected = false
    expect(isValid(s)).toBe(expected)
  })

  it('should return false for "(("', () => {
    const s = '(('
    const expected = false
    expect(isValid(s)).toBe(expected)
  })
})

describe('isValidRegex', () => {
  it('should return true for "()"', () => {
    const s = '()'
    const expected = true
    expect(isValidRegex(s)).toBe(expected)
  })

  it('should return true for ]{}"', () => {
    const s = '()[]{}'
    const expected = true
    expect(isValidRegex(s)).toBe(expected)
  })

  it('should return false for "(]"', () => {
    const s = '(]'
    const expected = false
    expect(isValidRegex(s)).toBe(expected)
  })

  it('should return false for "["', () => {
    const s = '['
    const expected = false
    expect(isValidRegex(s)).toBe(expected)
  })

  it('should return false for "(("', () => {
    const s = '(('
    const expected = false
    expect(isValidRegex(s)).toBe(expected)
  })
})
