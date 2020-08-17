/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    // solving y = x * (x + 1) / 2, we have y = (sqrt(8x+1)-1)/2.
    let y = (Math.sqrt(8 * candies + 1) - 1) / 2;

    let turns = Math.ceil(y / num_people);
    let peopleInLastTurn = y % num_people === 0 ? num_people : Math.ceil(y % num_people);

    let result = [];
    for (let i = 0; i < num_people; i++) {
        if (i + 1 < peopleInLastTurn) {
            // turn1: i+1, turn2: i+1 + num_people, turn3: i+1 + 2 * num_people...
            result[i] = (turns - 1) * turns * num_people / 2 + (i + 1) * turns
            candies -= result[i];
        } else if (i + 1 > peopleInLastTurn) {
            // same as above case except actual turns to get candy is turns - 1;
            result[i] = (turns - 2) * (turns - 1) * num_people / 2 + (i + 1) * (turns - 1);
            candies -= result[i];
        }
    }
    result[peopleInLastTurn - 1] = candies;
    return result;
};
