/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let lowestBuying = Infinity;
    for (let price of prices) {
        maxProfit = Math.max(maxProfit, price - lowestBuying);
        lowestBuying = Math.min(lowestBuying, price);
    }
    return maxProfit;
};