from typing import List


class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:

        def dnc(low: int, high: int) -> List[List[int]]:
            if low == high:
                left, right, height = buildings[low]
                return [[left, height], [right, 0]]
            else:
                mid = (low + high) // 2
                return merge(dnc(low, mid), dnc(mid + 1, high))

        def add_point(skyline: List[List[int]], x: int, height: int):
            if not skyline:
                skyline.append([x, height])
            else:
                if skyline[-1][1] == height:
                    # skip the new point if same height as prev
                    return
                elif skyline[-1][0] == x:
                    # replace last point if same x coord and higher
                    skyline[-1][1] = max(skyline[-1][1], height)
                else:
                    skyline.append([x, height])

        def merge(a: List[List[int]], b: List[List[int]]):
            i, j = 0, 0
            result = []
            height_a, height_b = 0, 0
            new_x = 0

            while i < len(a) and j < len(b):
                if a[i][0] < b[j][0]:
                    height_a = a[i][1]
                    new_x = a[i][0]
                    i += 1
                elif a[i][0] > b[j][0]:
                    height_b = b[j][1]
                    new_x = b[j][0]
                    j += 1
                else:
                    height_a = a[i][1]
                    height_b = b[j][1]
                    new_x = a[i][0]
                    i += 1
                    j += 1
                add_point(result, new_x, max(height_a, height_b))

            for x, height in (*a[i:], *b[j:]):
                add_point(result, x, height)
            return result

        if not buildings:
            return []
        else:
            return dnc(0, len(buildings) - 1)


fn = Solution().getSkyline
