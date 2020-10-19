from typing import List


class Solution:
    def minDominoRotations(self, A: List[int], B: List[int]) -> int:
        n = len(A)

        def count_dominos(k):
            return sum(1 for i in range(1, n) if A[i] == k or B[i] == k)

        if A[0] == B[0]:
            k = A[0]
            if count_dominos(k) < n - 1:
                return -1
        else:
            if count_dominos(A[0]) == n - 1:
                k = A[0]
            elif count_dominos(B[0]) == n - 1:
                k = B[0]
            else:
                return -1

        return n - max(A.count(k), B.count(k))


    def minDominoRotations2(self, A: List[int], B: List[int]) -> int:
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


fn = Solution().minDominoRotations