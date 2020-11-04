from typing import List

class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1:
            return [0]

        neighbors = [set() for i in range(n)]
        degree = [0 for i in range(n)]

        for (a, b) in edges:
            neighbors[a].add(b)
            neighbors[b].add(a)
            degree[a] += 1
            degree[b] += 1

        count = n
        leaves = [k for k in range(n) if degree[k] == 1]
        while count > 2:
            size = len(leaves)
            for i in range(size):
                leaf = leaves.pop(0)
                degree[leaf] = 0
                count -= 1
                for k in neighbors[leaf]:
                    degree[k] -= 1
                    if degree[k] == 1:
                        leaves.append(k)

        return leaves


fn = Solution().findMinHeightTrees