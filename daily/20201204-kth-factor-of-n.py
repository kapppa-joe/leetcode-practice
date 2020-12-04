class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        if k > n:
            return -1
        gen = (i for i in range(1, n // 2 + 1) if n % i == 0)

        for i in gen:
            if k == 1:
                return i
            k -= 1

        if k == 1:
            return n
        else:
            return -1
