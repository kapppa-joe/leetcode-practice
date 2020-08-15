/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let sorted = intervals.slice().sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);
    let curr = -Infinity;
    let intervalsTaken = 0;

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][0] >= curr) {
            curr = sorted[i][1];
            intervalsTaken++;
        }
    }

    return intervals.length - intervalsTaken;
}