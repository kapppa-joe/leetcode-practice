/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let timeline = [];
    for (let trip of trips) {
        timeline[trip[1]] = timeline[trip[1]] ? timeline[trip[1]] - trip[0] : -trip[0];
        timeline[trip[2]] = timeline[trip[2]] ? timeline[trip[2]] + trip[0] : trip[0];
    }
    for (let i in timeline) {
        capacity += timeline[i];
        if (capacity < 0) {
            return false;
        }
    }
    return true;
};