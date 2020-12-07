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

        def dfs(node: 'Node') -> 'Node':
            if not node or (not node.left and not node.right):
                return node
            else:
                if node.left and node.right:
                    node.left.next = node.right
                    child_to_connect = node.right
                elif node.left:
                    child_to_connect = node.left
                else:
                    child_to_connect = node.right

                next = node.next
                while next:
                    if next.left:
                        child_to_connect.next = next.left
                        break
                    elif next.right:
                        child_to_connect.next = next.right
                        break
                    else:
                        next = next.next

                dfs(node.right)
                dfs(node.left)
                return node
        return dfs(root)
