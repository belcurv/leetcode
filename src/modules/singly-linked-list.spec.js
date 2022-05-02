const { List } = require('./singly-linked-list')

describe('List class', () => {
  it('should create empty lists', () => {
    const actual = new List()
    expect(actual).toEqual({
      head: null,
      tail: null,
      length: 0
    })
  })

  describe('List.makeListFromArray() static method', () => {
    it('should create an empty list from a non-array input', () => {
      const list = List.makeListFromArray('haha, no')
      expect(list).toBeInstanceOf(List)
      expect(list.length).toBe(0)
      expect(list.head).toBe(null)
      expect(list.tail).toBe(null)
    })

    it('should create a linked list from an array of numbers', () => {
      const list = List.makeListFromArray([9, 8, 7, 6, 5])
      expect(list).toBeInstanceOf(List)
      expect(list.length).toBe(5)
      expect(list.head.value).toBe(9)
      expect(list.tail.value).toBe(5)
    })
  })

  describe('.append() method', () => {
    it('should be able to append a node to an empty list', () => {
      const list = new List()
      const newNode = list.append(5)
      expect(newNode).toEqual({ value: 5, next: null })
      expect(list.head).toBe(newNode)
      expect(list.tail).toBe(newNode)
      expect(list.length).toBe(1)
    })

    it('should be able to append a node to a non-empty list', () => {
      const list = new List()
      const headNode = list.append(1)
      const nodeTwo = list.append(2)
      const newestNode = list.append(3)
      expect(newestNode).toEqual({ value: 3, next: null })
      expect(headNode.next).toBe(nodeTwo)
      expect(nodeTwo.next).toBe(newestNode)
      expect(list.head).toBe(headNode)
      expect(list.tail).toBe(newestNode)
      expect(list.length).toBe(3)
    })
  })

  describe('.prepend() method', () => {
    it('should be able to prepend a node to an empty list', () => {
      const list = new List()
      const newNode = list.prepend(5)
      expect(newNode).toEqual({ value: 5, next: null })
      expect(list.head).toBe(newNode)
      expect(list.tail).toBe(newNode)
      expect(list.length).toBe(1)
    })

    it('should be able to prepend a node to front of a non-empty list', () => {
      const list = new List()
      const node1 = list.prepend(1)
      const node2 = list.prepend(2)
      const node3 = list.prepend(3)
      expect(node3).toEqual({ value: 3, next: node2 })
      expect(node3.next).toBe(node2)
      expect(node2.next).toBe(node1)
      expect(node1.next).toBe(null)
      expect(list.head).toBe(node3)
      expect(list.tail).toBe(node1)
      expect(list.length).toBe(3)
    })
  })

  describe('.print() method', () => {
    const originalConsoleLog = console.log

    beforeEach(() => {
      console.log = jest.fn()
    })

    afterAll(() => {
      console.log = originalConsoleLog
    })

    it('should log the lists values to console', () => {
      const list = new List()
      list.print()
      expect(console.log).not.toHaveBeenCalled() // empty list = nothing to print
      list.append(1)
      list.append(2)
      list.append(3)
      list.print()
      expect(console.log).toHaveBeenCalledTimes(3)
      expect(console.log).toHaveBeenNthCalledWith(1, 1)
      expect(console.log).toHaveBeenNthCalledWith(2, 2)
      expect(console.log).toHaveBeenNthCalledWith(3, 3)
    })
  })
})
