/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let validCut = [];
    let dict = new Set(wordDict);

    validCut.push(0);
    for (let j = 1; j <= s.length; j++) {
        for (let i of validCut) {
            if (dict.has(s.slice(i, j))) {
                validCut.push(j);
                break;
            }
        }
    }
    return validCut.pop() === s.length;
};