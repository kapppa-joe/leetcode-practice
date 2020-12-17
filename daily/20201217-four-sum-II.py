from typing import List
from collections import Counter


class Solution:
    def fourSumCount(self, A: List[int], B: List[int], C: List[int],
                     D: List[int]) -> int:
        table = Counter(a + b for a in A for b in B)
        table2 = Counter(- c - d for c in C for d in D)
        common_keys = {k for k in table if k in table2}

        return sum(table[k] * table2[k] for k in common_keys)

fn = Solution().fourSumCount