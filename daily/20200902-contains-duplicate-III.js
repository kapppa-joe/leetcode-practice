/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (nums.length === 0 || k <= 0 || t < 0) return false;
    let buckets = new Map();

    // if t = 3, group 0~3 into one bucket, -4 ~ -1 into another.
    const getBucketId = (n) => n >= 0 ? parseInt(n / (t + 1)) : parseInt((n + 1) / (t + 1)) - 1;

    for (let i = 0; i < nums.length; i++) {
        let id = getBucketId(nums[i]);
        if (buckets.has(id)) return true;
        if (buckets.has(id - 1)) {
            if (nums[i] - buckets.get(id - 1) <= t) return true;
        }
        if (buckets.has(id + 1)) {
            if (buckets.get(id + 1) - nums[i] <= t) return true;
        }
        buckets.set(id, nums[i]);

        if (i >= k) {
            let oldBucketId = getBucketId(nums[i - k]);
            buckets.delete(oldBucketId);
        }
    }

    return false;
};

containsNearbyAlmostDuplicate([3,6,0,4],2,2);

