from typing import List

class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 1:
            return n

        length = [1] * n
        count = [1] * n

        for i in range(n):
            for j in range(i):
                if nums[j] < nums[i]:
                    if length[j] >= length[i]:
                        length[i] = max(length[i], length[j] + 1)
                        count[i] = count[j]
                    elif length[i] == length[j] + 1:
                        count[i] += count[j]
        
        lis = max(length)
        return sum(count[i] for i in range(n) if length[i] == lis)


fn = Solution().findNumberOfLIS
