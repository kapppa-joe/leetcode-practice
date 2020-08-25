/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let totalCost = [0];
    let lastDay = days[days.length - 1];
    
    for (let i = 1; i <= lastDay; i++) {
        if (days.includes(i)) {
            totalCost[i] = totalCost[i - 1] + costs[0];
        } else {
            totalCost[i] = totalCost[i - 1];
        }
        totalCost[i] = Math.min(totalCost[i], ( i >= 7 ? totalCost[i - 7] : 0) + costs[1]);
        totalCost[i] = Math.min(totalCost[i], ( i >= 30 ? totalCost[i - 30] : 0) + costs[2]);
    }

    return totalCost.pop();
};