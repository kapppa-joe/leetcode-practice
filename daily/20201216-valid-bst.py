# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from math import inf


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:

        def check(node: TreeNode, high: int, low: int) -> bool:
            if not node:
                return True
            else:
                if node.val >= high or node.val <= low:
                    return False
                return check(node.left, min(node.val, high), low) and \
                    check(node.right, high, max(node.val, low))

        return check(root, inf, -inf)
