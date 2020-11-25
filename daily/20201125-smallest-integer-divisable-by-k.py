class Solution:
    def smallestRepunitDivByK(self, K: int) -> int:
        seen = set()
        count = 0
        remainder = 0

        while remainder not in seen:
            seen.add(remainder)
            remainder = (remainder * 10 + 1) % K
            count += 1
            if remainder == 0:
                return count

        return -1

fn = Solution().smallestRepunitDivByK
