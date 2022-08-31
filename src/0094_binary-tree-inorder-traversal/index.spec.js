const TreeNode = require('../modules/binary-tree-node')
const { inorderTraversal } = require('./index')

describe('inorderTraversal', () => {
  it.only('should return [1, 3, 2]', () => {
    const input = [1, null, 2, 3]
    const root = TreeNode.leetArrayToTree(input)
    console.log(root)
    console.log(inorderTraversal(root))
  })

  it.todo('YOU ARE HERE. NOT DONE YET')
})
