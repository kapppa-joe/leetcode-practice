/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) { // eslint-disable-line no-unused-vars
    return Math.log(num) / Math.log(4) % 1 === 0;
};