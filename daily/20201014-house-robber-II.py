from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        elif len(nums) <= 3:
            return max(nums)

        def dp(nums: List[int]) -> int:
            if not nums:
                return 0
            (prev, curr) = (0, 0)
            for i, v in enumerate(nums):
                if i == 0:
                    curr = v
                else:
                    (prev, curr) = (curr, max(prev + v, curr))
            return curr

        return max(dp(nums[:-1]), dp(nums[1:]))