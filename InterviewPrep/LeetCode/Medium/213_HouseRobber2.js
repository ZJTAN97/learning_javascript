/**
 * @param {number[]} nums
 * @return {number}
 */
 const rob = function(nums) {


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


const nums = [2, 3, 2];
const nums2 = [1, 2, 3];
const nums3 = [1, 2, 3, 1];



console.log(rob(nums)); // 3
console.log(rob(nums2)); // 4
console.log(rob(nums3)); // 4
