
const { isPalindrome } = require('./index')
const { List } = require('../modules/singly-linked-list')

describe('isPalindrome', () => {
  it('should return true for [1, 2, 2, 1]', () => {
    const list = List.makeListFromArray([1, 2, 2, 1])
    const actual = isPalindrome(list.head)
    expect(actual).toBe(true)
  })

  it('should return false for [1, 2]', () => {
    const list = List.makeListFromArray([1, 2])
    const actual = isPalindrome(list.head)
    expect(actual).toBe(false)
  })
})
