# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

    def __repr__(self):
        return f'val: {self.val}, left: <{self.left}> right: <{self.right}>'

class Codec:

    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """

        def preorder(node: TreeNode) -> str:
            if not node:
                return ''
            return ','.join([str(node.val), preorder(node.left),
                            preorder(node.right)])
        
        return preorder(root)

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        arr = data.split(',')
        arr.reverse()

        def build(arr) -> TreeNode:
            val = arr.pop()
            if val == "":
                return None
            node = TreeNode(int(val))
            node.left = build(arr)
            node.right = build(arr)
            return node
        return build(arr)


# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans