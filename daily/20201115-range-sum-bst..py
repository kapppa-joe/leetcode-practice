# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        
        def dfs(node: TreeNode) -> int:
            if not node:
                return 0
            res = 0
            if low <= node.val <= high:
                res += node.val
                res += dfs(node.left) + dfs(node.right)
            if node.val < low:
                res += dfs(node.right)
            elif node.val > high:
                res += dfs(node.left)
            
            return res

        return dfs(root)
