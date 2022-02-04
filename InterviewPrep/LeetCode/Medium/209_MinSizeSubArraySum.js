/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 const minSubArrayLen = function(target, nums) {

    let sum = 0;

    for(let i=0; i<nums.length; i++) {

        if(sum < target) {
            sum += nums[i];
        }

        if(sum >= target) {
            
        }

        // need find a way to reset to 0 if a certain condition hit

    }

};


const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
const target2 = 213;
const nums2 = [12,28,83,4,25,26,25,2,25,25,25,12];

minSubArrayLen(target2, nums2);