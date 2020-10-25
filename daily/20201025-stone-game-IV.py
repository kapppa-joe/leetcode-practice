from functools import lru_cache
from math import sqrt

class Solution:
    def winnerSquareGame(self, n: int) -> bool:
        square_nums = [i * i for i in range(int(sqrt(n)), 0, -1)]

        @lru_cache(None)
        def can_win(i: int) -> bool:
            if i in square_nums:
                return True
            else:
                for j in square_nums:
                    if j < i and not can_win(i - j):
                        return True
                return False

        return can_win(n)

    def winnerSquareGameb(self, n: int) -> bool:
        if sqrt(n) % 1 == 0:
            return True

        dp = {}
        square_nums = [i * i for i in range(1, int(sqrt(n)) + 1)]
        dp[0] = False

        for i in range(1, n + 1):
            if i in square_nums:
                dp[i] = True
            else:
                dp[i] = any(not dp[i-j] for j in square_nums if j < i)
        return dp[n]


fn = Solution().winnerSquareGame