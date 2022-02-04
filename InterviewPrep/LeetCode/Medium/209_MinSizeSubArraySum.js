/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 const minSubArrayLen = function(target, nums) {

    let left = 0;
    let total = 0;
    let result = Infinity;

    for(let right=0; right<nums.length; right++) {
        total += nums[right];
        while(total >= target) {
            result = Math.min(right - left + 1, result);
            total -= nums[left];
            left += 1;
        }
    }

    console.log(result);
    return result === Infinity ? 0 : result;

};


const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
const target2 = 213;
const nums2 = [12,28,83,4,25,26,25,2,25,25,25,12];
const target3 = 7;
const nums3 = [2,3,1,2,4,3];

minSubArrayLen(target3, nums3);