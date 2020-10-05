import math


class Solution:
    def bitwiseComplement(self, n: int) -> int:
        if n == 0:
            return 1
        allones = (1 << (int(math.log(n, 2)) + 1)) - 1
        return allones - n
