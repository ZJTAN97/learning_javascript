/**
 * @param {number[]} nums
 * @return {number}
 */
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

    let robbed1 = 0;
    let robbed2 = 0;

    for(let i=nums.length-1; i>=0; i--) {
        const sumSkipped = robbed1;
        const sumRobbed = robbed2 + nums[i];

        const maxRobbed = Math.max(sumSkipped, sumRobbed);

        robbed2 = robbed1;
        robbed1 = maxRobbed;
    }

    console.log(robbed1);
    return robbed1;

}


const nums = [1, 2, 3, 1];
const nums2 = [2, 1, 1, 2];

robIterative(nums);