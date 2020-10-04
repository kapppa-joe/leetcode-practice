from typing import List

class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        arr = sorted(intervals)
        to_delete = set()
        for i in range(len(intervals)):
            if i in to_delete:
                continue
            for j in range(i + 1, len(intervals)):
                if j in to_delete:
                    continue
                if arr[i][1] < arr[j][0]:
                    break
                if arr[i][0] <= arr[j][0] and arr[i][1] >= arr[j][1]:
                    to_delete.add(j)
                if arr[i][0] >= arr[j][0] and arr[i][1] <= arr[j][1]:
                    to_delete.add(i)
        return len(intervals) - len(to_delete)

s = Solution()
s.removeCoveredIntervals([[1,4],[3,6],[2,8]])