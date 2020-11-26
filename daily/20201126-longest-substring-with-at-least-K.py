import re

class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        if k == 1:
            return len(s)

        def helper(s: str, k: int) -> int:
            if not s:
                return 0
            freq = dict()
            for c in s:
                freq[c] = freq.get(c, 0) + 1

            less_than_k = ''.join(c for c in freq if freq[c] < k)
            if not less_than_k:
                return len(s)
            else:
                splited = re.split(f'[{less_than_k}]', s)
                return max(helper(subs, k) for subs in splited)

        return helper(s, k)

fn = Solution().longestSubstring