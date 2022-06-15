/**
 * O(n + n) = O(n)
 * Count ListNodes, then .next through half of the nodes
 * @param  {ListNode} head
 * @return {ListNode}
 */
exports.middleNode = function middleNode (head) {
  let length = 0
  let node = head

  while (node.next) {
    length++
    node = node.next
  }

  // ceil because we want to count up to the 'second middle node' when there are two
  let middleIndex = Math.ceil(length / 2)

  // reset node back to head
  node = head

  // decrement middle index while traversing the list. When index = 0, we're at the middle
  while (middleIndex > 0) {
    middleIndex--
    node = node.next
  }

  return node
}

/**
 * O(n)
 * Two Pointers method (fast and slow). When fast gets to the end of the list, slow will be at the middle node
 * @param  {ListNode} head
 * @return {ListNode}
 */
exports.middleNodeTwoPointers = function middleNodeTwoPointers (head) {
  // init fast and slow = head
  let slow = head
  let fast = head

  // as long as fast is defined and has non nullish next ...
  while (fast && fast.next) {
    slow = slow.next // move 1 node at a time
    fast = fast.next.next // move 2 nodes at a time
  }

  return slow
}
