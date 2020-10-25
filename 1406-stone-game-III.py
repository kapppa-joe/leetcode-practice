from typing import List
from functools import lru_cache

class Solution:
    def stoneGameIII(self, stoneValue: List[int]) -> str:
        n = len(stoneValue)

        @lru_cache(None)
        def game(i: int) -> int:
            if i >= n:
                return 0
            else:
                return max(sum(stoneValue[i:i+x]) - game(i+x)
                           for x in range(1, 4))

        for i in range(n, -1, -1):
            game(i)
            print(f'{i} : {game(i)}')
        
        if game(0) > 0: return "Alice"
        elif game(0) < 0: return "Bob"
        else: return "Tie"

fn = Solution().stoneGameIII

