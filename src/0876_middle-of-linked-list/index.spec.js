
const { List } = require('../modules/singly-linked-list')
const { middleNode, middleNodeTwoPointers } = require('./index')

describe('middleNode', () => {
  it('should return [3,4,5]', () => {
    const list = List.makeListFromArray([1, 2, 3, 4, 5])
    const expected = List.makeListFromArray([3, 4, 5])
    expect(middleNode(list.head)).toEqual(expected.head)
  })

  it('should return [4,5,6]', () => {
    const list = List.makeListFromArray([1, 2, 3, 4, 5, 6])
    const expected = List.makeListFromArray([4, 5, 6])
    expect(middleNode(list.head)).toEqual(expected.head)
  })
})

describe('middleNodeTwoPointers', () => {
  it('should return [3,4,5]', () => {
    const list = List.makeListFromArray([1, 2, 3, 4, 5])
    const expected = List.makeListFromArray([3, 4, 5])
    expect(middleNodeTwoPointers(list.head)).toEqual(expected.head)
  })

  it('should return [4,5,6]', () => {
    const list = List.makeListFromArray([1, 2, 3, 4, 5, 6])
    const expected = List.makeListFromArray([4, 5, 6])
    expect(middleNodeTwoPointers(list.head)).toEqual(expected.head)
  })
})
