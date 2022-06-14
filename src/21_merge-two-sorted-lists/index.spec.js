const { List } = require('../modules/singly-linked-list')
const { mergeTwoLists } = require('./index')

describe('mergeTwoLists', () => {
  it('should return [1, 1, 2, 3, 4, 4]', () => {
    const list1 = List.makeListFromArray([1, 2, 4])
    const list2 = List.makeListFromArray([1, 3, 4])
    const expected = List.makeListFromArray([1, 1, 2, 3, 4, 4]).head
    const actual = mergeTwoLists(list1, list2)
    expect(actual).toEqual(expected)
  })

  it('should return []', () => {
    const list1 = List.makeListFromArray([])
    const list2 = List.makeListFromArray([])
    const expected = List.makeListFromArray([]).head
    const actual = mergeTwoLists(list1, list2)
    expect(actual).toEqual(expected)
  })

  it('should return [0]', () => {
    const list1 = List.makeListFromArray([])
    const list2 = List.makeListFromArray([0])
    const expected = List.makeListFromArray([0]).head
    const actual = mergeTwoLists(list1, list2)
    expect(actual).toEqual(expected)
  })
})
