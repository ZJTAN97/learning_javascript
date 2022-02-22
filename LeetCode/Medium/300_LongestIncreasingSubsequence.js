/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {

    const dp = [];
    for(let i=0; i<nums.length; i++) {
        dp.push(1);
        for(let j=0; j<i; j++) {
            if(nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }

    return nums.length ? Math.max.apply(null, lis) : 0;

};