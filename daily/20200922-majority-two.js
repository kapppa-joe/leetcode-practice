/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let m1 = null, m2 = null;
    let c1 = 0, c2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (m1 === null && m2 !== nums[i]) {
            m1 = nums[i];
            c1++;
            continue;
        } 
        if (m2 === null && m1 !== nums[i]) {
            m2 = nums[i];
            c2++;
            continue;
        } 
        if (m1 === nums[i]) {
            c1++;
        } else if (m2 === nums[i]) {
            c2++;
        } else {
            c1--;
            c2--;
            if (c1 === 0) m1 = null;
            if (c2 === 0) m2 = null;
        }
    } 

    if (m1 === null && m2 === null) {
        return [];
    }

    c1 = 0, c2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (m1 === nums[i]) c1++;
        if (m2 === nums[i]) c2++;
    }

    let result = [];
    if (c1 > nums.length / 3) result.push(m1);
    if (c2 > nums.length / 3) result.push(m2);
    return result;
};

console.log(majorityElement([1,1,1,3,3,2,2,2]));