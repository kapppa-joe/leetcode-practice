# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from collections import deque

class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0

        queue = deque()
        level = 0
        queue.append(root)

        while queue:
            size = len(queue)
            level += 1
            for i in range(size):
                node = queue.popleft()
                if not node.left and not node.right:
                    return level
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return level
