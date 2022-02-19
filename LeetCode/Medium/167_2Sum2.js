/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  
    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        let sum = numbers[left] + numbers[right];
        if(sum === target) {
            return [left+1, right+1]
        } else if (sum < target) {
            left ++;
        } else {
            right --;
        }

    }
    return [];    
};


const nums = [2, 7, 11, 15];
const target = 9;
const nums2 = [2, 3, 4];
const target2 = 6;

twoSum(nums, target);
twoSum(nums2, target2);