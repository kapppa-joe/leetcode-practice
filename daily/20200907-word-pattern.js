/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    if (str.length === 0) return false;
    let strArr = str.split(' ');
    if (strArr.length !== pattern.length) return false

    let map = {};
    let revMap = {};

    for (let i in strArr) {
        if (!map[pattern[i]]) {
            map[pattern[i]] = strArr[i];
            if (revMap[strArr[i]]) return false;
            revMap[strArr[i]] = pattern[i];
        } else {
            if (map[pattern[i]] !== strArr[i] || revMap[strArr[i]] !== pattern[i]) {
                return false;
            }
        }
    }

    return true;
};