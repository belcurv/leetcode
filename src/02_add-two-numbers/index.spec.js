
const { List } = require('../modules/singly-linked-list')
const { addTwoNumbers } = require('./index')

describe('twoSum', () => {
  it('should return correct linked list', () => {
    const l1 = List.makeListFromArray([2, 4, 3])
    const l2 = List.makeListFromArray([5, 6, 4])
    const expected = List.makeListFromArray([7, 0, 8])
    const actual = addTwoNumbers(l1.head, l2.head)
    expect(actual).toEqual(expected.head)
  })

  it('should return correct linked list', () => {
    const l1 = List.makeListFromArray([0])
    const l2 = List.makeListFromArray([0])
    const expected = List.makeListFromArray([0])
    const actual = addTwoNumbers(l1.head, l2.head)
    expect(actual).toEqual(expected.head)
  })

  it('should return correct linked list', () => {
    const l1 = List.makeListFromArray([9, 9, 9, 9, 9, 9, 9])
    const l2 = List.makeListFromArray([9, 9, 9, 9])
    const expected = List.makeListFromArray([8, 9, 9, 9, 0, 0, 0, 1])
    const actual = addTwoNumbers(l1.head, l2.head)
    expect(actual).toEqual(expected.head)
  })
})
