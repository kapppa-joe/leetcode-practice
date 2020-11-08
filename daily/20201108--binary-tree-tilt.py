from typing import Tuple

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def findTilt(self, root: TreeNode) -> int:
        
        def dfs(node: TreeNode) -> Tuple[int, int]:
            if not node:
                return (0, 0)
            elif not node.left and not node.right:
                return (0, node.val)
            else:
                (l_tilt, l_val) = dfs(node.left)
                (r_tilt, r_val) = dfs(node.right)
                tilt = abs(r_val - l_val) + l_tilt + r_tilt
                val = node.val + l_val + r_val
                return (tilt, val)

        return dfs(root)[0]
