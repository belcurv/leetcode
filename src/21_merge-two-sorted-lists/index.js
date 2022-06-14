
const { List } = require('../modules/singly-linked-list')

/**
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list
 *
 * @param  {import('../modules/singly-linked-list').ListNode} list1
 * @param  {import('../modules/singly-linked-list').ListNode} list2
 * @return {import('../modules/singly-linked-list').ListNode}
 */
exports.mergeTwoLists = function mergeTwoLists (list1, list2) {
  let head1 = list1.head
  let head2 = list2.head

  const output = new List()

  // loop until BOTH head1 & head2 are falsy (both null)
  while (head1 || head2) {
    if (head1 == null) {
      output.append(head2.value)
      head2 = head2.next
    } else if (head2 == null || head1.value <= head2.value) {
      output.append(head1.value)
      head1 = head1.next
    } else {
      output.append(head2.value)
      head2 = head2.next
    }
  }

  return output.head
}
