/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = function(prices) {

    let buy = prices[0];
    let sell = prices[1];

    let currProfit = 0;
    let profit = sell - buy;

    for(let i=2; i <prices.length; i++) {
        if(sell < buy) {
            buy = sell;
        }
        sell = prices[i];
        currProfit = sell - buy;
        if(currProfit > profit)  profit = currProfit;
        
    }

    return profit < 0 || isNaN(profit) ? 0 : profit;
};


const example = [2, 4, 1];

console.log(maxProfit(example));