from typing import List
from functools import lru_cache


class Solution:
    def partition(self, s: str) -> List[List[str]]:

        @lru_cache(None)
        def dps(substr: str):
            if not substr:
                return [[]]

            res = []
            for i in range(len(substr)):
                if substr[:i+1] == substr[i::-1]:
                    for palin in dps(substr[i+1:]):
                        res.append([substr[:i+1]] + palin)
            return res

        return dps(s)


fn = Solution().partition
fn("aba")