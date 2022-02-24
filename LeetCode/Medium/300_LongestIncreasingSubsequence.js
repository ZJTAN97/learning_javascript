/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {

    const dp = Array(nums.length).fill(1);
    
    for(let i=nums.length-1; i>=0; i--) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1+dp[j]);
            }
        }
    }
    
    console.log(dp);
    return Math.max(...dp);

};

const sample = [1, 2, 4 ,3];
const sample2 = [10, 9, 2, 5, 3, 7, 101, 18];

lengthOfLIS(sample2);