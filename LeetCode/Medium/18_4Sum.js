/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 const fourSum = function(nums, target) {

    const result = [];
    nums = nums.sort((a,b) => a-b);


    for(let i=0; i<nums.length-3; i++) {
        for(let j=1+i; j<nums.length-2; j++) {
            let left = j + 1;
            let right = nums.length - 1;

            while(left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target) {
                    result.push([
                        nums[i], nums[j], nums[left], nums[right]
                    ]);
                    while(nums[left] === nums[left + 1]) left ++; // to avoid duplicates for left pointer
                    while(nums[right] === nums[right-1]) right --; // to avoid duplicates for right pointer
                    left ++;
                    right --;
                } else if (sum < target) {
                    left ++; // since array sorted, by incrementing left pointer, sum will increase
                } else {
                    right --; // since array sorted, by decrementing right pointer, sum will decrease
                }
            }
            while(nums[j] === nums[j+1]) j++;
        }
        while(nums[i] === nums[i+1]) i++;
    }

    console.log(result);
    return result;

};


const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

const nums2 = [-3, -1, 0, 2, 4, 5];


fourSum(nums, target);