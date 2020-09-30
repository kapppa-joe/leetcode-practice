/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums.every(x => x !== 1)) return 1;

    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = 1;
        }
    }
    for (let i = 0; i < n; i++) {
        let j = Math.abs(nums[i]);
        if (j === n) {
            nums[0] = -1;
        } else {
            nums[j] = -1 * Math.abs(nums[j]);
        }
    }
    for (let i = 2; i < n; i++) {
        if (nums[i] > 0) {
            return i; 
        }
    }
    if (nums[0] > 0) {
        return n;
    } else {
        return n + 1;
    }
};

firstMissingPositive([0,1,2,0]);