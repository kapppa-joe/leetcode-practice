/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let ans = nums.sort((a, b) => {
        return parseInt(b + '' + a) - parseInt(a + '' + b);
    }).join('');

    if (ans[0] === "0") {
        return "0";
    } else {
        return ans;
    }
};