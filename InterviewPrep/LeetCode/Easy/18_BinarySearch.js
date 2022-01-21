/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;


    while(left <= right) {

        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) return middle;

        else if(nums[middle] < target) {
            left = middle + 1;
        }

        else {
            right = middle - 1;
        }

    }
    return -1;
};





const eg1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9;
const target2 = 2;



console.log(search(eg1, target1));
console.log(search(eg1, target2));