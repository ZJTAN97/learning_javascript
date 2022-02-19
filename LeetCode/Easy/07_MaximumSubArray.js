/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray = function(nums) {

    if (nums.length === 1) return nums;

    let currentSum = 0;
    let currentMax = nums[0];

    for(let num of nums) {

        if(currentSum < 0) {
            currentSum = 0;
        }
        currentSum += num;
        currentMax = Math.max(currentMax, currentSum);

    }
    return currentMax;
};

