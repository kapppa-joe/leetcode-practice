/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let b = t[t.length - 1].charCodeAt();
    for (let i = 0; i < s.length; i++) {
        b = b ^ s[i].charCodeAt();
        b = b ^ t[i].charCodeAt();
    }
    return String.fromCharCode(b);
};