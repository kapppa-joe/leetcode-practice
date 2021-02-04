class Solution:
    def reverse(self, x: int) -> int:
        negative = x < 0
        s = str(-x) if negative else str(x)
        res = int(s[::-1]) * (-1 if negative else 1)
        if res > (1 << 31) - 1 or res < -(1 << 31):
            return 0
        else:
            return res
