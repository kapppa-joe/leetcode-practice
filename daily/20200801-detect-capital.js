/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) { // eslint-disable-line no-unused-vars
    return /^([A-Z]*|[A-Z][a-z]*|[a-z]*)$/.test(word);
};
