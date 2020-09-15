/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if (n <= 3) return Math.max(0, ...nums);

    let dp = Array(n).fill().map(() => []);

    dp[0] = [nums[0], 0];
    dp[1] = [Math.max(nums[0], nums[1]), nums[1]];
    dp[2] = [Math.max(dp[1][0], dp[0][0] + nums[2]), Math.max(nums[1], nums[2])]
    for (let i = 2; i < n - 1; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][0] + nums[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][1] + nums[i]);
    }
    dp[n - 1][0] = dp[n - 2][0];
    dp[n - 1][1] = Math.max(dp[n - 2][1], dp[n - 3][1] + nums[n - 1]);

    return Math.max(...dp[n - 1]);
};