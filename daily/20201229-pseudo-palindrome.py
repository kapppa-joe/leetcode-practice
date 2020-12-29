# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.count = 0

    def pseudoPalindromicPaths(self, root: TreeNode) -> int:
        def is_palindrome(p: int) -> bool:
            # use bits to track parity
            # p & (p - 1) remove a '1' in the binary notation.
            # if more than one '1', it is not a palindrome
            p = p & (p - 1)
            return p == 0

        def dfs(node: TreeNode, parity: int = 0):
            if not node:
                return
            parity ^= 1 << (node.val - 1)
            if not node.left and not node.right:
                if is_palindrome(parity):
                    self.count += 1
            else:
                dfs(node.left, parity)
                dfs(node.right, parity)

        self.count = 0
        dfs(root)
        return self.count

fn = Solution().pseudoPalindromicPaths
