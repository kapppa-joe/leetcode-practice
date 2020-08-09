/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Use the array itself to track seen numbers. Negative num means that the index + 1 was seen before.
var findDuplicates = function(nums) { // eslint-disable-line no-unused-vars
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1 ] < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            nums[Math.abs(nums[i]) - 1 ] *= -1;
        }
    }
    return result;
};