# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:

        def dfs(node: TreeNode) -> Tuple[bool, int]:
            if not node:
                return (True, 0)
            elif not node.left and not node.right:
                return (True, 1)
            else:
                l_bal, l_height = dfs(node.left)
                r_bal, r_height = dfs(node.right)
                bal = l_bal and r_bal and abs(l_height - r_height) <= 1
                return (bal, max(l_height, r_height) + 1)

        return dfs(root)[0]
