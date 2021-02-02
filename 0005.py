class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) < 2 or s == s[::-1]:
            return s

        last_succ_length = 1
        left = 0

        for right in range(1, len(s)):
            odd_left = right - last_succ_length - 1
            even_left = right - last_succ_length
            odd_trial = s[odd_left:right+1]
            even_trial = s[even_left:right+1]

            if odd_left >= 0 and odd_trial == odd_trial[::-1]:
                last_succ_length += 2
                left = odd_left
            elif even_trial == even_trial[::-1]:
                last_succ_length += 1
                left = even_left
        return s[left:left+last_succ_length]
