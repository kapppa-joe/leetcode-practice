from typing import List
from functools import lru_cache

class Solution:
    def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:

        def helper(n: int, k: int) -> int:
            # count the numbers <= n and have exactly k digits
            if n == 0 or k == 0:
                return 0

            str_n = str(n)
            if k == 1 and n < 10:
                return sum(1 for d in digits if int(d) <= n)
            elif k < len(str_n):
                return len(digits) ** k
            elif k > len(str_n):
                return 0
            else:
                res = 0
                # count the numbers start with d < n[0]
                res += sum(len(digits) ** (k - 1)
                           for d in digits if int(d) < int(str_n[0]))
                if str_n[0] in digits:
                    # count the numbers start with d == n[0]
                    # i.e. numbers <= n[1:] having exactly k-1 digits
                    res += helper(int('0' + str_n[1:]), k - 1)
            return res

        len_n = len(str(n))
        return sum(helper(n, k) for k in range(1, len_n + 1))

fn = Solution().atMostNGivenDigitSet
