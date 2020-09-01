/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    let candidates = permutation(A).filter(time => isValidTime(time));
    if (candidates.length === 0) return '';
    let hash = candidates.map(time => toNum(time));
    let largest = 0;
    for (let i = 1; i < candidates.length; i++) {
        if (hash[i] > hash[largest]) {
            largest = i;
        }
    }
    return timeFormat(candidates[largest]);
};

const timeFormat = (arr) => {
    arr.splice(2, 0, ':');
    return arr.join('');
}
const toNum = (arr) => {
    return arr[0] * 1000 + arr[1] * 100 + arr[2] * 10 + arr[3];
}

const isValidTime = (arr) => {
    if (arr[0] > 2) return false;
    if (arr[0] === 2) {
        if (arr[1] > 3) return false;
    }
    if (arr[2] > 5) return false;
    return true;
}

const permutation = (arr, digits = 4) => {
    let res = [];
    let used = [];

    const dfs = (prefix = []) => {
        if (prefix.length === digits) {
            res.push(prefix);
            return;
        }
        for (let i in arr) {
            if (!used[i]) {
                used[i] = true;
                dfs(prefix.concat(arr[i]));
                used[i] = false;
            }
        }
    }
    dfs();
    return res;
}