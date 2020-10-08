from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def bs(i: int, j: int) -> int:
            if i > j:
                return -1
            mid = (i + j) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                return bs(i, mid - 1)
            else:
                return bs(mid + 1, j)
        return bs(0, len(nums) - 1)
