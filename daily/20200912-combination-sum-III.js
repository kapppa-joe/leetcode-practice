/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if (n < k || n > k * 9) return [];

    let results = [];
    let v = [];

    const sum = (nums) => nums.reduce((acc, i) => acc + i, 0);

    const helper = (num = 1) => {
        if (v.length === k) {
            let currSum = sum(v);
            if (currSum === n) {
                results.push([...v]);
            }
            return (currSum >= n);
        }
        if (sum(v) >= n) {
            return true;
        }
        for (let i = num; i <= 9; i++) {
            v.push(i)
            let res = helper(i + 1);
            v.pop();
            if (res) break;
        }
    }

    helper();
    return results;
};
