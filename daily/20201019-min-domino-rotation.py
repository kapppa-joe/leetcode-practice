from typing import List


class Solution:
    def minDominoRotations(self, A: List[int], B: List[int]) -> int:
        n = len(A)
        if n < 2 or n != len(B):
            return -1
        
        a = A[0]
        b = B[0]

        a_fail = any(a not in (A[i], B[i]) for i in range(1, n))
        b_fail = any(b not in (A[i], B[i]) for i in range(1, n))

        if a_fail and b_fail:
            return -1
        else:
            k = a if b_fail else b
            # if both a_fail and b_fail are false, then count(a) must = count(b),
            # thus k can be either a and b
            return n - max(A.count(k), B.count(k))
