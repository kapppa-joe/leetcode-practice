/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
const rand7 = () => parseInt((Math.random() * 7) + 1);

var rand10 = function() {
    let res = 0;
    while (res <= 0 || res > 40) {
        res = (rand7() - 1) * 7 + rand7();
    }
    return res % 10 + 1;
};

/*
const testRandom = (fn, n) => {
    let result = {};
    let res;
    for (let i = 0; i < n; i++) {
        res = fn();
        result[res] = result[res] ? result[res] + 1 : 1;
    }
    return result;
}*/