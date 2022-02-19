/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const threeSum = function(nums) {
    
    const result = [];
    nums = nums.sort((a, b) => a - b); // O(nlogn) for sorting

    // overall time complexity O(n^2)
    // space complexity O(1)

    for(let i=0; i<nums.length-2; i++) {

        if(i > 0 && nums[i] === nums[i-1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {

            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0) {
                let combination = [nums[i], nums[left], nums[right]];
                result.push(combination);
                while(nums[left] === nums[left+1]) left++;
                while(nums[right] === nums[right+1]) right --;
                left ++;
                right --;
            } else if (sum < 0) {
                left ++;
            } else {
                right --;
            }
        }
    }
    console.log(result);
    return result;
};


const nums = [-1, 0, 1, 2, -1, -4];
const nums2 = [-2, 0, 1, 1, 2];

threeSum(nums);