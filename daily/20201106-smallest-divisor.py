from typing import List
from math import ceil

class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:

        def sum_div(nums: List[int], k: int) -> int:
            return sum(ceil(n / k) for n in nums)

        i = ceil(sum(nums) / threshold)  # lower bound
        j = max(nums)                    # upper bound

        while i < j:
            mid = (i + j) // 2
            if sum_div(nums, mid) <= threshold:
                j = mid
            else:
                i = mid + 1
        
        return j

fn = Solution().smallestDivisor
fn([1, 2, 3], 100000)
