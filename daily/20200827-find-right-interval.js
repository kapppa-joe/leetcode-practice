/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let sortByStartPoint = intervals.map((rng, i) => [rng[0], rng[1], i])
                                    .sort((a, b) => a[0] - b[0]);
    
    const searchRight = (i) => {
        let targetNum = sortByStartPoint[i][1];
        let left = i + 1;
        let right = intervals.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (sortByStartPoint[mid][0] >= targetNum) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left < intervals.length ? sortByStartPoint[left][2] : -1;
    }

    let result = [];
    for (let i = 0; i < sortByStartPoint.length; i++) {
        result[sortByStartPoint[i][2]] = searchRight(i);
    }
    
    return result;
}
