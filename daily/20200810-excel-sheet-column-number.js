/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) { // eslint-disable-line no-unused-vars
    return s.split("")
            .map(charToDigit)
            .reverse()
            .reduce((acc, x, i) => acc + x * 26 ** i , 0);
};


/**
 * @param {string} char
 * @return {number}
 * 'A' -> 1, 'Z' -> 26
 */
const charToDigit = (char) => char.charCodeAt() - 64;