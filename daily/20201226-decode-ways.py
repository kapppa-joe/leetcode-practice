class Solution:
    def numDecodings(self, s: str) -> int:
        if not s:
            return 0

        n = len(s)
        dp = [0] * n + [1]
        # dp[i] ways of decode for substr s[i:]
        # '' count as one valid way.

        for i in reversed(range(n)):
            leng = n - i
            if s[i:i+1] != '0':
                dp[i] += dp[i+1]
            if leng > 1 and 10 <= int(s[i:i+2]) <= 26:
                dp[i] += dp[i+2]
        return dp[0]

fn = Solution().numDecodings
s = "20201226"
