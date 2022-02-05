/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 const fourSum = function(nums, target) {

    if(nums.length < 4) return [];

    let result = [];
    nums = nums.sort((a,b) => a-b);


    for(let i=0; i<nums.length-3; i++) {
        for(let j=0; j<nums.length-2; j++) {

            left = 0;
            right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[j]; + nums[left] + nums[right];
                if(sum === target) {
                    result.push(
                        [nums[i], nums[j], nums[left], nums[right]]
                    )
                    left ++;
                    right ++;
                } else if (sum < target) {
                    left ++;
                } else {
                    right --;
                }

            }

        }
    }




    console.log(result);
    return result;

};


const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

const nums2 = [-3, -1, 0, 2, 4, 5];


fourSum(nums, target);