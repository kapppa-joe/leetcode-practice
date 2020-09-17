/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let max = 0;
    let mask = 0;
    let s = new Set();

    for (let i = 30; i >= 0; i--) {
        mask |= (1 << i);
        let newMax = max | (1 << i);

        for (let j = 0; j < nums.length; j++) {
            s.add(nums[j] & mask);
        }

        for (let prefix of s) {
            if (s.has(newMax ^ prefix)) {
                max = newMax;
                break
            }
        }
        s.clear();
    }

    return max;
};