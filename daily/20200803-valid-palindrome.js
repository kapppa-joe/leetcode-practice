/**
 * @param {string} rawStr
 * @return {boolean}
 */

var isPalindrome = function(rawStr) { // eslint-disable-line no-unused-vars
    let s = rawStr.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < s.length / 2; i++){
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
}

/* I like this better but seems that leetcode discourage this type of solution :(
var isPalindrome = function(s) {
    let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr.split('').reverse().join('') === cleanStr;
};
*/