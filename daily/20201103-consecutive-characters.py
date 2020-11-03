class Solution:
    def maxPower(self, s: str) -> int:
        if not s:
            return 0
        
        curr_char = s[0]
        curr_power = 1
        max_power = 1
        for i in range(1, len(s)):
            if s[i] == curr_char:
                curr_power += 1
            else:
                max_power = max(curr_power, max_power)
                curr_char = s[i]
                curr_power = 1
        max_power = max(curr_power, max_power)

        return max_power
