from typing import List


class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        n = len(nums)
        arr = [1] + nums + [1]
        dp = [[0] * (n + 2) for i in range(n + 2)]

        for width in range(1, n + 1):
            for left in range(1, n - width + 2):
                right = left + width - 1

                for last in range(left, right + 1):
                    dp[left][right] = max(dp[left][right],
                                          dp[left][last - 1] +
                                          arr[left - 1] * arr[last] * arr[right + 1] +
                                          dp[last + 1][right])
        return dp[1][n]

fn = Solution().maxCoins
