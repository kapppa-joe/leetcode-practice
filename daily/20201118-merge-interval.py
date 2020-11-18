from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return []

        arr = sorted(intervals, key=lambda x: x[0])
        res = []
        start, end = arr[0]
        for a, b in arr[1:]:
            if a > end:
                res.append([start, end])
                start, end = a, b
            else:
                end = max(b, end)

        res.append([start, end])
        return res


fn = Solution().merge
arr = [[55, 68], [38, 55], [32, 98], [14, 76], [11, 81], [25, 53], [1, 4], [13, 34], [86, 86], [26, 84], [3, 28], [9, 15], [80, 83], [37, 49], [4, 95], [8, 32], [16, 17], [2, 43], [18, 28], [79, 99], [31, 75], [32, 34], [14, 15], [12, 25], [27, 56], [59, 75], [1, 69], [1, 18], [27, 73], [18, 67], [2, 7], [6, 55], [29, 29], [8, 60], [15, 18], [74, 83], [78, 99], [22, 42], [51, 89], [13, 32], [18, 68], [70, 82], [14, 23], [5, 14], [4, 72], [63, 81], [6, 56], [42, 52], [55, 65], [7, 10]]
