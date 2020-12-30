from typing import List


class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        rows = len(board)
        cols = len(board[0])

        def count_living_neighbors(x: int, y: int) -> int:
            return sum(board[j][i] % 2 == 1
                       for i in (x-1, x, x+1)
                       for j in (y-1, y, y+1)
                       if i >= 0 and j >= 0
                       and i < cols and j < rows
                       and (i, j) != (x, y))

        for y in range(rows):
            for x in range(cols):
                k = count_living_neighbors(x, y)
                if board[y][x] == 1:
                    if k < 2 or k > 3:
                        board[y][x] = -1
                else:
                    if k == 3:
                        board[y][x] = 2
        for y in range(rows):
            for x in range(cols):
                if board[y][x] >= 1:
                    board[y][x] = 1
                else:
                    board[y][x] = 0

fn = Solution().gameOfLife
board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
