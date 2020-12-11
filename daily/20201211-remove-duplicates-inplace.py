from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        prev = None
        count = 0
        for i in range(len(nums) - 1, -1, -1):
            if nums[i] != prev:
                prev = nums[i]
                count = 1
            else:
                if count < 2:
                    count += 1
                else:
                    nums.pop(i)
        
        return len(nums)

fn = Solution().removeDuplicates
