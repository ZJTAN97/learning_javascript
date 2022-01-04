/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const productExceptSelf = function(nums) {

    const output = [];
    let multiplier = 1;
    for (let i=0; i < nums.length; i++) {
        output[i] = multiplier;
        multiplier *= nums[i];
    }

    multiplier = 1;
    for(let i=nums.length-1; i >= 0; i--) {
        output[i] *= multiplier;
        multiplier *= nums[i];
    }

    return output;

};




console.log(productExceptSelf([1, 2, 3, 4])); //24 12 8 6
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));