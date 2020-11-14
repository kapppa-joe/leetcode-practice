"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':

        def bfs(node: 'Node'):
            if not node or not (node.left and node.right):
                return
            else:
                node.left.next = node.right
                if node.next:
                    node.right.next = node.next.left
                else:
                    node.right.next = None
                bfs(node.right)
                bfs(node.left)
        
        bfs(root)
        return root
    