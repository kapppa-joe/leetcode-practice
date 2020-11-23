# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: TreeNode) -> int:

        def dfs(node: TreeNode) -> Tuple[int, int]:
            if not node:
                return (0, 0)
            take_left, skip_left = dfs(node.left)
            take_right, skip_right = dfs(node.right)
            take_this = node.val + skip_left + skip_right
            skip_this = max(take_left, skip_left) + max(take_right, skip_right)
            return (take_this, skip_this)

        return max(dfs(root))
