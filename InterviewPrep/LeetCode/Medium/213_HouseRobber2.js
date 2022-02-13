/**
 * @param {number[]} nums
 * @return {number}
 */
 const rob = function(nums) {
    // O(1) Space Solution
    // O(n) Time
    
    const helper = (nums) => {
        let robbed1 = 0;
        let robbed2 = 0;
    
        for(let i=nums.length - 1; i>= 0; i--) {
            const sumSkipped = robbed1;
            const sumRobbed = robbed2 + nums[i];
            const maxRobbed = Math.max(sumRobbed, sumSkipped);
            robbed2 = robbed1;
            robbed1 = maxRobbed;
        
        }
        return robbed1;
    }
    return Math.max(nums[0], helper(nums.slice(0, nums.length-1)), helper(nums.slice(1)))
};


const rob2 = function(nums) {
    // O(n) Space Solution
    // O(n) Time

    const helper = (nums) => {

        if(nums.length === 0 || nums === null) {
            return 0;
        }
        
        if(nums.length === 1) {
            return nums[0];
        }

        let runningTotal = [];
        runningTotal[0] = nums[0];
        runningTotal[1] = Math.max(nums[0], nums[1]);
        for(let i=2; i<nums.length; i++) {
            runningTotal[i] = Math.max(runningTotal[i-1], runningTotal[i-2] + nums[i]);
        }
        return runningTotal[runningTotal.length-1];
    }

    return Math.max(nums[0], helper(nums.slice(0, nums.length-1)), helper(nums.slice(1)));
}




const nums = [2, 3, 2];
const nums2 = [1, 2, 3];
const nums3 = [1, 2, 3, 1];



console.log(rob(nums)); // 3
console.log(rob(nums2)); // 4
console.log(rob(nums3)); // 4
