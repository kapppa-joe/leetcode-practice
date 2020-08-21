/**
 * @param {number[]} arr
 * @return {number[]}
 */

// make new array
var sortArrayByParity = function(arr) {
    let odds = arr.filter(x => x % 2 === 1);
    let evens = arr.filter(x => x % 2 === 0);
    return [...evens, ...odds];
};

// sort in-place
var sortArrayByParity = function(arr) {
    let fast = 0;
    let slow = 0;

    while (fast < arr.length) {
        if (arr[fast] % 2 === 0) {
            [arr[fast], arr[slow]] = [arr[slow], arr[fast]];
            slow++;
        }
        fast++
    }
    return arr;
};


// by recursive
var sortArrayByParity = function(arr) {
    if (arr.length === 0) return [];
    if (arr[0] % 2 === 0) {
        return [arr[0], ...sortArrayByParity(arr.slice(1))];
    } else {
        return [...sortArrayByParity(arr.slice(1)), arr[0]];
    }
};
