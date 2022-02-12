/**
 * @param {number[]} nums
 * @return {number}
 */

// https://www.youtube.com/watch?v=iGkRO_lgHzg

const rob = function(nums,id=0, memo={}) {
    
    // O(2^n) time
    // O(n) Space

    if(id in memo) {
        return memo[id];
    }

    if(id >= nums.length) {
        return 0;
    }

    const sumSkipped = rob(nums, id + 1, memo);
    const sumRobbed = rob(nums, id+2, memo) + nums[id];

    return memo[id] = Math.max(sumRobbed, sumSkipped);

};



const robIterative = function(nums) {

    // O(n) Time
    // O(1) Space 

    if (nums === null || nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let runningTotal = [];
    runningTotal[0] = nums[0];
    runningTotal[1] = Math.max(nums[0], nums[1]);

    for(let i=2; i<nums.length; i++) {
        runningTotal[i] = Math.max(runningTotal[i-1], runningTotal[i-2] + nums[i]);
    }

    console.log(runningTotal)
    
    return runningTotal[runningTotal.length-1];


}


const nums = [1, 2, 3, 1];
const nums2 = [2, 1, 1, 2];

robIterative(nums);