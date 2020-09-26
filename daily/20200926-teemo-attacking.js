/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(t, duration) {
    let result = 0;
    let poisonCounter = 0;
    for (let i = 0; i < t.length; i++) {
        result += duration;
        if (poisonCounter > t[i]) {
            result -= (poisonCounter - t[i]);
        }
        poisonCounter = t[i] + duration;
    }
    return result;
};