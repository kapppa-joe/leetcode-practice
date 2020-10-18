from typing import List

class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        n = len(prices)
        if k <= 0 or n <= 1:
            return 0

        if k > n / 2:
            profit = 0
            for i in range(1, n):
                profit += max(0, prices[i] - prices[i-1])
            return profit
        
        dp = [[0 for j in range(n)] for i in range(k+1)]
        for i in range(1, k+1):
            profit = 0 - prices[0]
            for j in range(1, n):
                dp[i][j] = max(dp[i][j - 1], prices[j] + profit)
                profit = max(profit, dp[i-1][j-1] - prices[j])

        return dp[k][n-1]

fn = Solution().maxProfit