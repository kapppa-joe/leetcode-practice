from typing import List


class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        count_mod = [0] * 60
        for t in time:
            count_mod[t % 60] += 1

        result = count_mod[0] * (count_mod[0] - 1) // 2
        for t in range(1, 30):
            result += count_mod[t] * count_mod[60 - t]
        result += count_mod[30] * (count_mod[30] - 1) // 2

        return result

fn = Solution().numPairsDivisibleBy60
