from typing import List

class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        if len(nums) < 3:
            return False

        pairs = []

        for i in nums:
            if not pairs or i < pairs[-1][0]:
                pairs.append([i, i])
            else:
                low = pairs[-1][0]
                while pairs and pairs[-1][1] < i:
                    pairs.pop()
                if pairs and pairs[-1][0] < i < pairs[-1][1]:
                    return True
                else:
                    pairs.append((low, i))
        return False
