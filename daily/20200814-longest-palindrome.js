/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let countChars = {};
    for (let char of s) {
        countChars[char] = countChars[char] ? countChars[char] + 1 : 1;
    }
    let sumPairs = Object.keys(countChars)
                           .map(char => parseInt(countChars[char] / 2) * 2)
                           .reduce((sum, count) => sum + count, 0);
    let gotCenterChar = Object.values(countChars).some(count => count % 2 === 1);
    return sumPairs + (gotCenterChar ? 1 : 0);
};