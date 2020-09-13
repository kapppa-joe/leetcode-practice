/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let insertPos = null;
    let delCount = 0;
    let merged = newInterval;

    for (let i = 0; i < intervals.length; i++) {
        let res = tryMerge(intervals[i], merged);
        if (res) {
            insertPos = insertPos ?? i; 
            merged = res;
            delCount++;
        } else if (merged[1] < intervals[i][0]) {
            insertPos = insertPos ?? i;        
        }
    }

    insertPos = insertPos ?? intervals.length;

    intervals.splice(insertPos, delCount, merged);
    return intervals;
};

const tryMerge = (a, b) => {
    if (a[1] < b[0] || a[0] > b[1]) {
        return false;
    } else {
        return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
    }
}