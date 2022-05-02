
const { isPalindrome } = require('./index')
const { List } = require('../modules/singly-linked-list')

describe('isPalindrome', () => {
  it('should return true for [1, 2, 2, 1]', () => {
    const list = List.makeListFromArray([1, 2, 2, 1])
    const expected = true
    const actual = isPalindrome(list.head)
    expect(actual).toEqual(expected)
  })

  it('should return false for [1, 2]', () => {
    const list = List.makeListFromArray([1, 2])
    const expected = false
    const actual = isPalindrome(list.head)
    expect(actual).toEqual(expected)
  })
})
