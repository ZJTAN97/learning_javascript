/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 const coinChange = function(coins, amount) {

    // Solve bottom up, DP approach
    // start from smallest, 0 instead of from the amount given
    // dp[0] amount --> 0 coins (how many coins does it take for us to sum to 0)

    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0; 

    for(let i=0; i<amount+1; i++) {
        for(let coin of coins) {
            if(i - coin >= 0) { // leftover from amount >= 0, continue searching
                /**
                 * Example coin = 4, amount = 7
                 * dp[7] = 1 + dp[7-4] --> dp[7] = 1 + dp[3]
                 */
                dp[i] = Math.min(dp[i], 1 + dp[i-coin]); // recurrence relation
            }
        }
    }
    // return only if the value is not the default max value
    // if not return -1 cause cannot find a solution
    return dp[amount] !== amount + 1 ? dp[amount] : -1;

};


const coins = [1, 3, 4, 5];
const amount = 7;

coinChange(coins, amount);