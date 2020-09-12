/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
    if (nums.length === 0) return 0;

    let max = -Infinity;
    let lmax = 1;
    let lmin = 1;
    let temp = null;

    for (let num of nums) {
        temp = lmax;
        lmax = Math.max(num, lmax * num, lmin * num);
        lmin = Math.min(num, temp * num, lmin * num);
        max = Math.max(lmax, max);
    }

    return max;
}