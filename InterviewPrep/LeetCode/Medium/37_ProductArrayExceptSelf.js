/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const productExceptSelf = function(nums) {

    const result = [];

    let prefix = 1;
    for(let i=0; i<nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for(let i=nums.length-1; i>=0; i--) {
        result[i] = result[i] * postfix;
        postfix *= nums[i];
    }
    

    console.log(result);

};





console.log(productExceptSelf([1, 2, 3, 4])); //24 12 8 6
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));