from typing import List

class Solution:
    def longestMountain(self, A: List[int]) -> int:
        up = True
        curr_count = 1
        max_count = 0
    
        for i in range(1, len(A)):
            if A[i - 1] == A[i]:
                curr_count = 1
                up = True
            elif A[i - 1] < A[i] and up:
                curr_count += 1
            elif A[i - 1] < A[i] and not up:
                curr_count = 2
                up = True
            elif curr_count > 1 and A[i - 1] > A[i] and up:
                curr_count += 1
                up = False
                max_count = max(max_count, curr_count)
            elif A[i - 1] > A[i] and not up:
                curr_count += 1
                max_count = max(max_count, curr_count)

        return max_count

fn = Solution().longestMountain
arr = [8, 17, 7, 15, 14, 3, 14, 2, 4, 14, 2, 20, 20, 9, 15, 8, 16, 12, 3, 19]
