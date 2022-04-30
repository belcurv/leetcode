/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor (val, next) {
    this.val = val == null ? 0 : val
    this.next = next == null ? null : next
  }
}

exports.ListNode = ListNode

/**
 * @param  {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
exports.addTwoNumbers = function addTwoNumbers (l1, l2) {
  const head = new ListNode(0) // Start a LinkedList by creating the head node
  let node = head // Set node = ref to head; will be replaced by current working node
  let carry = 0 // Track carryover from sums > 9

  // Traverse both linked lists until both are falsey aka when both l1 and l2 values are null.
  // Note: l1 and l2 can be different lengths.
  // l1 and l2 are either ListNodes or null, whatever prev node's `next` is.
  // After l1 & l2 are reduced to nulls, it's possibe we still have a carry. Add 1 more node with the value of the carry.
  while (l1 || l2 || carry) {
    // Need to keep running values of l1 and l2.
    // Default running sums to 0.
    const l1Value = l1 ? l1.val : 0
    const l2Value = l2 ? l2.val : 0

    const sum = l1Value + l2Value + carry

    if (sum > 9) {
      // Each Node can only hold single digits; strip off carryover
      node.next = new ListNode(sum % 10)
      carry = 1 // Max sum of 2 single-digit integers is 18, so the max carry we can have is 1
    } else {
      node.next = new ListNode(sum)
      carry = 0
    }

    // point node's ref at our new ListNode
    node = node.next

    // goto next nodes in each list
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  // why head.next? Because that's where our number actually starts. Remember, we
  // declared head as a random node - it's not part of our output. Our output
  // starts with the next node.
  return head.next
}
