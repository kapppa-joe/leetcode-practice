# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        def dfs(node: TreeNode) -> Tuple[int, TreeNode]:
            if not node:
                return (0, node)
            else:
                left_h, left = dfs(node.left)
                right_h, right = dfs(node.right)
                if left_h == right_h:
                    return (left_h + 1, node)
                elif left_h > right_h:
                    return (left_h + 1, left)
                else:
                    return (right_h + 1, right)

        return dfs(root)[1]

