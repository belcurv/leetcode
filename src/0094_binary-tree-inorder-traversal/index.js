/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * Given the root of a binary tree, return the inorder traversal of
 * its nodes' values.
 *
 * Constraints:
 *   The number of nodes in the tree is in the range [0, 100].
 *   -100 <= Node.val <= 100
 */

/**
 * @param  {TreeNode} root
 * @return {number[]}
 */
exports.inorderTraversal = function inorderTraversal (root) {
  const result = []

  ;(function recursiveTraverse (node) {
    if (node.left != null) recursiveTraverse(node.left)

    result.push(node.val)

    if (node.right != null) recursiveTraverse(node.right)
  })(root)

  return result
}
