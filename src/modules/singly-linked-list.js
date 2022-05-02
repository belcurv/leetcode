/**
 * Definition for singly-linked list node.
 * Linked Lists are recursive data structures, so each node is itself a list.
 */
class ListNode {
  /**
   * @constructor
   * @param {string|number} [value]
   * @param {ListNode} [next]
   */
  constructor (value, next) {
    this.value = value == null ? 0 : value
    this.next = next == null ? null : next
  }
}

class List {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // mainly for diagnostics
  print () {
    let current = this.head
    while (current != null) {
      console.log(current.value)
      current = current.next
    }
  }

  /**
   * Create a new list node, add it to the end of the list, update references
   * @param   {string|number}  value  Only primitive values are supported now
   * @returns {ListNode}
   */
  append (value) {
    const node = List.makeNode(value)

    // if list is currently empty, replace head & tail with new node
    if (!this.tail) {
      this.head = this.tail = node
    } else {
      this.tail.next = node // point current tail Node's next -> new node
      this.tail = node // replace tail's current reference with our new node
    }

    this.length += 1
    return node
  }

  /**
   * Create a new list node, add it to the start of the list, update references
   * @param   {string|number}  value  Only primitive values are supported now
   * @returns {ListNode}
   */
  prepend (value) {
    const node = List.makeNode(value)

    // if list is currently empty, replace head & tail with new node
    if (!this.head) {
      this.head = this.tail = node
    } else {
      node.next = this.head // point new Node's next -> current head
      this.head = node // update current head = our new Node
    }

    this.length += 1
    return node
  }

  /**
   * @param   {string|number}  value  Only primitive values are supported now
   * @returns {ListNode}
   */
  static makeNode (value) {
    return new ListNode(value)
  }

  /**
   * Create a linked list from an array of numbers or strings
   * @param {Array<string|number>} arr
   * @returns {List}
   */
  static makeListFromArray (arr) {
    if (!Array.isArray(arr)) return new List() // empty list

    const list = new List()
    for (const el of arr) {
      list.append(el)
    }
    return list
  }
}

exports = module.exports = {
  List,
  ListNode
}
