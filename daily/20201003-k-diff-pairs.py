from typing import List


class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        if k > 0:
            s = set(nums)
            return sum(1 for i in s if (i + k in s))
        else:
            s = set()
            pairs = set()
            for i in nums:
                if i in s:
                    pairs.add(i)
                else:
                    s.add(i)
            return len(pairs)
