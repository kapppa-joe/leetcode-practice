class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        if n < 2:
            return n
        fast, slow = 0, 0
        last_pos = {s[fast]: fast}
        max_len = 0
        while n - slow > max_len and fast < n - 1:
            fast += 1
            if s[fast] in last_pos and last_pos[s[fast]] >= slow:
                slow = last_pos[s[fast]] + 1
            last_pos[s[fast]] = fast
            max_len = max(max_len, fast - slow + 1)
        return max_len

fn = Solution().lengthOfLongestSubstring
s = "pwwkew"
