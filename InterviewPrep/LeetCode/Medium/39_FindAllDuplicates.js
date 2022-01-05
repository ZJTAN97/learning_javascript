/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const findDuplicates = function(nums) {
    const duplicates = [];

    for (let num of nums) {
        const otherIndex = Math.abs(num) - 1;
        if (nums[otherIndex] > 0) {
            // Flip it to negative to mark that we've visited it:
            nums[otherIndex] = nums[otherIndex] * -1;
        } else {
            duplicates.push(Math.abs(num));
        }
    }

    return duplicates;
};




const eg1 = [4,3,2,7,8,2,3,1];
const eg2 = [1,1,2];
const eg3 = [1];


console.log(findDuplicates(eg1));
console.log(findDuplicates(eg2));
console.log(findDuplicates(eg3));