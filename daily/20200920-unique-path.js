/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    if (!grid || grid.length < 1 || grid[0].length < 1) return 0;

    let result = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let countZeros = 0;
    let startX = -1;
    let startY = -1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++)
        if (grid[i][j] === 0) {
            countZeros++;
        } else if (grid[i][j] === 1) {
            startX = i;
            startY = j;
        }
    }

    const dfs = (grid, i, j, walked) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols) return;
        if (grid[i][j] === 1 && walked > 0) return;
        if (grid[i][j] < 0) return;

        if (grid[i][j] === 2) {
            if (walked === countZeros) result++
            return;
        }

        if (grid[i][j] === 0) {
            grid[i][j] = -2;
            walked++;
        }

        dfs(grid, i + 1, j, walked);
        dfs(grid, i, j + 1, walked);
        dfs(grid, i - 1, j, walked);
        dfs(grid, i, j - 1, walked);

        if (grid[i][j] === -2) grid[i][j] = 0;
    }

    dfs(grid, startX, startY, 0);

    return result;
};
