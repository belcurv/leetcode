const TreeNode = require('./binary-tree-node')

describe('TreeNode', () => {
  test('constructor should instantiate a new node', () => {
    const node = new TreeNode(1, 2, 3)
    expect(node).toEqual(expect.objectContaining({
      val: 1,
      left: expect.any(TreeNode),
      right: expect.any(TreeNode)
    }))
  })

  /**
   *                1
   *            2            111
   *         11   null
   *       3   null
   */
  test('insertLeft() should insert nodes to the left', () => {
    const node = new TreeNode(1, 11, 111)
    node.insertLeft(2)
    node.left.left.insertLeft(3)

    expect(node.left).toBeInstanceOf(TreeNode)
    expect(node.left.val).toBe(2)
    expect(node.left.left).toBeInstanceOf(TreeNode)
    expect(node.left.left.val).toBe(11)
    expect(node.left.right).toBe(null)
    expect(node.left.left.right).toBe(null)
    expect(node.left.left.left.right).toBe(null)
  })

  /**
   *                1
   *            11      2
   *                null    111
   *                      null   3
   */
  test('insertRight() should insert nodes to the right', () => {
    const node = new TreeNode(1, 11, 111)
    node.insertRight(2)
    node.right.right.insertRight(3)

    expect(node.right).toBeInstanceOf(TreeNode)
    expect(node.right.val).toBe(2)
    expect(node.right.right).toBeInstanceOf(TreeNode)
    expect(node.right.right.val).toBe(111)
    expect(node.right.left).toBe(null)
    expect(node.right.right.left).toBe(null)
    expect(node.right.right.right.left).toBe(null)
  })

  /**
   *                1
   *          11        2
   *                  3   111
   */
  test('getDfsInOrderValues() should return array of values', () => {
    const node = new TreeNode(1, 11, 111)
    node.insertRight(2)
    node.right.insertLeft(3)

    expect(node.getDfsInOrderValues()).toEqual([11, 1, 3, 2, 111])
  })

  describe('leetArrayToTree() static method', () => {
    /**
     *                   1
     *           2               3
     *         4   5           6   7
     */
    it('should generate correct binary tree', () => {
      const input = [1, null, 3, 4, 5, 6]
      const tree = TreeNode.leetArrayToTree(input)

      expect(tree).toBeInstanceOf(TreeNode)
      expect(tree.val).toBe(1)
      // expect(tree.left.val).toBe(2)
      // expect(tree.right.val).toBe(3)
      // expect(tree.left.left.val).toBe(4)
      // expect(tree.left.right.val).toBe(5)
      // expect(tree.right.left.val).toBe(6)
      // expect(tree.right.right.val).toBe(7)
      console.log(JSON.stringify(tree, null, 2))
    })

    /**
     *                 3
     *           5            1
     *       6       2      9   8
     *             7   4
     */
    it.only('should generate correct binary tree', () => {
      const input = [1, null, 2, 3]
      // const input = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]
      const tree = TreeNode.leetArrayToTree(input)

      expect(tree).toBeInstanceOf(TreeNode)
      console.log(JSON.stringify(tree, null, 2))
    })
  })
})
