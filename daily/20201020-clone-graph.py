"""
# Definition for a Node.
"""
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node:
            return node

        queue = [node]
        new_graph = {node.val: Node(node.val)}

        while queue:
            next = queue.pop(0)
            clone = new_graph[next.val]
            for elem in next.neighbors:
                idx = elem.val
                if idx in new_graph:
                    clone.neighbors.append(new_graph[idx])
                else:
                    queue.append(elem)
                    newNode = Node(idx)
                    clone.neighbors.append(newNode)
                    new_graph[idx] = newNode

        return new_graph[1]
