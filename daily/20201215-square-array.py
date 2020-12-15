from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        i = 0
        while i < n and nums[i] < 0:
            i += 1
        j = i - 1

        res = []
        while j >= 0 and i < n:
            if nums[i] <= -1 * nums[j]:
                res.append(nums[i] * nums[i])
                i += 1
            else:
                res.append(nums[j] * nums[j])
                j -= 1

        if i == n:
            res += [k * k for k in nums[j::-1]]
        else:
            res += [k * k for k in nums[i:]]

        return res

fn = Solution().sortedSquares