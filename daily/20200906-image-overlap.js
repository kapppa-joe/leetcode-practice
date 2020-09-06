/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
    let n = A.length;
    let scores = Array(4 * n * n).fill(0);

    // i, j: coordinate ;  x, y: translation 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let x = -i; x + i < n; x++) {
                for (let y = -j; y + j < n; y++) {
                    scores[(x + n - 1) * (2 * n -1) + (y + n - 1)] += A[i][j] * B[i + x][j + y];
                }
            }
        }
    }
    return Math.max(...scores);
};