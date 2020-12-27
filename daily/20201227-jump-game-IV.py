from typing import List
from collections import defaultdict


class Solution:
    def minJumps(self, arr: List[int]) -> int:
        if len(arr) == 1:
            return 0

        n = len(arr)
        visited = set()

        edges = defaultdict(set)
        rev_dict = defaultdict(list)

        for i in range(n):
            if i > 0:
                edges[i].add(i - 1)
            if i < n - 1:
                edges[i].add(i + 1)
            rev_dict[arr[i]].append(i)

        for v in rev_dict.values():
            for i in v:
                edges[i].update(v)
                edges[i].remove(i)

        curr = set()
        next = edges[0]
        dist = 0
        while True:
            curr.update(next)
            next.clear()
            dist += 1
            if n - 1 in curr:
                return dist

            visited.update(curr)
            for node in curr:
                next.update(edges[node])
            next.difference_update(visited)

fn = Solution().minJumps
