class Solution:
    def buddyStrings(self, A: str, B: str) -> bool:
        if len(A) != len(B) or len(A) < 2:
            return False

        swap = []
        for i in range(len(A)):
            if A[i] != B[i]:
                swap.append(i)
            if len(swap) > 2:
                return False

        if len(swap) == 2:
            (i, j) = swap
            return A[i] == B[j] and B[i] == A[j]
        elif len(swap) == 1:
            return False
        else:
            return len(set(A)) < len(A)
