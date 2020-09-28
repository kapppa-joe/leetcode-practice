/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let result = 0;
    let windowStart = 0;
    let windowProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        windowProduct *= nums[i];
        while (windowProduct >= k && windowStart < i) {
            windowProduct /= nums[windowStart];
            windowStart++;
        }
        result += i - windowStart;
        if (nums[i] < k) result++;
    }
    return result;    
};