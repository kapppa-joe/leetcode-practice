from typing import List
from functools import lru_cache

class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        n = len(piles)

        total_stones = piles[:]
        for i in range(n - 2, -1, -1):
            total_stones[i] += total_stones[i + 1]

        @lru_cache(None)
        def game(i, m):
            if 2 * m >= n - i:
                return total_stones[i]
            else:
                oppo_get = min(game(i + x, max(m, x))
                               for x in range(1, 2 * m + 1))
                return total_stones[i] - oppo_get
        
        return game(0, 1)

fn = Solution().stoneGameII
