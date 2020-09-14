/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);

    let maxTotal = []
    maxTotal.push(nums[0]);
    maxTotal.push(Math.max(nums[0], nums[1]));
    for (let i = 2; i < nums.length; i++) {
        maxTotal[i] = Math.max(maxTotal[i - 1], maxTotal[i - 2] + nums[i]);
    }
    return maxTotal.pop();
};