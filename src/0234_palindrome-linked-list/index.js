/**
 * Given the head of a singly linked list, return true if it is a palindrome.
 *
 * Constraints:
 *   The number of nodes in the list is in the range [1, 105].
 *   0 <= Node.val <= 9
 */

const { List } = require('../modules/singly-linked-list')

exports.isPalindrome = function isPalindrome (head) {
  let currentHead = head

  // new List to receive reversed input list
  const reverseList = new List()

  // copy input list in reverse order
  while (currentHead) {
    reverseList.prepend(currentHead.value)
    currentHead = currentHead.next
  }

  // reset before iterating & comparing
  currentHead = head
  let reversedCurrentHead = reverseList.head

  while (currentHead) {
    if (currentHead.value !== reversedCurrentHead.value) return false
    currentHead = currentHead.next
    reversedCurrentHead = reversedCurrentHead.next
  }

  return true
}
