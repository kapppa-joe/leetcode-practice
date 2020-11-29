from typing import List
from collections import deque


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        if len(nums) <= k:
            return [max(nums)]

        result = []
        q = deque()
        for i in range(k):
            while q and nums[q[-1]] < nums[i]:
                q.pop()
            q.append(i)
        result.append(nums[q[0]])

        for i in range(len(nums) - k):
            while q and q[0] <= i:
                q.popleft()

            while q and nums[q[-1]] < nums[k + i]:
                q.pop()
            q.append(k + i)
            result.append(nums[q[0]])

        return result


fn = Solution().maxSlidingWindow
