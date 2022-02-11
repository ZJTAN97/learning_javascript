/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 const coinChange = function(coins, amount) {
    
    const dp = new Array(amount+1).fill(amount+1);
    dp[0] = 0;

    for(let i=0; i<amount+1; i++) {
        for (c of coins) {
            if(i-c >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i-c]);
            }
        }
    }

    console.log(dp);

    return dp[amount] !== amount+1 ? dp[amount] : -1;


};


const coins = [1, 3, 4, 5];
const amount = 7;

console.log(coinChange(coins, amount));