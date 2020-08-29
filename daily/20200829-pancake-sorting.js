/**
 * @param {number[]} A
 * @return {number[]}
 */
const flip = (arr, n) => {
    if (n <= 1 || n > arr.length) return;
    arr.splice(0, n, ...arr.slice(0, n).reverse());
}

var pancakeSort = function(A) {
    let result = [];
    let target = A.length;
    let pos;
    let arr = [...A];

    while (target > 1) {
        pos = arr.indexOf(target);

        if (pos === target - 1) {
            target--;
            continue;
        }

        if (pos > 0) {
            flip(arr, pos + 1);
            result.push(pos + 1);
        }
        flip(arr, target);
        result.push(target);
        target--;
    }

    return result;    
};


// helper fn for testing.
const testFlip = (input, solution) => {
    let arr = [...input];
    for (let i of solution) {
        flip(arr, i);
    }
    return arr;
}

const genTestCase = (n) => {
    return Array(n).fill().map((_, i) => i + 1).sort(() => Math.random() - 0.5);
}