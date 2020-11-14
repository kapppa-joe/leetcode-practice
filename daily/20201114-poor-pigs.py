from math import ceil, log

class Solution:
    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:
        # (T+1)^x >= N
        # x log(T+1) >= log(N)
        # x >= log(N) / log(T+1) 
        if not buckets or not minutesToDie or not minutesToTest:
            return 0
        if minutesToDie > minutesToTest:
            raise Exception("No solution")

        n = buckets
        t = minutesToTest // minutesToDie

        return ceil(log(n) / log(t + 1))

fn = Solution().poorPigs