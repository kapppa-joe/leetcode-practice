/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length === 0) return 0;

    citations.sort((a, b) => b - a);
    let max = Math.min(citations.length, citations[0]);
    for (let i = max; i > 0; i--) {
        if (citations[i - 1] >= i && (i === citations.length || citations[i] <= i)) {
            return i;
        }
    }
    return 0;
};