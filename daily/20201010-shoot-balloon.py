class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0

        arr = sorted(points, key=lambda balloon: balloon[1])
        end = arr[0][1]
        count = 1

        for balloon in arr[1:]:
            if balloon[0] > end:
                count += 1
                end = balloon[1]

        return count
