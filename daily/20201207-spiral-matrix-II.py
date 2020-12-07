from typing import List


class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        dx = [1, 0, -1, 0]
        dy = [0, 1, 0, -1]
        res = [[0] * n for i in range(n)]

        def should_turn_around(x: int, y: int) -> bool:
            if x < 0 or y < 0 or x >= n or y >= n:
                return True
            elif res[y][x] > 0:
                return True
            return False

        x = 0
        y = 0
        dir = 0
        for i in range(1, n * n + 1):
            res[y][x] = i
            if should_turn_around(x + dx[dir], y + dy[dir]):
                dir = (dir + 1) % 4
            x = x + dx[dir]
            y = y + dy[dir]

        return res
