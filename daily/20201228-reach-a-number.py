from math import isqrt


class Solution:
    def reachNumber(self, target: int) -> int:
        target = abs(target)
        i = isqrt(target * 2)

        while (i * (i + 1) / 2) < target:
            i += 1

        diff = (i * (i + 1) / 2) - target
        while diff % 2 != 0:
            i += 1
            diff += i

        return i

fn = Solution().reachNumber
