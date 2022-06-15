
const { letterCombinations, letterCombinationsDfs } = require('./index')

describe('letterCombinations', () => {
  it('should return correct arrays', () => {
    const digits = '234'
    const expected = ['adg', 'aeg', 'afg', 'bdg', 'beg', 'bfg', 'cdg', 'ceg', 'cfg',
      'adh', 'aeh', 'afh', 'bdh', 'beh', 'bfh', 'cdh', 'ceh', 'cfh',
      'adi', 'aei', 'afi', 'bdi', 'bei', 'bfi', 'cdi', 'cei', 'cfi']
    const actual = letterCombinations(digits)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expect.arrayContaining(expected))
  })

  it('should return correct arrays', () => {
    const digits = '23'
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    const actual = letterCombinations(digits)
    // console.log(actual)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const digits = ''
    const expected = []
    const actual = letterCombinations(digits)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const digits = '2'
    const expected = ['a', 'b', 'c']
    const actual = letterCombinations(digits)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const digits = '67'
    const expected = ['mp', 'mq', 'mr', 'ms', 'np', 'nq', 'nr', 'ns', 'op', 'oq', 'or', 'os']
    const actual = letterCombinations(digits)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expected)
  })
})

describe('letterCombinationsDfs', () => {
  it('should return correct arrays', () => {
    const digits = '234'
    const expected = ['adg', 'aeg', 'afg', 'bdg', 'beg', 'bfg', 'cdg', 'ceg', 'cfg',
      'adh', 'aeh', 'afh', 'bdh', 'beh', 'bfh', 'cdh', 'ceh', 'cfh',
      'adi', 'aei', 'afi', 'bdi', 'bei', 'bfi', 'cdi', 'cei', 'cfi']
    const actual = letterCombinationsDfs(digits)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expect.arrayContaining(expected))
  })

  it('should return correct arrays', () => {
    const digits = '23'
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    const actual = letterCombinationsDfs(digits)
    // console.log(actual)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const digits = ''
    const expected = []
    const actual = letterCombinationsDfs(digits)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const digits = '2'
    const expected = ['a', 'b', 'c']
    const actual = letterCombinationsDfs(digits)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expected)
  })

  it('should return correct arrays', () => {
    const digits = '67'
    const expected = ['mp', 'mq', 'mr', 'ms', 'np', 'nq', 'nr', 'ns', 'op', 'oq', 'or', 'os']
    const actual = letterCombinationsDfs(digits)
    expect(actual.length).toBe(expected.length)
    expect(actual).toEqual(expected)
  })
})
