from typing import List


class Solution:
    def findDiagonalOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix or not matrix[0]:
            return []
        m = len(matrix)
        n = len(matrix[0])
        if m == 1 or n == 1:
            return [k for row in matrix for k in row]

        dir_x = [1, 1, 0, -1, 0, 1]
        dir_y = [-1, 0, 1, 1, 1, 0]
        dir, x, y = 0, 0, 0
        res = []

        res.append(matrix[y][x])
        
        while x != n - 1 or y != m - 1:
            dir = 3 if 0 < dir <= 3 else 0
            i, j = x + dir_x[dir], y + dir_y[dir]
            while i < 0 or j < 0 or i >= n or j >= m:
                dir += 1
                # print(f'dir: {dir}, x: {x}, y: {y}')
                i, j = x + dir_x[dir], y + dir_y[dir]
            x, y = i, j
            res.append(matrix[y][x])

        return res

fn = Solution().findDiagonalOrder
matrix = [[1,2,3],[4,5,6],[7,8,9]]