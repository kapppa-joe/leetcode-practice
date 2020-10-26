class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        dp = [0] * (query_row + 1)
        dp[0] = poured
        for i in range(1, query_row + 1):
            for j in range(i, 0, -1):
                flowover = max(0, (dp[j-1] - 1) / 2)
                dp[j] += flowover
                dp[j-1] = flowover

        return min(1, dp[query_glass])

fn = Solution().champagneTower