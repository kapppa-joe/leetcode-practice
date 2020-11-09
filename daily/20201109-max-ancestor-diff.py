from typing import Tuple

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxAncestorDiff(self, root: TreeNode) -> int:

        def dfs(node: TreeNode) -> Tuple[int, int, int]:
            # return (max diff, max val, min val)
            if not node:
                return (0, 0, 0)
            elif not node.left and not node.right:
                return (0, node.val, node.val)
            else:
                diff = 0
                curr_max = node.val
                curr_min = node.val

                for child in (node.left, node.right):
                    if child:
                        (cdiff, cmax, cmin) = dfs(child)
                        diff = max(diff, cdiff)
                        curr_max = max(curr_max, cmax)
                        curr_min = min(curr_min, cmin)
                diff = max(diff, 
                           abs(node.val - curr_max),
                           abs(node.val - curr_min))
                return (diff, curr_max, curr_min)
        
        return dfs(root)[0]

fn = Solution().maxAncestorDiff
