const twoSum = function(nums, target) {
    const hash = {};
    const returnArr = [];

    for(let i=0; i < nums.length; i++) {
        if( target - nums[i] in hash ) {
            returnArr.push(hash[target - nums[i]])
            returnArr.push(i);
        }
        hash[nums[i]] = i;
    }
    return returnArr;
}








console.log(twoSum([2,7,11,15], 9));