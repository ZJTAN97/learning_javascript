/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const largestDivisibleSubset = function(nums) {
    
    nums.sort((a,b) => a-b);

    const dp = Array(nums.length).fill(1);

    for(let i=0; i<nums.length; i++) {
        let currMax = 0;
        for(let j=0; j<i; j++) {
            if(nums[i] % nums[j] === 0) {
                currMax = Math.max(currMax, dp[j]);
            }
        }
        dp[i] = currMax + 1;
    }
    
    let prev = -1;
    let max = Math.max(...dp);
    const result = [];

    for(let i=dp.length-1; i>=0; i--) {
        if((prev % nums[i] === 0 || prev === -1) && dp[i] === max) {
            result.push(nums[i]);
            prev = nums[i];
            max --;
        }
    }

    console.log(result);
    return result;

};

const nums = [1, 2, 3];
const nums2 = [1, 2, 3, 6];
const nums3 = [4, 8, 10, 240];
largestDivisibleSubset(nums); // [1,3] or [1,2]
largestDivisibleSubset(nums2); // [1, 3, 6]
largestDivisibleSubset(nums3); // [4, 8, 240]