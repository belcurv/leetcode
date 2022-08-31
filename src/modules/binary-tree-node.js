/**
 * Definition for a binary tree node.
 *
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor (val, left, right) {
    // this.name = `Node ${val}`
    this.val = val ?? 0
    this.left = left == null ? null : new TreeNode(left)
    this.right = left == null ? null : new TreeNode(right)
  }

  insertLeft (val) {
    if (this.left == null) {
      this.left = new TreeNode(val)
    } else {
      const newNode = new TreeNode(val)
      newNode.left = new TreeNode(this.left.val)
      this.left = newNode
    }
  }

  insertRight (val) {
    if (this.right == null) {
      this.right = new TreeNode(val)
    } else {
      const newNode = new TreeNode(val)
      newNode.right = new TreeNode(this.right.val)
      this.right = newNode
    }
  }

  /**
   * @returns {number[]} array of node values
   */
  getDfsInOrderValues () {
    const result = []

    ;(function recursiveTraverse (node) {
      if (node.left != null) recursiveTraverse(node.left)

      result.push(node.val)

      if (node.right != null) recursiveTraverse(node.right)
    })(this)

    return result
  }

  bfs () {}

  /**
   * Does NOT always work :( when there are nulls
   *
   * Builds a binary tree from a leetcode problem input "array".
   * They're not actually arrays in leetcode, need to convert for local dev
   * and testing.
   *
   * For a node at index i in your array,
   *   - the index of its left child is  : 2 * i + 1
   *   - the index of its right child is : 2 * i + 2
   *
   * [1,2,3,4,5,6,7] ==>              1
   *                            2           3
   *                         4     5     6     7
   *
   * [1,null,2,3] ==>     1
   *                            2
   *                          3
   */
  static leetArrayToTree (arr) {
    function recursiveBuild (arr, i) {
      // console.log({ i, val: arr[i] })
      if (i < arr.length && arr[i] != null) {
        const node = new TreeNode(arr[i])
        node.left = recursiveBuild(arr, 2 * i + 1)
        node.right = recursiveBuild(arr, 2 * i + 2)
        return node
      }
      return null
    }

    return recursiveBuild(arr, 0)
  }
}

module.exports = TreeNode
