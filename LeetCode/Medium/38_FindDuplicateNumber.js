/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force memory, O(n) solution
 const findDuplicate = function(nums) {
    cache = {}
    for(let num of nums) {
        if(num in cache) {
            return num;
        }
        cache[num] = num;
    }
    return nums[-1];
};


const findDuplicate2 = function(nums) {
    // https://www.youtube.com/watch?v=32Ll35mhWg0
    let slow = nums[0];
    let fast = nums[nums[0]]; 

    while(slow !== fast) {
        // moving to the next pointer (think of linked lists)
        slow = nums[slow];
        fast = nums[nums[fast]] // advance twice as fast
    }
    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;

}


const eg1 = [1,3,4,2,2];
const eg2 = [3,1,3,4,2];


// console.log(findDuplicate(eg1));
// console.log(findDuplicate(eg2));

console.log(findDuplicate2(eg1));
console.log(findDuplicate2(eg2));