/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let result = [];

    const build = (digits, next = 1, prefix = '') => {
        if (digits > 9 - next + 1) {
            return '';
        } else if (digits === 1) {
            return prefix + next;
        } else {
            return build(digits - 1, next + 1, prefix + next);
        }
    }
    const countDigits = (num) => (Math.log10(num) | 0) + 1;

    for (let d = countDigits(low); d <= countDigits(high); d++) {
        for (let i = 1; i <= 9 - d + 1; i++) {
            result.push(build(d, i));
        }
    }

    return result.filter(x => x >= low)
                 .filter(x => x <= high)
                 .map(x => parseInt(x));
};