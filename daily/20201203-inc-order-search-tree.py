# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:

        def recur(curr: TreeNode, parent: TreeNode = None) -> TreeNode:
            if not curr:
                return parent

            curr.right = recur(curr.right, parent)
            new_head = recur(curr.left, curr)
            curr.left = None
            return new_head

        return recur(root)

fn = Solution().increasingBST