from functools import lru_cache
from typing import List

class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        sum_n = sum(nums)
        if sum_n % 2 != 0 or len(nums) < 2:
            return False

        half = sum_n // 2
        n = len(nums)

        @lru_cache(None)
        def dp(i: int, diff: int) -> bool:
            if diff == 0:
                return True
            elif i >= n:
                return False
            else:
                return dp(i + 1, diff - nums[i]) or dp(i + 1, diff)

        return dp(0, half)

fn = Solution().canPartition
