from typing import List
from functools import lru_cache

class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        dp = [[0] * (cols + 2) for _ in range(cols + 2)]
        dp[0][cols - 1] = grid[0][0] + grid[0][cols - 1]

        # print(dp)

        for k in range(1, rows):
            tmp = [[0] * (cols + 2) for _ in range(cols + 2)]
            for i in range(min(k + 1, cols)):
                for j in range(max(0, cols - k - 1), cols):
                    if i == j:
                        continue
                    tmp[i][j] = max(dp[a][b]
                                    for a in (i-1, i, i+1)
                                    for b in (j-1, j, j+1))
                    tmp[i][j] += grid[k][i] + grid[k][j]
            dp = tmp[:][:]
            # print(dp)

        return max(dp[i][j] for i in range(cols) for j in range(cols))


    def cherryPickup_fn(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        @lru_cache(None)
        def dp(i: int, j: int, k: int) -> int:
            if i < 0 or j < 0 or i >= cols or j >= cols:
                # handle out of boundary cases
                return 0
            elif i > k or j < cols - 1 - k:
                # since 1st row pos fixed at i=0, j=col-1
                return 0
            elif k == 0:
                return grid[0][0] + grid[0][-1]
            else:
                res = max(dp(a, b, k-1)
                          for a in (i-1, i, i+1)
                          for b in (j-1, j, j+1))
                res += grid[k][i]
                if i != j:
                    res += grid[k][j]
                return res

        # fill in table from 1st row
        for k in range(rows):
            for i in range(cols):
                for j in range(cols):
                    dp(i, j, k)

        return max(dp(i, j, rows - 1) for i in range(cols) for j in range(cols))

fn = Solution().cherryPickup
grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
grid2 = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
grid3 = [[1,0,0,3],[0,0,0,3],[0,0,3,3],[9,0,3,3]]
grid4 = [[1,1],[1,1]]