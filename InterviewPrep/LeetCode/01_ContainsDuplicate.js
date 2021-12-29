/**
 * @param {number[]} nums
 * @return {boolean}
 */

const objectSolution = function(nums) {
    let hashMap = {};
    for (let i=0; i < nums.length; i++) {
        let num = nums[i];
        if(hashMap[num]) {
            return true;
        }
        hashMap[num] = true;
    }
};


const setSolution = function(nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
}

console.log(objectSolution([1,2,3,1]))
console.log(objectSolution([1,2,3,1]))