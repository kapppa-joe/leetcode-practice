/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let result = [];
    let lastPos = {};
    let chars = new Set(S);
    for (let char of chars) {
        lastPos[char] = S.lastIndexOf(char);
    }

    let start = 0;
    let end = 1;
    while (start < S.length && end <= S.length) {
        let newEnd = end;
        for (let char of S.slice(start, end)) {
            newEnd = (newEnd >= lastPos[char] + 1) ? newEnd : (lastPos[char] + 1);
        }

        if (newEnd > end) {
            end = newEnd;
        } else {
            result.push(end - start);
            start = end;
            end = end + 1;
        }
    }

    return result
};