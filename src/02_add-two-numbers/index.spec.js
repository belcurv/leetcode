
const { addTwoNumbers } = require('./index')

function toLinkedListFromArray (arr, i = 0) {
  return i < arr.length
    ? { val: arr[i], next: toLinkedListFromArray(arr, i + 1) }
    : null
}

function toArrayFromLinkedList (ll, arr = []) {
  if (ll.next == null) return [...arr, ll.val]
  return toArrayFromLinkedList(ll.next, [...arr, ll.val])
}

describe('twoSum', () => {
  it('should return correct linked list', () => {
    const l1 = toLinkedListFromArray([2, 4, 3])
    const l2 = toLinkedListFromArray([5, 6, 4])
    const expected = [7, 0, 8]
    const actual = addTwoNumbers(l1, l2)
    expect(toArrayFromLinkedList(actual)).toEqual(expected)
  })

  it('should return correct linked list', () => {
    const l1 = toLinkedListFromArray([0])
    const l2 = toLinkedListFromArray([0])
    const expected = [0]
    const actual = addTwoNumbers(l1, l2)
    expect(toArrayFromLinkedList(actual)).toEqual(expected)
  })

  it('should return correct linked list', () => {
    const l1 = toLinkedListFromArray([9, 9, 9, 9, 9, 9, 9])
    const l2 = toLinkedListFromArray([9, 9, 9, 9])
    const expected = [8, 9, 9, 9, 0, 0, 0, 1]
    const actual = addTwoNumbers(l1, l2)
    expect(toArrayFromLinkedList(actual)).toEqual(expected)
  })
})
