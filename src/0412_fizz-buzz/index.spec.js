
const { fizzBuzzArrayFrom, fizzBuzzArrayPush } = require('./index')

describe('fizzBuzzArrayFrom', () => {
  it('should handle n = 3', () => {
    const n = 3
    const expected = ['1', '2', 'Fizz']
    expect(fizzBuzzArrayFrom(n)).toEqual(expected)
  })

  it('should handle n = 5', () => {
    const n = 5
    const expected = ['1', '2', 'Fizz', '4', 'Buzz']
    expect(fizzBuzzArrayFrom(n)).toEqual(expected)
  })

  it('should handle n = 15', () => {
    const n = 15
    const expected = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
    expect(fizzBuzzArrayFrom(n)).toEqual(expected)
  })
})

describe('fizzBuzzArrayPush', () => {
  it('should handle n = 3', () => {
    const n = 3
    const expected = ['1', '2', 'Fizz']
    expect(fizzBuzzArrayPush(n)).toEqual(expected)
  })

  it('should handle n = 5', () => {
    const n = 5
    const expected = ['1', '2', 'Fizz', '4', 'Buzz']
    expect(fizzBuzzArrayPush(n)).toEqual(expected)
  })

  it('should handle n = 15', () => {
    const n = 15
    const expected = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
    expect(fizzBuzzArrayPush(n)).toEqual(expected)
  })
})
