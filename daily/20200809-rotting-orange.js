/**
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j 
 * @return {number[][]} pair of i, j;
 */
const nearRotten = (grid, i, j) => {
    if (grid[i][j - 1] === 2 || grid[i][j + 1] === 2) return true;
    if ((i > 0 && grid[i - 1][j]) === 2 || (i < grid.length - 1 && grid[i + 1][j] === 2)) return true;
    return false;
}

/**
 * @param {number[][]} grid
 * @return {number[][]} pair of i, j;
 */
const willRot = (grid) => {
    let result = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 1) continue;
            if (nearRotten(grid, i, j)) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

/**
 * @param {number[][]} grid
 * @param {number[][]} update (pair of i, j)
 * @return {} update in place to reduce memory usage;
 */
const updateGrid = (grid, update) => {
    for (let [i, j] of update) {
        if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length) {
            grid[i][j] = 2;
        }
    }
}

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkSomeFresh = (grid) => {
    return grid.some(line => line.some(cell => cell === 1))
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) { // eslint-disable-line no-unused-vars
    let turn = 0;
    while (checkSomeFresh(grid, 1)) {
        let update = willRot(grid);
        if (update.length === 0) return -1;
        updateGrid(grid, update);
        turn++;
    }
    return turn;
};