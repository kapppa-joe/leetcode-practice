/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    if (n === 1) return [0,1,2,3,4,5,6,7,8,9];

    let result = [1,2,3,4,5,6,7,8,9];
    while (n > 1) {
        result = result.flatMap(num => {
            let x = num % 10;
            let arr = [];
            if (x - k >= 0) arr.push(num * 10 + x - k);
            if (k !== 0 && x + k < 10) arr.push(num * 10 + x + k);
            return arr;
        })
        n--;
    }
    return result;
};