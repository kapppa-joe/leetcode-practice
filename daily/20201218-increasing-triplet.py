from typing import List


class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        if len(nums) < 3:
            return False

        a = nums[0]
        b = float("inf")

        for k in nums[1:]:
            if k <= a:
                a = k
            elif k <= b:
                b = k
            else:
                return True

        return False
