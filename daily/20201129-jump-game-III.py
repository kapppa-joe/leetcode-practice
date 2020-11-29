from typing import List
from collections import deque


class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        visited = set()
        q = deque()
        q.append(start)
        visited.add(start)
        n = len(arr)

        while q:
            ptr = q.popleft()
            if arr[ptr] == 0:
                return True

            back, forward = ptr - arr[ptr], ptr + arr[ptr]
            if back >= 0 and back not in visited:
                q.append(back)
                visited.add(back)
            if forward < n and forward not in visited:
                q.append(forward)
                visited.add(forward)

        return False


fn = Solution().canReach
