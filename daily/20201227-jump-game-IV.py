from typing import List
from collections import defaultdict


class Solution:
    def minJumps(self, arr: List[int]) -> int:
        if len(arr) == 1:
            return 0

        n = len(arr)
        rev_dict = defaultdict(list)
        for i in range(n):
            rev_dict[arr[i]].append(i)

        curr = set()
        next = set(rev_dict[arr[0]])
        next.add(1)
        next.remove(0)
        visited = set([0])
        dist = 0

        while True:
            curr = next
            next = set()
            dist += 1
            if n - 1 in curr:
                return dist

            visited.update(curr)
            for node in curr:
                if node - 1 not in visited:
                    next.add(node - 1)
                    visited.add(node - 1)
                if node + 1 not in visited:
                    next.add(node + 1)
                    visited.add(node + 1)
            for val in set(map(lambda i: arr[i], curr)):
                for idx in rev_dict[val]:
                    if idx not in visited:
                        next.add(idx)
                        visited.add(idx)
            next.discard(n)
            # print(f'curr: {curr}')
            # print(f'next: {next}')

fn = Solution().minJumps
arr = [1,3,5,7,9,19,39,57,6,9,2,49,119,699,999,10]
arr2 = [7] * 49999 + [11]