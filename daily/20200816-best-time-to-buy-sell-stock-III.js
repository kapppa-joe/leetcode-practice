/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;

    let firstBuy = Infinity, firstProfit = 0;
    let secondBuy = Infinity, secondProfit = 0;

    for (let price of prices) {
        firstBuy = Math.min(firstBuy, price);
        firstProfit = Math.max(firstProfit, price - firstBuy);
        secondBuy = Math.min(secondBuy, price - firstProfit);
        secondProfit = Math.max(secondProfit, price - secondBuy);
    }
    return secondProfit;
};
